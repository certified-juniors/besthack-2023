import ProtoMessageDecoder from "./ParseProto";

export function OnRecieve(response) {
    return ProtoMessageDecoder(response);    
}

export function getEventTimeStamp(response) {
    const data = OnRecieve(response);
    return data.header.timestamp;
}

function getEventStatusData(response) {
    const data = OnRecieve(response);
    return data.event.status;
}

export function getDetails(response) {
    const status = getEventStatusData(response);
    return status.details;
}

export function getNextTime(response) {
    const nextTime = getEventStatusData(response);
    return nextTime.nextTime;
}

export function getType(response) {
    const type = getEventStatusData(response);
    return type.type;
}

export function getCaption(response) {
    const caption = getEventStatusData(response);
    return caption.advStatus.caption;
}

export function getFields(response) {
    const fields = getEventStatusData(response);
    return fields.advStatus.fields;
}

export function getData(response) {
    const data = getEventStatusData(response);
    return data.advStatus.data;
}

export function getFullOrIncrement(response) {
    const fullOrIncrement = getData(response);
    return fullOrIncrement.fullOrIncrement;
}

export function getDataRows(response) {
    const rows = getData(response);
    return rows.rows;
}

export function getDataFields(response) {
    const fields = getData(response);
    return fields.fields;
}
