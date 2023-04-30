import ProtoMessageDecoder from "./ParseProto";

export let lastTable = {
    details: "",
    nextTime: "",
    timestamp: 0,
    columns: [],
    rowIdents: [],
    fields: [],
};

/**
 * Декодирует сообщение, полученное от сервера
 * @param {ArrayBuffer} response 
 * @returns {ExchangeInfoMessage} message
 */
function OnRecieve(response) {
    return ProtoMessageDecoder(response);
}

/**
 * Время генерации сообщения на сервисе БИ
 * @param {ExchangeInfoMessage} message 
 * @returns {number} timestamp
 */
function getEventTimeStamp(message) {
    return message.header.timestamp;
}

/**
 * Статус сообщения
 * @param {ExchangeInfoMessage} message 
 * @returns {Status}
 */
function getEventStatus(message) {
    return (message.event ?? message.response).status
}

/**
 * Детальное описание статуса сообщения
 * @param {ExchangeInfoMessage} message
 * @returns {string} details
 */
function getDetails(message) {
    const status = getEventStatus(message);
    return status.details;
}

// возвращает время, через которое будет получено следующее сообщение (в миллисекундах)
/**
 * Время, через которое будет получено следующее сообщение
 * @param {ExchangeInfoMessage} message
 * @returns {number} nextTime
 */
function getNextTime(message) {
    const status = getEventStatus(message);
    return status.nextTime;
}

/**
 * Тип сообщения
 * @param {ExchangeInfoMessage} message
 * @returns {StatusType} type
 */
function getType(message) {
    const status = getEventStatus(message);
    return status.type;
}

// возвращает заголовок события (string)
/**
 * Заголовок события
 * @param {ExchangeInfoMessage} message
 * @returns {string} caption
 */
function getCaption(message) {
    const status = getEventStatus(message);
    return status.advStatus.caption;
}

/**
 * Массив структур полей таблицы
 * @param {ExchangeInfoMessage} message
 * @returns {AdvInfoFieldRef} fields
 */
function getFields(message) {
    const status = getEventStatus(message);
    return status.advStatus.fields;
}

/**
 * Записи со значениями полей
 * @param {ExchangeInfoMessage} message
 * @returns {AdvInfoData} data
 */
function getData(message) {
    const status = getEventStatus(message);
    return status.advStatus.data;
}

/**
 * Массив структур строк таблицы
 * @param {ExchangeInfoMessage} message
 * @returns {DataRow} rows
 */
function getDataRows(message) {
    const data = getData(message);
    return data.rows;
}

// возвращает массив полей (AdvInfoFieldRef)
/**
 * Массив полей таблицы
 * @param {ExchangeInfoMessage} message
 * @returns {AdvInfoFieldRef} fields
 */
function getDataFields(response) {
    const status = getEventStatus(response);
    return status.advStatus.fields;
}

// возвращает флаг fullOrIncrement (boolean)
/**
 * Флаг fullOrIncrement
 * @param {ExchangeInfoMessage} message
 * @returns {boolean} fullOrIncrement
 * @description Если true, то таблица полностью обновлена, иначе - инкрементально
 */
function getFullOrIncrement(message) {
    return getData(message).fullOrIncrement;
}

/**
 * Типизированное значение
 * @param {number} type
 * @param {any} value
 * @returns {any} typedValue
 * @example getTypedValue(0, 1) // '1'
 * @example getTypedValue(1, 1) // 1
 * @example getTypedValue(2, 1) // 1.00
 * @example getTypedValue(3, 1) // true
 * @example getTypedValue(4, 1) // Date
 */
function getTypedValue(type, value) {
    switch (type) {
        case 0: // string
            return value.toString();
        case 1: // int
            return Number(value);
        case 2: // double
            return Number(value).toFixed(2);
        case 3: // bool
            return Boolean(value);
        case 4: // datetime
            return new Date(value);
        default:
            return value;
    }
}

/**
 * Возвращает обновленную таблицу
 * @param {Object} response 
 * @returns {Object} table
 * @returns {Array} table.fields - массив полей таблицы
 * @returns {Array} table.columns - массив столбцов таблицы
 * @returns {Array} table.types - массив типов полей таблицы
 * @returns {Array} table.timestamp - время, когда было получено последнее сообщение
 * @returns {Array} table.caption - заголовок последнего события
 * @returns {Array} table.details - детальное описание последнего события
 * @returns {Array} table.statusType - тип готовности сервиса БИ\
 * @returns {Array} table.rowIdents - массив идентификаторов строк таблицы
 */
export function updateTable(response) {
    const message = OnRecieve(response);
    const fullOrIncrement = getFullOrIncrement(message); //Boolean

    const rows = getDataRows(message);
    const fields = getFields(message);

    const aliases = fields.map(field => field.alias);
    const captions = fields.map(field => field.caption);
    const types = fields.map(field => field.type);

    const sortedRows = rows;
    let columns = fields.map(field => []);
    let rowIdents = [];
    let incrementDeletes = [];
    // fill columns
    for (let i = 0; i < sortedRows.length; i++) {
        const row = sortedRows[i];
        for (let j = 0; j < row.values.length; j++) {
            const dataFieldValue = row.values[j];
            const aliasOfDataField = dataFieldValue.alias;
            const type = dataFieldValue.value.type;
            const value = dataFieldValue.value.value;

            // type = enum dataType from Proto
            const typedValue = getTypedValue(type, value); //todo
            // add value to column by alias 
            const columnIndex = aliases.indexOf(aliasOfDataField);
            columns[columnIndex].push(typedValue);
        }
        // add null to other columns
        for (let j = 0; j < columns.length; j++) {
            if (columns[j].length < i + 1) {
                columns[j].push(null);
            }
        }
        // add rowIdent to rowIdents
        rowIdents.push(row.rowIdent);
        incrementDeletes.push(row.incrementDelete);
    }
    if (!fullOrIncrement || lastTable == null) {
        // return only gotten data
        lastTable = {
            fields: captions,
            columns: columns,
            types: types,
            timestamp: getEventTimeStamp(message),
            caption: getCaption(message),
            details: getDetails(message),
            statusType: getType(message),
            rowIdents,
        }
        return lastTable;
    }
    const previousTable = lastTable;
    const previousFields = previousTable.fields;
    // sort current collumns by previous fields
    const sortedColumns = [];
    for (let i = 0; i < previousFields.length; i++) {
        const previousField = previousFields[i];
        const previousAlias = previousField.alias;
        const columnIndex = aliases.indexOf(previousAlias);
        sortedColumns.push(columns[columnIndex]);
    }
    // increment and
    for (let i = 0; i < rowIdents.length; i++) {
        // Работаем с предыдущей таблицей
        const rowIdent = previousTable.rowIdents[i];
        const previousRowIndex = previousTable.rowIdents.indexOf(rowIdent);
        if (previousRowIndex == -1) {
            // 1. Если строки с данными из поля rows нет в GUI значит ее нужно добавить
            for (let j = 0; j < columns.length; j++) {
                previousTable.columns[j].push(columns[j][i]);
            }
            previousTable.rowIdents.push(rowIdent);
        } else if (incrementDeletes[i]) {
            // 3. Если строка с данными из поля rows помечена флагом incrementDelete = true значит эта строка должна быть удалена из GUI
            for (let j = 0; j < columns.length; j++) {
                previousTable.columns[j].splice(previousRowIndex, 1);
            }
            previousTable.rowIdents.splice(previousRowIndex, 1);
        } else {
            // 2. Если строка с данными из поля rows есть в GUI значит значения полей в GUI нужно заменить значениями полей из пришедшей строки
            for (let j = 0; j < columns.length; j++) {
                previousTable.columns[j][previousRowIndex] = columns[j][i];
            }
        }

    }
    lastTable ={
        fields: previousTable.fields,
        columns: previousTable.columns,
        types: previousTable.types,
        timestamp: getEventTimeStamp(message),
        caption: getCaption(message),
        details: getDetails(message),
        statusType: getType(message),
        rowIdents: previousTable.rowIdents,
    }
    return lastTable;
}
