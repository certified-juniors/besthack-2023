/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ru = (function() {

    /**
     * Namespace ru.
     * @exports ru
     * @namespace
     */
    var ru = {};

    ru.sovcombank = (function() {

        /**
         * Namespace sovcombank.
         * @memberof ru
         * @namespace
         */
        var sovcombank = {};

        sovcombank.hackaton = (function() {

            /**
             * Namespace hackaton.
             * @memberof ru.sovcombank
             * @namespace
             */
            var hackaton = {};

            hackaton.proto = (function() {

                /**
                 * Namespace proto.
                 * @memberof ru.sovcombank.hackaton
                 * @namespace
                 */
                var proto = {};

                proto.AdvInfo = (function() {

                    /**
                     * Properties of an AdvInfo.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @interface IAdvInfo
                     * @property {string|null} [caption] AdvInfo caption
                     * @property {Array.<ru.sovcombank.hackaton.proto.IAdvInfoFieldRef>|null} [fields] AdvInfo fields
                     * @property {ru.sovcombank.hackaton.proto.IAdvInfoData|null} [data] AdvInfo data
                     */

                    /**
                     * Constructs a new AdvInfo.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @classdesc Represents an AdvInfo.
                     * @implements IAdvInfo
                     * @constructor
                     * @param {ru.sovcombank.hackaton.proto.IAdvInfo=} [properties] Properties to set
                     */
                    function AdvInfo(properties) {
                        this.fields = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * AdvInfo caption.
                     * @member {string} caption
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfo
                     * @instance
                     */
                    AdvInfo.prototype.caption = "";

                    /**
                     * AdvInfo fields.
                     * @member {Array.<ru.sovcombank.hackaton.proto.IAdvInfoFieldRef>} fields
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfo
                     * @instance
                     */
                    AdvInfo.prototype.fields = $util.emptyArray;

                    /**
                     * AdvInfo data.
                     * @member {ru.sovcombank.hackaton.proto.IAdvInfoData|null|undefined} data
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfo
                     * @instance
                     */
                    AdvInfo.prototype.data = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * AdvInfo _data.
                     * @member {"data"|undefined} _data
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfo
                     * @instance
                     */
                    Object.defineProperty(AdvInfo.prototype, "_data", {
                        get: $util.oneOfGetter($oneOfFields = ["data"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new AdvInfo instance using the specified properties.
                     * @function create
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfo
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IAdvInfo=} [properties] Properties to set
                     * @returns {ru.sovcombank.hackaton.proto.AdvInfo} AdvInfo instance
                     */
                    AdvInfo.create = function create(properties) {
                        return new AdvInfo(properties);
                    };

                    /**
                     * Encodes the specified AdvInfo message. Does not implicitly {@link ru.sovcombank.hackaton.proto.AdvInfo.verify|verify} messages.
                     * @function encode
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfo
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IAdvInfo} message AdvInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AdvInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.caption != null && Object.hasOwnProperty.call(message, "caption"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.caption);
                        if (message.fields != null && message.fields.length)
                            for (var i = 0; i < message.fields.length; ++i)
                                $root.ru.sovcombank.hackaton.proto.AdvInfoFieldRef.encode(message.fields[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                            $root.ru.sovcombank.hackaton.proto.AdvInfoData.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified AdvInfo message, length delimited. Does not implicitly {@link ru.sovcombank.hackaton.proto.AdvInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfo
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IAdvInfo} message AdvInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AdvInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an AdvInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ru.sovcombank.hackaton.proto.AdvInfo} AdvInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AdvInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ru.sovcombank.hackaton.proto.AdvInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.caption = reader.string();
                                    break;
                                }
                            case 2: {
                                    if (!(message.fields && message.fields.length))
                                        message.fields = [];
                                    message.fields.push($root.ru.sovcombank.hackaton.proto.AdvInfoFieldRef.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 3: {
                                    message.data = $root.ru.sovcombank.hackaton.proto.AdvInfoData.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an AdvInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ru.sovcombank.hackaton.proto.AdvInfo} AdvInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AdvInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an AdvInfo message.
                     * @function verify
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    AdvInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.caption != null && message.hasOwnProperty("caption"))
                            if (!$util.isString(message.caption))
                                return "caption: string expected";
                        if (message.fields != null && message.hasOwnProperty("fields")) {
                            if (!Array.isArray(message.fields))
                                return "fields: array expected";
                            for (var i = 0; i < message.fields.length; ++i) {
                                var error = $root.ru.sovcombank.hackaton.proto.AdvInfoFieldRef.verify(message.fields[i]);
                                if (error)
                                    return "fields." + error;
                            }
                        }
                        if (message.data != null && message.hasOwnProperty("data")) {
                            properties._data = 1;
                            {
                                var error = $root.ru.sovcombank.hackaton.proto.AdvInfoData.verify(message.data);
                                if (error)
                                    return "data." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an AdvInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ru.sovcombank.hackaton.proto.AdvInfo} AdvInfo
                     */
                    AdvInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.ru.sovcombank.hackaton.proto.AdvInfo)
                            return object;
                        var message = new $root.ru.sovcombank.hackaton.proto.AdvInfo();
                        if (object.caption != null)
                            message.caption = String(object.caption);
                        if (object.fields) {
                            if (!Array.isArray(object.fields))
                                throw TypeError(".ru.sovcombank.hackaton.proto.AdvInfo.fields: array expected");
                            message.fields = [];
                            for (var i = 0; i < object.fields.length; ++i) {
                                if (typeof object.fields[i] !== "object")
                                    throw TypeError(".ru.sovcombank.hackaton.proto.AdvInfo.fields: object expected");
                                message.fields[i] = $root.ru.sovcombank.hackaton.proto.AdvInfoFieldRef.fromObject(object.fields[i]);
                            }
                        }
                        if (object.data != null) {
                            if (typeof object.data !== "object")
                                throw TypeError(".ru.sovcombank.hackaton.proto.AdvInfo.data: object expected");
                            message.data = $root.ru.sovcombank.hackaton.proto.AdvInfoData.fromObject(object.data);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an AdvInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfo
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.AdvInfo} message AdvInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    AdvInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.fields = [];
                        if (options.defaults)
                            object.caption = "";
                        if (message.caption != null && message.hasOwnProperty("caption"))
                            object.caption = message.caption;
                        if (message.fields && message.fields.length) {
                            object.fields = [];
                            for (var j = 0; j < message.fields.length; ++j)
                                object.fields[j] = $root.ru.sovcombank.hackaton.proto.AdvInfoFieldRef.toObject(message.fields[j], options);
                        }
                        if (message.data != null && message.hasOwnProperty("data")) {
                            object.data = $root.ru.sovcombank.hackaton.proto.AdvInfoData.toObject(message.data, options);
                            if (options.oneofs)
                                object._data = "data";
                        }
                        return object;
                    };

                    /**
                     * Converts this AdvInfo to JSON.
                     * @function toJSON
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    AdvInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for AdvInfo
                     * @function getTypeUrl
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfo
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    AdvInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/ru.sovcombank.hackaton.proto.AdvInfo";
                    };

                    return AdvInfo;
                })();

                proto.AdvInfoData = (function() {

                    /**
                     * Properties of an AdvInfoData.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @interface IAdvInfoData
                     * @property {boolean|null} [fullOrIncrement] AdvInfoData fullOrIncrement
                     * @property {Array.<ru.sovcombank.hackaton.proto.IDataRow>|null} [rows] AdvInfoData rows
                     */

                    /**
                     * Constructs a new AdvInfoData.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @classdesc Тип данных для типа расширенного отображения статуса.
                     * Поле fullOrIncrement - обязательно для заполнения.
                     * 
                     * Если поле fullOrIncrement = false, а поле rows не содержит данных, то со стороны GUI данные в статусе необходимо стирать полностью.
                     * 
                     * Поле fullOrIncrement регламентирует правила изменения данных в строках расширенного статуса.
                     * При значении false данные в GUI полностью заменяются данными из коллекции rows, в обратном случае действует следующее правило:
                     * 1. Если строки с данными из поля rows нет в GUI значит ее нужно добавить
                     * 2. Если строка с данными из поля rows есть в GUI значит значения полей в GUI нужно заменить значениями полей из пришедшей строки
                     * 3. Если строка с данными из поля rows помечена флагом incrementDelete = true значит эта строка должна быть удалена из GUI
                     * @implements IAdvInfoData
                     * @constructor
                     * @param {ru.sovcombank.hackaton.proto.IAdvInfoData=} [properties] Properties to set
                     */
                    function AdvInfoData(properties) {
                        this.rows = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * AdvInfoData fullOrIncrement.
                     * @member {boolean} fullOrIncrement
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoData
                     * @instance
                     */
                    AdvInfoData.prototype.fullOrIncrement = false;

                    /**
                     * AdvInfoData rows.
                     * @member {Array.<ru.sovcombank.hackaton.proto.IDataRow>} rows
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoData
                     * @instance
                     */
                    AdvInfoData.prototype.rows = $util.emptyArray;

                    /**
                     * Creates a new AdvInfoData instance using the specified properties.
                     * @function create
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoData
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IAdvInfoData=} [properties] Properties to set
                     * @returns {ru.sovcombank.hackaton.proto.AdvInfoData} AdvInfoData instance
                     */
                    AdvInfoData.create = function create(properties) {
                        return new AdvInfoData(properties);
                    };

                    /**
                     * Encodes the specified AdvInfoData message. Does not implicitly {@link ru.sovcombank.hackaton.proto.AdvInfoData.verify|verify} messages.
                     * @function encode
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoData
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IAdvInfoData} message AdvInfoData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AdvInfoData.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.fullOrIncrement != null && Object.hasOwnProperty.call(message, "fullOrIncrement"))
                            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.fullOrIncrement);
                        if (message.rows != null && message.rows.length)
                            for (var i = 0; i < message.rows.length; ++i)
                                $root.ru.sovcombank.hackaton.proto.DataRow.encode(message.rows[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified AdvInfoData message, length delimited. Does not implicitly {@link ru.sovcombank.hackaton.proto.AdvInfoData.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoData
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IAdvInfoData} message AdvInfoData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AdvInfoData.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an AdvInfoData message from the specified reader or buffer.
                     * @function decode
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ru.sovcombank.hackaton.proto.AdvInfoData} AdvInfoData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AdvInfoData.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ru.sovcombank.hackaton.proto.AdvInfoData();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.fullOrIncrement = reader.bool();
                                    break;
                                }
                            case 2: {
                                    if (!(message.rows && message.rows.length))
                                        message.rows = [];
                                    message.rows.push($root.ru.sovcombank.hackaton.proto.DataRow.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an AdvInfoData message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ru.sovcombank.hackaton.proto.AdvInfoData} AdvInfoData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AdvInfoData.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an AdvInfoData message.
                     * @function verify
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoData
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    AdvInfoData.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.fullOrIncrement != null && message.hasOwnProperty("fullOrIncrement"))
                            if (typeof message.fullOrIncrement !== "boolean")
                                return "fullOrIncrement: boolean expected";
                        if (message.rows != null && message.hasOwnProperty("rows")) {
                            if (!Array.isArray(message.rows))
                                return "rows: array expected";
                            for (var i = 0; i < message.rows.length; ++i) {
                                var error = $root.ru.sovcombank.hackaton.proto.DataRow.verify(message.rows[i]);
                                if (error)
                                    return "rows." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an AdvInfoData message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoData
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ru.sovcombank.hackaton.proto.AdvInfoData} AdvInfoData
                     */
                    AdvInfoData.fromObject = function fromObject(object) {
                        if (object instanceof $root.ru.sovcombank.hackaton.proto.AdvInfoData)
                            return object;
                        var message = new $root.ru.sovcombank.hackaton.proto.AdvInfoData();
                        if (object.fullOrIncrement != null)
                            message.fullOrIncrement = Boolean(object.fullOrIncrement);
                        if (object.rows) {
                            if (!Array.isArray(object.rows))
                                throw TypeError(".ru.sovcombank.hackaton.proto.AdvInfoData.rows: array expected");
                            message.rows = [];
                            for (var i = 0; i < object.rows.length; ++i) {
                                if (typeof object.rows[i] !== "object")
                                    throw TypeError(".ru.sovcombank.hackaton.proto.AdvInfoData.rows: object expected");
                                message.rows[i] = $root.ru.sovcombank.hackaton.proto.DataRow.fromObject(object.rows[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an AdvInfoData message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoData
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.AdvInfoData} message AdvInfoData
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    AdvInfoData.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.rows = [];
                        if (options.defaults)
                            object.fullOrIncrement = false;
                        if (message.fullOrIncrement != null && message.hasOwnProperty("fullOrIncrement"))
                            object.fullOrIncrement = message.fullOrIncrement;
                        if (message.rows && message.rows.length) {
                            object.rows = [];
                            for (var j = 0; j < message.rows.length; ++j)
                                object.rows[j] = $root.ru.sovcombank.hackaton.proto.DataRow.toObject(message.rows[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this AdvInfoData to JSON.
                     * @function toJSON
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoData
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    AdvInfoData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for AdvInfoData
                     * @function getTypeUrl
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoData
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    AdvInfoData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/ru.sovcombank.hackaton.proto.AdvInfoData";
                    };

                    return AdvInfoData;
                })();

                proto.DataRow = (function() {

                    /**
                     * Properties of a DataRow.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @interface IDataRow
                     * @property {string|null} [rowIdent] DataRow rowIdent
                     * @property {boolean|null} [incrementDelete] DataRow incrementDelete
                     * @property {Array.<ru.sovcombank.hackaton.proto.IValueRef>|null} [values] DataRow values
                     */

                    /**
                     * Constructs a new DataRow.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @classdesc Represents a DataRow.
                     * @implements IDataRow
                     * @constructor
                     * @param {ru.sovcombank.hackaton.proto.IDataRow=} [properties] Properties to set
                     */
                    function DataRow(properties) {
                        this.values = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DataRow rowIdent.
                     * @member {string} rowIdent
                     * @memberof ru.sovcombank.hackaton.proto.DataRow
                     * @instance
                     */
                    DataRow.prototype.rowIdent = "";

                    /**
                     * DataRow incrementDelete.
                     * @member {boolean} incrementDelete
                     * @memberof ru.sovcombank.hackaton.proto.DataRow
                     * @instance
                     */
                    DataRow.prototype.incrementDelete = false;

                    /**
                     * DataRow values.
                     * @member {Array.<ru.sovcombank.hackaton.proto.IValueRef>} values
                     * @memberof ru.sovcombank.hackaton.proto.DataRow
                     * @instance
                     */
                    DataRow.prototype.values = $util.emptyArray;

                    /**
                     * Creates a new DataRow instance using the specified properties.
                     * @function create
                     * @memberof ru.sovcombank.hackaton.proto.DataRow
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IDataRow=} [properties] Properties to set
                     * @returns {ru.sovcombank.hackaton.proto.DataRow} DataRow instance
                     */
                    DataRow.create = function create(properties) {
                        return new DataRow(properties);
                    };

                    /**
                     * Encodes the specified DataRow message. Does not implicitly {@link ru.sovcombank.hackaton.proto.DataRow.verify|verify} messages.
                     * @function encode
                     * @memberof ru.sovcombank.hackaton.proto.DataRow
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IDataRow} message DataRow message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DataRow.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.rowIdent != null && Object.hasOwnProperty.call(message, "rowIdent"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.rowIdent);
                        if (message.incrementDelete != null && Object.hasOwnProperty.call(message, "incrementDelete"))
                            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.incrementDelete);
                        if (message.values != null && message.values.length)
                            for (var i = 0; i < message.values.length; ++i)
                                $root.ru.sovcombank.hackaton.proto.ValueRef.encode(message.values[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified DataRow message, length delimited. Does not implicitly {@link ru.sovcombank.hackaton.proto.DataRow.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.DataRow
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IDataRow} message DataRow message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DataRow.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DataRow message from the specified reader or buffer.
                     * @function decode
                     * @memberof ru.sovcombank.hackaton.proto.DataRow
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ru.sovcombank.hackaton.proto.DataRow} DataRow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DataRow.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ru.sovcombank.hackaton.proto.DataRow();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.rowIdent = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.incrementDelete = reader.bool();
                                    break;
                                }
                            case 3: {
                                    if (!(message.values && message.values.length))
                                        message.values = [];
                                    message.values.push($root.ru.sovcombank.hackaton.proto.ValueRef.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DataRow message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.DataRow
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ru.sovcombank.hackaton.proto.DataRow} DataRow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DataRow.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DataRow message.
                     * @function verify
                     * @memberof ru.sovcombank.hackaton.proto.DataRow
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DataRow.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.rowIdent != null && message.hasOwnProperty("rowIdent"))
                            if (!$util.isString(message.rowIdent))
                                return "rowIdent: string expected";
                        if (message.incrementDelete != null && message.hasOwnProperty("incrementDelete"))
                            if (typeof message.incrementDelete !== "boolean")
                                return "incrementDelete: boolean expected";
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (!Array.isArray(message.values))
                                return "values: array expected";
                            for (var i = 0; i < message.values.length; ++i) {
                                var error = $root.ru.sovcombank.hackaton.proto.ValueRef.verify(message.values[i]);
                                if (error)
                                    return "values." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a DataRow message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ru.sovcombank.hackaton.proto.DataRow
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ru.sovcombank.hackaton.proto.DataRow} DataRow
                     */
                    DataRow.fromObject = function fromObject(object) {
                        if (object instanceof $root.ru.sovcombank.hackaton.proto.DataRow)
                            return object;
                        var message = new $root.ru.sovcombank.hackaton.proto.DataRow();
                        if (object.rowIdent != null)
                            message.rowIdent = String(object.rowIdent);
                        if (object.incrementDelete != null)
                            message.incrementDelete = Boolean(object.incrementDelete);
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".ru.sovcombank.hackaton.proto.DataRow.values: array expected");
                            message.values = [];
                            for (var i = 0; i < object.values.length; ++i) {
                                if (typeof object.values[i] !== "object")
                                    throw TypeError(".ru.sovcombank.hackaton.proto.DataRow.values: object expected");
                                message.values[i] = $root.ru.sovcombank.hackaton.proto.ValueRef.fromObject(object.values[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a DataRow message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ru.sovcombank.hackaton.proto.DataRow
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.DataRow} message DataRow
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DataRow.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (options.defaults) {
                            object.rowIdent = "";
                            object.incrementDelete = false;
                        }
                        if (message.rowIdent != null && message.hasOwnProperty("rowIdent"))
                            object.rowIdent = message.rowIdent;
                        if (message.incrementDelete != null && message.hasOwnProperty("incrementDelete"))
                            object.incrementDelete = message.incrementDelete;
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (var j = 0; j < message.values.length; ++j)
                                object.values[j] = $root.ru.sovcombank.hackaton.proto.ValueRef.toObject(message.values[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this DataRow to JSON.
                     * @function toJSON
                     * @memberof ru.sovcombank.hackaton.proto.DataRow
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DataRow.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for DataRow
                     * @function getTypeUrl
                     * @memberof ru.sovcombank.hackaton.proto.DataRow
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    DataRow.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/ru.sovcombank.hackaton.proto.DataRow";
                    };

                    return DataRow;
                })();

                proto.ValueRef = (function() {

                    /**
                     * Properties of a ValueRef.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @interface IValueRef
                     * @property {ru.sovcombank.hackaton.proto.DataType|null} [dataType] ValueRef dataType
                     * @property {string|null} [format] ValueRef format
                     * @property {string|null} [value] ValueRef value
                     */

                    /**
                     * Constructs a new ValueRef.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @classdesc Represents a ValueRef.
                     * @implements IValueRef
                     * @constructor
                     * @param {ru.sovcombank.hackaton.proto.IValueRef=} [properties] Properties to set
                     */
                    function ValueRef(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ValueRef dataType.
                     * @member {ru.sovcombank.hackaton.proto.DataType} dataType
                     * @memberof ru.sovcombank.hackaton.proto.ValueRef
                     * @instance
                     */
                    ValueRef.prototype.dataType = 0;

                    /**
                     * ValueRef format.
                     * @member {string|null|undefined} format
                     * @memberof ru.sovcombank.hackaton.proto.ValueRef
                     * @instance
                     */
                    ValueRef.prototype.format = null;

                    /**
                     * ValueRef value.
                     * @member {string|null|undefined} value
                     * @memberof ru.sovcombank.hackaton.proto.ValueRef
                     * @instance
                     */
                    ValueRef.prototype.value = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * ValueRef _format.
                     * @member {"format"|undefined} _format
                     * @memberof ru.sovcombank.hackaton.proto.ValueRef
                     * @instance
                     */
                    Object.defineProperty(ValueRef.prototype, "_format", {
                        get: $util.oneOfGetter($oneOfFields = ["format"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * ValueRef _value.
                     * @member {"value"|undefined} _value
                     * @memberof ru.sovcombank.hackaton.proto.ValueRef
                     * @instance
                     */
                    Object.defineProperty(ValueRef.prototype, "_value", {
                        get: $util.oneOfGetter($oneOfFields = ["value"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new ValueRef instance using the specified properties.
                     * @function create
                     * @memberof ru.sovcombank.hackaton.proto.ValueRef
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IValueRef=} [properties] Properties to set
                     * @returns {ru.sovcombank.hackaton.proto.ValueRef} ValueRef instance
                     */
                    ValueRef.create = function create(properties) {
                        return new ValueRef(properties);
                    };

                    /**
                     * Encodes the specified ValueRef message. Does not implicitly {@link ru.sovcombank.hackaton.proto.ValueRef.verify|verify} messages.
                     * @function encode
                     * @memberof ru.sovcombank.hackaton.proto.ValueRef
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IValueRef} message ValueRef message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ValueRef.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.dataType != null && Object.hasOwnProperty.call(message, "dataType"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.dataType);
                        if (message.format != null && Object.hasOwnProperty.call(message, "format"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.format);
                        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.value);
                        return writer;
                    };

                    /**
                     * Encodes the specified ValueRef message, length delimited. Does not implicitly {@link ru.sovcombank.hackaton.proto.ValueRef.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.ValueRef
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IValueRef} message ValueRef message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ValueRef.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ValueRef message from the specified reader or buffer.
                     * @function decode
                     * @memberof ru.sovcombank.hackaton.proto.ValueRef
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ru.sovcombank.hackaton.proto.ValueRef} ValueRef
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ValueRef.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ru.sovcombank.hackaton.proto.ValueRef();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.dataType = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.format = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.value = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ValueRef message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.ValueRef
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ru.sovcombank.hackaton.proto.ValueRef} ValueRef
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ValueRef.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ValueRef message.
                     * @function verify
                     * @memberof ru.sovcombank.hackaton.proto.ValueRef
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ValueRef.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.dataType != null && message.hasOwnProperty("dataType"))
                            switch (message.dataType) {
                            default:
                                return "dataType: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                break;
                            }
                        if (message.format != null && message.hasOwnProperty("format")) {
                            properties._format = 1;
                            if (!$util.isString(message.format))
                                return "format: string expected";
                        }
                        if (message.value != null && message.hasOwnProperty("value")) {
                            properties._value = 1;
                            if (!$util.isString(message.value))
                                return "value: string expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a ValueRef message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ru.sovcombank.hackaton.proto.ValueRef
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ru.sovcombank.hackaton.proto.ValueRef} ValueRef
                     */
                    ValueRef.fromObject = function fromObject(object) {
                        if (object instanceof $root.ru.sovcombank.hackaton.proto.ValueRef)
                            return object;
                        var message = new $root.ru.sovcombank.hackaton.proto.ValueRef();
                        switch (object.dataType) {
                        default:
                            if (typeof object.dataType === "number") {
                                message.dataType = object.dataType;
                                break;
                            }
                            break;
                        case "dtString":
                        case 0:
                            message.dataType = 0;
                            break;
                        case "dtInteger":
                        case 1:
                            message.dataType = 1;
                            break;
                        case "dtFloat":
                        case 2:
                            message.dataType = 2;
                            break;
                        case "dtBoolean":
                        case 3:
                            message.dataType = 3;
                            break;
                        case "dtDateTime":
                        case 4:
                            message.dataType = 4;
                            break;
                        }
                        if (object.format != null)
                            message.format = String(object.format);
                        if (object.value != null)
                            message.value = String(object.value);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ValueRef message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ru.sovcombank.hackaton.proto.ValueRef
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.ValueRef} message ValueRef
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ValueRef.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.dataType = options.enums === String ? "dtString" : 0;
                        if (message.dataType != null && message.hasOwnProperty("dataType"))
                            object.dataType = options.enums === String ? $root.ru.sovcombank.hackaton.proto.DataType[message.dataType] === undefined ? message.dataType : $root.ru.sovcombank.hackaton.proto.DataType[message.dataType] : message.dataType;
                        if (message.format != null && message.hasOwnProperty("format")) {
                            object.format = message.format;
                            if (options.oneofs)
                                object._format = "format";
                        }
                        if (message.value != null && message.hasOwnProperty("value")) {
                            object.value = message.value;
                            if (options.oneofs)
                                object._value = "value";
                        }
                        return object;
                    };

                    /**
                     * Converts this ValueRef to JSON.
                     * @function toJSON
                     * @memberof ru.sovcombank.hackaton.proto.ValueRef
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ValueRef.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ValueRef
                     * @function getTypeUrl
                     * @memberof ru.sovcombank.hackaton.proto.ValueRef
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ValueRef.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/ru.sovcombank.hackaton.proto.ValueRef";
                    };

                    return ValueRef;
                })();

                /**
                 * CommandType enum.
                 * @name ru.sovcombank.hackaton.proto.CommandType
                 * @enum {number}
                 * @property {number} ctHandshake=0 ctHandshake value
                 * @property {number} ctStatus=1 ctStatus value
                 * @property {number} ctExecCommand=2 ctExecCommand value
                 */
                proto.CommandType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "ctHandshake"] = 0;
                    values[valuesById[1] = "ctStatus"] = 1;
                    values[valuesById[2] = "ctExecCommand"] = 2;
                    return values;
                })();

                /**
                 * AnswerType enum.
                 * @name ru.sovcombank.hackaton.proto.AnswerType
                 * @enum {number}
                 * @property {number} atNotSupported=0 atNotSupported value
                 * @property {number} atAnswerOK=1 atAnswerOK value
                 * @property {number} atAnswerError=2 atAnswerError value
                 */
                proto.AnswerType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "atNotSupported"] = 0;
                    values[valuesById[1] = "atAnswerOK"] = 1;
                    values[valuesById[2] = "atAnswerError"] = 2;
                    return values;
                })();

                /**
                 * DataType enum.
                 * @name ru.sovcombank.hackaton.proto.DataType
                 * @enum {number}
                 * @property {number} dtString=0 dtString value
                 * @property {number} dtInteger=1 dtInteger value
                 * @property {number} dtFloat=2 dtFloat value
                 * @property {number} dtBoolean=3 dtBoolean value
                 * @property {number} dtDateTime=4 dtDateTime value
                 */
                proto.DataType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "dtString"] = 0;
                    values[valuesById[1] = "dtInteger"] = 1;
                    values[valuesById[2] = "dtFloat"] = 2;
                    values[valuesById[3] = "dtBoolean"] = 3;
                    values[valuesById[4] = "dtDateTime"] = 4;
                    return values;
                })();

                /**
                 * StatusType enum.
                 * @name ru.sovcombank.hackaton.proto.StatusType
                 * @enum {number}
                 * @property {number} stNotReady=0 stNotReady value
                 * @property {number} stReady=1 stReady value
                 * @property {number} stPerformed=2 stPerformed value
                 */
                proto.StatusType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "stNotReady"] = 0;
                    values[valuesById[1] = "stReady"] = 1;
                    values[valuesById[2] = "stPerformed"] = 2;
                    return values;
                })();

                proto.AdvInfoFieldRef = (function() {

                    /**
                     * Properties of an AdvInfoFieldRef.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @interface IAdvInfoFieldRef
                     * @property {string|null} [alias] AdvInfoFieldRef alias
                     * @property {string|null} [caption] AdvInfoFieldRef caption
                     * @property {ru.sovcombank.hackaton.proto.DataType|null} [dataType] AdvInfoFieldRef dataType
                     */

                    /**
                     * Constructs a new AdvInfoFieldRef.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @classdesc Represents an AdvInfoFieldRef.
                     * @implements IAdvInfoFieldRef
                     * @constructor
                     * @param {ru.sovcombank.hackaton.proto.IAdvInfoFieldRef=} [properties] Properties to set
                     */
                    function AdvInfoFieldRef(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * AdvInfoFieldRef alias.
                     * @member {string} alias
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoFieldRef
                     * @instance
                     */
                    AdvInfoFieldRef.prototype.alias = "";

                    /**
                     * AdvInfoFieldRef caption.
                     * @member {string|null|undefined} caption
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoFieldRef
                     * @instance
                     */
                    AdvInfoFieldRef.prototype.caption = null;

                    /**
                     * AdvInfoFieldRef dataType.
                     * @member {ru.sovcombank.hackaton.proto.DataType} dataType
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoFieldRef
                     * @instance
                     */
                    AdvInfoFieldRef.prototype.dataType = 0;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * AdvInfoFieldRef _caption.
                     * @member {"caption"|undefined} _caption
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoFieldRef
                     * @instance
                     */
                    Object.defineProperty(AdvInfoFieldRef.prototype, "_caption", {
                        get: $util.oneOfGetter($oneOfFields = ["caption"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new AdvInfoFieldRef instance using the specified properties.
                     * @function create
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoFieldRef
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IAdvInfoFieldRef=} [properties] Properties to set
                     * @returns {ru.sovcombank.hackaton.proto.AdvInfoFieldRef} AdvInfoFieldRef instance
                     */
                    AdvInfoFieldRef.create = function create(properties) {
                        return new AdvInfoFieldRef(properties);
                    };

                    /**
                     * Encodes the specified AdvInfoFieldRef message. Does not implicitly {@link ru.sovcombank.hackaton.proto.AdvInfoFieldRef.verify|verify} messages.
                     * @function encode
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoFieldRef
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IAdvInfoFieldRef} message AdvInfoFieldRef message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AdvInfoFieldRef.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.alias != null && Object.hasOwnProperty.call(message, "alias"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.alias);
                        if (message.caption != null && Object.hasOwnProperty.call(message, "caption"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.caption);
                        if (message.dataType != null && Object.hasOwnProperty.call(message, "dataType"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.dataType);
                        return writer;
                    };

                    /**
                     * Encodes the specified AdvInfoFieldRef message, length delimited. Does not implicitly {@link ru.sovcombank.hackaton.proto.AdvInfoFieldRef.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoFieldRef
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IAdvInfoFieldRef} message AdvInfoFieldRef message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AdvInfoFieldRef.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an AdvInfoFieldRef message from the specified reader or buffer.
                     * @function decode
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoFieldRef
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ru.sovcombank.hackaton.proto.AdvInfoFieldRef} AdvInfoFieldRef
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AdvInfoFieldRef.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ru.sovcombank.hackaton.proto.AdvInfoFieldRef();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.alias = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.caption = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.dataType = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an AdvInfoFieldRef message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoFieldRef
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ru.sovcombank.hackaton.proto.AdvInfoFieldRef} AdvInfoFieldRef
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AdvInfoFieldRef.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an AdvInfoFieldRef message.
                     * @function verify
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoFieldRef
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    AdvInfoFieldRef.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.alias != null && message.hasOwnProperty("alias"))
                            if (!$util.isString(message.alias))
                                return "alias: string expected";
                        if (message.caption != null && message.hasOwnProperty("caption")) {
                            properties._caption = 1;
                            if (!$util.isString(message.caption))
                                return "caption: string expected";
                        }
                        if (message.dataType != null && message.hasOwnProperty("dataType"))
                            switch (message.dataType) {
                            default:
                                return "dataType: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates an AdvInfoFieldRef message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoFieldRef
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ru.sovcombank.hackaton.proto.AdvInfoFieldRef} AdvInfoFieldRef
                     */
                    AdvInfoFieldRef.fromObject = function fromObject(object) {
                        if (object instanceof $root.ru.sovcombank.hackaton.proto.AdvInfoFieldRef)
                            return object;
                        var message = new $root.ru.sovcombank.hackaton.proto.AdvInfoFieldRef();
                        if (object.alias != null)
                            message.alias = String(object.alias);
                        if (object.caption != null)
                            message.caption = String(object.caption);
                        switch (object.dataType) {
                        default:
                            if (typeof object.dataType === "number") {
                                message.dataType = object.dataType;
                                break;
                            }
                            break;
                        case "dtString":
                        case 0:
                            message.dataType = 0;
                            break;
                        case "dtInteger":
                        case 1:
                            message.dataType = 1;
                            break;
                        case "dtFloat":
                        case 2:
                            message.dataType = 2;
                            break;
                        case "dtBoolean":
                        case 3:
                            message.dataType = 3;
                            break;
                        case "dtDateTime":
                        case 4:
                            message.dataType = 4;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an AdvInfoFieldRef message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoFieldRef
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.AdvInfoFieldRef} message AdvInfoFieldRef
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    AdvInfoFieldRef.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.alias = "";
                            object.dataType = options.enums === String ? "dtString" : 0;
                        }
                        if (message.alias != null && message.hasOwnProperty("alias"))
                            object.alias = message.alias;
                        if (message.caption != null && message.hasOwnProperty("caption")) {
                            object.caption = message.caption;
                            if (options.oneofs)
                                object._caption = "caption";
                        }
                        if (message.dataType != null && message.hasOwnProperty("dataType"))
                            object.dataType = options.enums === String ? $root.ru.sovcombank.hackaton.proto.DataType[message.dataType] === undefined ? message.dataType : $root.ru.sovcombank.hackaton.proto.DataType[message.dataType] : message.dataType;
                        return object;
                    };

                    /**
                     * Converts this AdvInfoFieldRef to JSON.
                     * @function toJSON
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoFieldRef
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    AdvInfoFieldRef.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for AdvInfoFieldRef
                     * @function getTypeUrl
                     * @memberof ru.sovcombank.hackaton.proto.AdvInfoFieldRef
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    AdvInfoFieldRef.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/ru.sovcombank.hackaton.proto.AdvInfoFieldRef";
                    };

                    return AdvInfoFieldRef;
                })();

                proto.Event = (function() {

                    /**
                     * Properties of an Event.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @interface IEvent
                     * @property {ru.sovcombank.hackaton.proto.IStatus|null} [status] Event status
                     */

                    /**
                     * Constructs a new Event.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @classdesc Represents an Event.
                     * @implements IEvent
                     * @constructor
                     * @param {ru.sovcombank.hackaton.proto.IEvent=} [properties] Properties to set
                     */
                    function Event(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Event status.
                     * @member {ru.sovcombank.hackaton.proto.IStatus|null|undefined} status
                     * @memberof ru.sovcombank.hackaton.proto.Event
                     * @instance
                     */
                    Event.prototype.status = null;

                    /**
                     * Creates a new Event instance using the specified properties.
                     * @function create
                     * @memberof ru.sovcombank.hackaton.proto.Event
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IEvent=} [properties] Properties to set
                     * @returns {ru.sovcombank.hackaton.proto.Event} Event instance
                     */
                    Event.create = function create(properties) {
                        return new Event(properties);
                    };

                    /**
                     * Encodes the specified Event message. Does not implicitly {@link ru.sovcombank.hackaton.proto.Event.verify|verify} messages.
                     * @function encode
                     * @memberof ru.sovcombank.hackaton.proto.Event
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IEvent} message Event message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Event.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                            $root.ru.sovcombank.hackaton.proto.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Event message, length delimited. Does not implicitly {@link ru.sovcombank.hackaton.proto.Event.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.Event
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IEvent} message Event message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Event.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Event message from the specified reader or buffer.
                     * @function decode
                     * @memberof ru.sovcombank.hackaton.proto.Event
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ru.sovcombank.hackaton.proto.Event} Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Event.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ru.sovcombank.hackaton.proto.Event();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.status = $root.ru.sovcombank.hackaton.proto.Status.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Event message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.Event
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ru.sovcombank.hackaton.proto.Event} Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Event.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Event message.
                     * @function verify
                     * @memberof ru.sovcombank.hackaton.proto.Event
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Event.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.status != null && message.hasOwnProperty("status")) {
                            var error = $root.ru.sovcombank.hackaton.proto.Status.verify(message.status);
                            if (error)
                                return "status." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates an Event message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ru.sovcombank.hackaton.proto.Event
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ru.sovcombank.hackaton.proto.Event} Event
                     */
                    Event.fromObject = function fromObject(object) {
                        if (object instanceof $root.ru.sovcombank.hackaton.proto.Event)
                            return object;
                        var message = new $root.ru.sovcombank.hackaton.proto.Event();
                        if (object.status != null) {
                            if (typeof object.status !== "object")
                                throw TypeError(".ru.sovcombank.hackaton.proto.Event.status: object expected");
                            message.status = $root.ru.sovcombank.hackaton.proto.Status.fromObject(object.status);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Event message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ru.sovcombank.hackaton.proto.Event
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.Event} message Event
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Event.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.status = null;
                        if (message.status != null && message.hasOwnProperty("status"))
                            object.status = $root.ru.sovcombank.hackaton.proto.Status.toObject(message.status, options);
                        return object;
                    };

                    /**
                     * Converts this Event to JSON.
                     * @function toJSON
                     * @memberof ru.sovcombank.hackaton.proto.Event
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Event.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Event
                     * @function getTypeUrl
                     * @memberof ru.sovcombank.hackaton.proto.Event
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Event.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/ru.sovcombank.hackaton.proto.Event";
                    };

                    return Event;
                })();

                proto.Status = (function() {

                    /**
                     * Properties of a Status.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @interface IStatus
                     * @property {ru.sovcombank.hackaton.proto.StatusType|null} [type] Status type
                     * @property {string|null} [details] Status details
                     * @property {number|Long|null} [nextTime] Status nextTime
                     * @property {ru.sovcombank.hackaton.proto.IAdvInfo|null} [advStatus] Status advStatus
                     */

                    /**
                     * Constructs a new Status.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @classdesc Represents a Status.
                     * @implements IStatus
                     * @constructor
                     * @param {ru.sovcombank.hackaton.proto.IStatus=} [properties] Properties to set
                     */
                    function Status(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Status type.
                     * @member {ru.sovcombank.hackaton.proto.StatusType} type
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @instance
                     */
                    Status.prototype.type = 0;

                    /**
                     * Status details.
                     * @member {string|null|undefined} details
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @instance
                     */
                    Status.prototype.details = null;

                    /**
                     * Status nextTime.
                     * @member {number|Long|null|undefined} nextTime
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @instance
                     */
                    Status.prototype.nextTime = null;

                    /**
                     * Status advStatus.
                     * @member {ru.sovcombank.hackaton.proto.IAdvInfo|null|undefined} advStatus
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @instance
                     */
                    Status.prototype.advStatus = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Status _details.
                     * @member {"details"|undefined} _details
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @instance
                     */
                    Object.defineProperty(Status.prototype, "_details", {
                        get: $util.oneOfGetter($oneOfFields = ["details"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Status _nextTime.
                     * @member {"nextTime"|undefined} _nextTime
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @instance
                     */
                    Object.defineProperty(Status.prototype, "_nextTime", {
                        get: $util.oneOfGetter($oneOfFields = ["nextTime"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Status _advStatus.
                     * @member {"advStatus"|undefined} _advStatus
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @instance
                     */
                    Object.defineProperty(Status.prototype, "_advStatus", {
                        get: $util.oneOfGetter($oneOfFields = ["advStatus"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Status instance using the specified properties.
                     * @function create
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IStatus=} [properties] Properties to set
                     * @returns {ru.sovcombank.hackaton.proto.Status} Status instance
                     */
                    Status.create = function create(properties) {
                        return new Status(properties);
                    };

                    /**
                     * Encodes the specified Status message. Does not implicitly {@link ru.sovcombank.hackaton.proto.Status.verify|verify} messages.
                     * @function encode
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IStatus} message Status message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Status.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                        if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.details);
                        if (message.nextTime != null && Object.hasOwnProperty.call(message, "nextTime"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.nextTime);
                        if (message.advStatus != null && Object.hasOwnProperty.call(message, "advStatus"))
                            $root.ru.sovcombank.hackaton.proto.AdvInfo.encode(message.advStatus, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Status message, length delimited. Does not implicitly {@link ru.sovcombank.hackaton.proto.Status.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IStatus} message Status message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Status.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Status message from the specified reader or buffer.
                     * @function decode
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ru.sovcombank.hackaton.proto.Status} Status
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Status.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ru.sovcombank.hackaton.proto.Status();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.type = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.details = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.nextTime = reader.int64();
                                    break;
                                }
                            case 4: {
                                    message.advStatus = $root.ru.sovcombank.hackaton.proto.AdvInfo.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Status message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ru.sovcombank.hackaton.proto.Status} Status
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Status.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Status message.
                     * @function verify
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Status.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.type != null && message.hasOwnProperty("type"))
                            switch (message.type) {
                            default:
                                return "type: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.details != null && message.hasOwnProperty("details")) {
                            properties._details = 1;
                            if (!$util.isString(message.details))
                                return "details: string expected";
                        }
                        if (message.nextTime != null && message.hasOwnProperty("nextTime")) {
                            properties._nextTime = 1;
                            if (!$util.isInteger(message.nextTime) && !(message.nextTime && $util.isInteger(message.nextTime.low) && $util.isInteger(message.nextTime.high)))
                                return "nextTime: integer|Long expected";
                        }
                        if (message.advStatus != null && message.hasOwnProperty("advStatus")) {
                            properties._advStatus = 1;
                            {
                                var error = $root.ru.sovcombank.hackaton.proto.AdvInfo.verify(message.advStatus);
                                if (error)
                                    return "advStatus." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Status message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ru.sovcombank.hackaton.proto.Status} Status
                     */
                    Status.fromObject = function fromObject(object) {
                        if (object instanceof $root.ru.sovcombank.hackaton.proto.Status)
                            return object;
                        var message = new $root.ru.sovcombank.hackaton.proto.Status();
                        switch (object.type) {
                        default:
                            if (typeof object.type === "number") {
                                message.type = object.type;
                                break;
                            }
                            break;
                        case "stNotReady":
                        case 0:
                            message.type = 0;
                            break;
                        case "stReady":
                        case 1:
                            message.type = 1;
                            break;
                        case "stPerformed":
                        case 2:
                            message.type = 2;
                            break;
                        }
                        if (object.details != null)
                            message.details = String(object.details);
                        if (object.nextTime != null)
                            if ($util.Long)
                                (message.nextTime = $util.Long.fromValue(object.nextTime)).unsigned = false;
                            else if (typeof object.nextTime === "string")
                                message.nextTime = parseInt(object.nextTime, 10);
                            else if (typeof object.nextTime === "number")
                                message.nextTime = object.nextTime;
                            else if (typeof object.nextTime === "object")
                                message.nextTime = new $util.LongBits(object.nextTime.low >>> 0, object.nextTime.high >>> 0).toNumber();
                        if (object.advStatus != null) {
                            if (typeof object.advStatus !== "object")
                                throw TypeError(".ru.sovcombank.hackaton.proto.Status.advStatus: object expected");
                            message.advStatus = $root.ru.sovcombank.hackaton.proto.AdvInfo.fromObject(object.advStatus);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Status message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.Status} message Status
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Status.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.type = options.enums === String ? "stNotReady" : 0;
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = options.enums === String ? $root.ru.sovcombank.hackaton.proto.StatusType[message.type] === undefined ? message.type : $root.ru.sovcombank.hackaton.proto.StatusType[message.type] : message.type;
                        if (message.details != null && message.hasOwnProperty("details")) {
                            object.details = message.details;
                            if (options.oneofs)
                                object._details = "details";
                        }
                        if (message.nextTime != null && message.hasOwnProperty("nextTime")) {
                            if (typeof message.nextTime === "number")
                                object.nextTime = options.longs === String ? String(message.nextTime) : message.nextTime;
                            else
                                object.nextTime = options.longs === String ? $util.Long.prototype.toString.call(message.nextTime) : options.longs === Number ? new $util.LongBits(message.nextTime.low >>> 0, message.nextTime.high >>> 0).toNumber() : message.nextTime;
                            if (options.oneofs)
                                object._nextTime = "nextTime";
                        }
                        if (message.advStatus != null && message.hasOwnProperty("advStatus")) {
                            object.advStatus = $root.ru.sovcombank.hackaton.proto.AdvInfo.toObject(message.advStatus, options);
                            if (options.oneofs)
                                object._advStatus = "advStatus";
                        }
                        return object;
                    };

                    /**
                     * Converts this Status to JSON.
                     * @function toJSON
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Status.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Status
                     * @function getTypeUrl
                     * @memberof ru.sovcombank.hackaton.proto.Status
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Status.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/ru.sovcombank.hackaton.proto.Status";
                    };

                    return Status;
                })();

                proto.ExchangeInfoMessage = (function() {

                    /**
                     * Properties of an ExchangeInfoMessage.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @interface IExchangeInfoMessage
                     * @property {ru.sovcombank.hackaton.proto.IHeader|null} [header] ExchangeInfoMessage header
                     * @property {ru.sovcombank.hackaton.proto.IRequest|null} [request] ExchangeInfoMessage request
                     * @property {ru.sovcombank.hackaton.proto.IResponse|null} [response] ExchangeInfoMessage response
                     * @property {ru.sovcombank.hackaton.proto.IEvent|null} [event] ExchangeInfoMessage event
                     */

                    /**
                     * Constructs a new ExchangeInfoMessage.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @classdesc Represents an ExchangeInfoMessage.
                     * @implements IExchangeInfoMessage
                     * @constructor
                     * @param {ru.sovcombank.hackaton.proto.IExchangeInfoMessage=} [properties] Properties to set
                     */
                    function ExchangeInfoMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ExchangeInfoMessage header.
                     * @member {ru.sovcombank.hackaton.proto.IHeader|null|undefined} header
                     * @memberof ru.sovcombank.hackaton.proto.ExchangeInfoMessage
                     * @instance
                     */
                    ExchangeInfoMessage.prototype.header = null;

                    /**
                     * ExchangeInfoMessage request.
                     * @member {ru.sovcombank.hackaton.proto.IRequest|null|undefined} request
                     * @memberof ru.sovcombank.hackaton.proto.ExchangeInfoMessage
                     * @instance
                     */
                    ExchangeInfoMessage.prototype.request = null;

                    /**
                     * ExchangeInfoMessage response.
                     * @member {ru.sovcombank.hackaton.proto.IResponse|null|undefined} response
                     * @memberof ru.sovcombank.hackaton.proto.ExchangeInfoMessage
                     * @instance
                     */
                    ExchangeInfoMessage.prototype.response = null;

                    /**
                     * ExchangeInfoMessage event.
                     * @member {ru.sovcombank.hackaton.proto.IEvent|null|undefined} event
                     * @memberof ru.sovcombank.hackaton.proto.ExchangeInfoMessage
                     * @instance
                     */
                    ExchangeInfoMessage.prototype.event = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * ExchangeInfoMessage body.
                     * @member {"request"|"response"|"event"|undefined} body
                     * @memberof ru.sovcombank.hackaton.proto.ExchangeInfoMessage
                     * @instance
                     */
                    Object.defineProperty(ExchangeInfoMessage.prototype, "body", {
                        get: $util.oneOfGetter($oneOfFields = ["request", "response", "event"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new ExchangeInfoMessage instance using the specified properties.
                     * @function create
                     * @memberof ru.sovcombank.hackaton.proto.ExchangeInfoMessage
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IExchangeInfoMessage=} [properties] Properties to set
                     * @returns {ru.sovcombank.hackaton.proto.ExchangeInfoMessage} ExchangeInfoMessage instance
                     */
                    ExchangeInfoMessage.create = function create(properties) {
                        return new ExchangeInfoMessage(properties);
                    };

                    /**
                     * Encodes the specified ExchangeInfoMessage message. Does not implicitly {@link ru.sovcombank.hackaton.proto.ExchangeInfoMessage.verify|verify} messages.
                     * @function encode
                     * @memberof ru.sovcombank.hackaton.proto.ExchangeInfoMessage
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IExchangeInfoMessage} message ExchangeInfoMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExchangeInfoMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                            $root.ru.sovcombank.hackaton.proto.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                            $root.ru.sovcombank.hackaton.proto.Request.encode(message.request, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.response != null && Object.hasOwnProperty.call(message, "response"))
                            $root.ru.sovcombank.hackaton.proto.Response.encode(message.response, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                            $root.ru.sovcombank.hackaton.proto.Event.encode(message.event, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ExchangeInfoMessage message, length delimited. Does not implicitly {@link ru.sovcombank.hackaton.proto.ExchangeInfoMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.ExchangeInfoMessage
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IExchangeInfoMessage} message ExchangeInfoMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExchangeInfoMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ExchangeInfoMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof ru.sovcombank.hackaton.proto.ExchangeInfoMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ru.sovcombank.hackaton.proto.ExchangeInfoMessage} ExchangeInfoMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExchangeInfoMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ru.sovcombank.hackaton.proto.ExchangeInfoMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.header = $root.ru.sovcombank.hackaton.proto.Header.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    message.request = $root.ru.sovcombank.hackaton.proto.Request.decode(reader, reader.uint32());
                                    break;
                                }
                            case 3: {
                                    message.response = $root.ru.sovcombank.hackaton.proto.Response.decode(reader, reader.uint32());
                                    break;
                                }
                            case 4: {
                                    message.event = $root.ru.sovcombank.hackaton.proto.Event.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an ExchangeInfoMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.ExchangeInfoMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ru.sovcombank.hackaton.proto.ExchangeInfoMessage} ExchangeInfoMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExchangeInfoMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ExchangeInfoMessage message.
                     * @function verify
                     * @memberof ru.sovcombank.hackaton.proto.ExchangeInfoMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExchangeInfoMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.header != null && message.hasOwnProperty("header")) {
                            var error = $root.ru.sovcombank.hackaton.proto.Header.verify(message.header);
                            if (error)
                                return "header." + error;
                        }
                        if (message.request != null && message.hasOwnProperty("request")) {
                            properties.body = 1;
                            {
                                var error = $root.ru.sovcombank.hackaton.proto.Request.verify(message.request);
                                if (error)
                                    return "request." + error;
                            }
                        }
                        if (message.response != null && message.hasOwnProperty("response")) {
                            if (properties.body === 1)
                                return "body: multiple values";
                            properties.body = 1;
                            {
                                var error = $root.ru.sovcombank.hackaton.proto.Response.verify(message.response);
                                if (error)
                                    return "response." + error;
                            }
                        }
                        if (message.event != null && message.hasOwnProperty("event")) {
                            if (properties.body === 1)
                                return "body: multiple values";
                            properties.body = 1;
                            {
                                var error = $root.ru.sovcombank.hackaton.proto.Event.verify(message.event);
                                if (error)
                                    return "event." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an ExchangeInfoMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ru.sovcombank.hackaton.proto.ExchangeInfoMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ru.sovcombank.hackaton.proto.ExchangeInfoMessage} ExchangeInfoMessage
                     */
                    ExchangeInfoMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.ru.sovcombank.hackaton.proto.ExchangeInfoMessage)
                            return object;
                        var message = new $root.ru.sovcombank.hackaton.proto.ExchangeInfoMessage();
                        if (object.header != null) {
                            if (typeof object.header !== "object")
                                throw TypeError(".ru.sovcombank.hackaton.proto.ExchangeInfoMessage.header: object expected");
                            message.header = $root.ru.sovcombank.hackaton.proto.Header.fromObject(object.header);
                        }
                        if (object.request != null) {
                            if (typeof object.request !== "object")
                                throw TypeError(".ru.sovcombank.hackaton.proto.ExchangeInfoMessage.request: object expected");
                            message.request = $root.ru.sovcombank.hackaton.proto.Request.fromObject(object.request);
                        }
                        if (object.response != null) {
                            if (typeof object.response !== "object")
                                throw TypeError(".ru.sovcombank.hackaton.proto.ExchangeInfoMessage.response: object expected");
                            message.response = $root.ru.sovcombank.hackaton.proto.Response.fromObject(object.response);
                        }
                        if (object.event != null) {
                            if (typeof object.event !== "object")
                                throw TypeError(".ru.sovcombank.hackaton.proto.ExchangeInfoMessage.event: object expected");
                            message.event = $root.ru.sovcombank.hackaton.proto.Event.fromObject(object.event);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an ExchangeInfoMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ru.sovcombank.hackaton.proto.ExchangeInfoMessage
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.ExchangeInfoMessage} message ExchangeInfoMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExchangeInfoMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.header = null;
                        if (message.header != null && message.hasOwnProperty("header"))
                            object.header = $root.ru.sovcombank.hackaton.proto.Header.toObject(message.header, options);
                        if (message.request != null && message.hasOwnProperty("request")) {
                            object.request = $root.ru.sovcombank.hackaton.proto.Request.toObject(message.request, options);
                            if (options.oneofs)
                                object.body = "request";
                        }
                        if (message.response != null && message.hasOwnProperty("response")) {
                            object.response = $root.ru.sovcombank.hackaton.proto.Response.toObject(message.response, options);
                            if (options.oneofs)
                                object.body = "response";
                        }
                        if (message.event != null && message.hasOwnProperty("event")) {
                            object.event = $root.ru.sovcombank.hackaton.proto.Event.toObject(message.event, options);
                            if (options.oneofs)
                                object.body = "event";
                        }
                        return object;
                    };

                    /**
                     * Converts this ExchangeInfoMessage to JSON.
                     * @function toJSON
                     * @memberof ru.sovcombank.hackaton.proto.ExchangeInfoMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExchangeInfoMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ExchangeInfoMessage
                     * @function getTypeUrl
                     * @memberof ru.sovcombank.hackaton.proto.ExchangeInfoMessage
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ExchangeInfoMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/ru.sovcombank.hackaton.proto.ExchangeInfoMessage";
                    };

                    return ExchangeInfoMessage;
                })();

                proto.Header = (function() {

                    /**
                     * Properties of a Header.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @interface IHeader
                     * @property {string|null} [messageNum] Header messageNum
                     * @property {number|Long|null} [timestamp] Header timestamp
                     * @property {string|null} [sender] Header sender
                     * @property {string|null} [receiver] Header receiver
                     * @property {string|null} [messageNumAnswer] Header messageNumAnswer
                     */

                    /**
                     * Constructs a new Header.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @classdesc Заголовок сообщения.
                     * Поля: messageNum, timestamp, sender, receiver - не должны быть пустыми.
                     * Поле  messageNumAnswer - заполняется на основании поля messageNum сообщения на которое формируется ответ.
                     * Данное поле заполняется только для сообщений response.
                     * @implements IHeader
                     * @constructor
                     * @param {ru.sovcombank.hackaton.proto.IHeader=} [properties] Properties to set
                     */
                    function Header(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Header messageNum.
                     * @member {string} messageNum
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @instance
                     */
                    Header.prototype.messageNum = "";

                    /**
                     * Header timestamp.
                     * @member {number|Long} timestamp
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @instance
                     */
                    Header.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Header sender.
                     * @member {string} sender
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @instance
                     */
                    Header.prototype.sender = "";

                    /**
                     * Header receiver.
                     * @member {string} receiver
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @instance
                     */
                    Header.prototype.receiver = "";

                    /**
                     * Header messageNumAnswer.
                     * @member {string|null|undefined} messageNumAnswer
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @instance
                     */
                    Header.prototype.messageNumAnswer = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Header _messageNumAnswer.
                     * @member {"messageNumAnswer"|undefined} _messageNumAnswer
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @instance
                     */
                    Object.defineProperty(Header.prototype, "_messageNumAnswer", {
                        get: $util.oneOfGetter($oneOfFields = ["messageNumAnswer"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Header instance using the specified properties.
                     * @function create
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IHeader=} [properties] Properties to set
                     * @returns {ru.sovcombank.hackaton.proto.Header} Header instance
                     */
                    Header.create = function create(properties) {
                        return new Header(properties);
                    };

                    /**
                     * Encodes the specified Header message. Does not implicitly {@link ru.sovcombank.hackaton.proto.Header.verify|verify} messages.
                     * @function encode
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IHeader} message Header message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Header.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.messageNum != null && Object.hasOwnProperty.call(message, "messageNum"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageNum);
                        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
                        if (message.sender != null && Object.hasOwnProperty.call(message, "sender"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.sender);
                        if (message.receiver != null && Object.hasOwnProperty.call(message, "receiver"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.receiver);
                        if (message.messageNumAnswer != null && Object.hasOwnProperty.call(message, "messageNumAnswer"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.messageNumAnswer);
                        return writer;
                    };

                    /**
                     * Encodes the specified Header message, length delimited. Does not implicitly {@link ru.sovcombank.hackaton.proto.Header.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IHeader} message Header message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Header.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Header message from the specified reader or buffer.
                     * @function decode
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ru.sovcombank.hackaton.proto.Header} Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Header.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ru.sovcombank.hackaton.proto.Header();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.messageNum = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.timestamp = reader.int64();
                                    break;
                                }
                            case 3: {
                                    message.sender = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.receiver = reader.string();
                                    break;
                                }
                            case 5: {
                                    message.messageNumAnswer = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Header message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ru.sovcombank.hackaton.proto.Header} Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Header.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Header message.
                     * @function verify
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Header.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.messageNum != null && message.hasOwnProperty("messageNum"))
                            if (!$util.isString(message.messageNum))
                                return "messageNum: string expected";
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                return "timestamp: integer|Long expected";
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            if (!$util.isString(message.sender))
                                return "sender: string expected";
                        if (message.receiver != null && message.hasOwnProperty("receiver"))
                            if (!$util.isString(message.receiver))
                                return "receiver: string expected";
                        if (message.messageNumAnswer != null && message.hasOwnProperty("messageNumAnswer")) {
                            properties._messageNumAnswer = 1;
                            if (!$util.isString(message.messageNumAnswer))
                                return "messageNumAnswer: string expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a Header message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ru.sovcombank.hackaton.proto.Header} Header
                     */
                    Header.fromObject = function fromObject(object) {
                        if (object instanceof $root.ru.sovcombank.hackaton.proto.Header)
                            return object;
                        var message = new $root.ru.sovcombank.hackaton.proto.Header();
                        if (object.messageNum != null)
                            message.messageNum = String(object.messageNum);
                        if (object.timestamp != null)
                            if ($util.Long)
                                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                            else if (typeof object.timestamp === "string")
                                message.timestamp = parseInt(object.timestamp, 10);
                            else if (typeof object.timestamp === "number")
                                message.timestamp = object.timestamp;
                            else if (typeof object.timestamp === "object")
                                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                        if (object.sender != null)
                            message.sender = String(object.sender);
                        if (object.receiver != null)
                            message.receiver = String(object.receiver);
                        if (object.messageNumAnswer != null)
                            message.messageNumAnswer = String(object.messageNumAnswer);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Header message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.Header} message Header
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Header.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.messageNum = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timestamp = options.longs === String ? "0" : 0;
                            object.sender = "";
                            object.receiver = "";
                        }
                        if (message.messageNum != null && message.hasOwnProperty("messageNum"))
                            object.messageNum = message.messageNum;
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (typeof message.timestamp === "number")
                                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                            else
                                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            object.sender = message.sender;
                        if (message.receiver != null && message.hasOwnProperty("receiver"))
                            object.receiver = message.receiver;
                        if (message.messageNumAnswer != null && message.hasOwnProperty("messageNumAnswer")) {
                            object.messageNumAnswer = message.messageNumAnswer;
                            if (options.oneofs)
                                object._messageNumAnswer = "messageNumAnswer";
                        }
                        return object;
                    };

                    /**
                     * Converts this Header to JSON.
                     * @function toJSON
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Header.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Header
                     * @function getTypeUrl
                     * @memberof ru.sovcombank.hackaton.proto.Header
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Header.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/ru.sovcombank.hackaton.proto.Header";
                    };

                    return Header;
                })();

                proto.Request = (function() {

                    /**
                     * Properties of a Request.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @interface IRequest
                     * @property {ru.sovcombank.hackaton.proto.CommandType|null} [command] Request command
                     * @property {ru.sovcombank.hackaton.proto.IOwnCommand|null} [commandForExec] Request commandForExec
                     * @property {Array.<ru.sovcombank.hackaton.proto.IOwnCommand>|null} [supportedCommands] Request supportedCommands
                     */

                    /**
                     * Constructs a new Request.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @classdesc Represents a Request.
                     * @implements IRequest
                     * @constructor
                     * @param {ru.sovcombank.hackaton.proto.IRequest=} [properties] Properties to set
                     */
                    function Request(properties) {
                        this.supportedCommands = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Request command.
                     * @member {ru.sovcombank.hackaton.proto.CommandType} command
                     * @memberof ru.sovcombank.hackaton.proto.Request
                     * @instance
                     */
                    Request.prototype.command = 0;

                    /**
                     * Request commandForExec.
                     * @member {ru.sovcombank.hackaton.proto.IOwnCommand|null|undefined} commandForExec
                     * @memberof ru.sovcombank.hackaton.proto.Request
                     * @instance
                     */
                    Request.prototype.commandForExec = null;

                    /**
                     * Request supportedCommands.
                     * @member {Array.<ru.sovcombank.hackaton.proto.IOwnCommand>} supportedCommands
                     * @memberof ru.sovcombank.hackaton.proto.Request
                     * @instance
                     */
                    Request.prototype.supportedCommands = $util.emptyArray;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Request _commandForExec.
                     * @member {"commandForExec"|undefined} _commandForExec
                     * @memberof ru.sovcombank.hackaton.proto.Request
                     * @instance
                     */
                    Object.defineProperty(Request.prototype, "_commandForExec", {
                        get: $util.oneOfGetter($oneOfFields = ["commandForExec"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @function create
                     * @memberof ru.sovcombank.hackaton.proto.Request
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IRequest=} [properties] Properties to set
                     * @returns {ru.sovcombank.hackaton.proto.Request} Request instance
                     */
                    Request.create = function create(properties) {
                        return new Request(properties);
                    };

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link ru.sovcombank.hackaton.proto.Request.verify|verify} messages.
                     * @function encode
                     * @memberof ru.sovcombank.hackaton.proto.Request
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IRequest} message Request message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Request.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.command);
                        if (message.commandForExec != null && Object.hasOwnProperty.call(message, "commandForExec"))
                            $root.ru.sovcombank.hackaton.proto.OwnCommand.encode(message.commandForExec, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.supportedCommands != null && message.supportedCommands.length)
                            for (var i = 0; i < message.supportedCommands.length; ++i)
                                $root.ru.sovcombank.hackaton.proto.OwnCommand.encode(message.supportedCommands[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link ru.sovcombank.hackaton.proto.Request.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.Request
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IRequest} message Request message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Request.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @function decode
                     * @memberof ru.sovcombank.hackaton.proto.Request
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ru.sovcombank.hackaton.proto.Request} Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Request.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ru.sovcombank.hackaton.proto.Request();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.command = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.commandForExec = $root.ru.sovcombank.hackaton.proto.OwnCommand.decode(reader, reader.uint32());
                                    break;
                                }
                            case 3: {
                                    if (!(message.supportedCommands && message.supportedCommands.length))
                                        message.supportedCommands = [];
                                    message.supportedCommands.push($root.ru.sovcombank.hackaton.proto.OwnCommand.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.Request
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ru.sovcombank.hackaton.proto.Request} Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Request.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Request message.
                     * @function verify
                     * @memberof ru.sovcombank.hackaton.proto.Request
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Request.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.command != null && message.hasOwnProperty("command"))
                            switch (message.command) {
                            default:
                                return "command: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.commandForExec != null && message.hasOwnProperty("commandForExec")) {
                            properties._commandForExec = 1;
                            {
                                var error = $root.ru.sovcombank.hackaton.proto.OwnCommand.verify(message.commandForExec);
                                if (error)
                                    return "commandForExec." + error;
                            }
                        }
                        if (message.supportedCommands != null && message.hasOwnProperty("supportedCommands")) {
                            if (!Array.isArray(message.supportedCommands))
                                return "supportedCommands: array expected";
                            for (var i = 0; i < message.supportedCommands.length; ++i) {
                                var error = $root.ru.sovcombank.hackaton.proto.OwnCommand.verify(message.supportedCommands[i]);
                                if (error)
                                    return "supportedCommands." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ru.sovcombank.hackaton.proto.Request
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ru.sovcombank.hackaton.proto.Request} Request
                     */
                    Request.fromObject = function fromObject(object) {
                        if (object instanceof $root.ru.sovcombank.hackaton.proto.Request)
                            return object;
                        var message = new $root.ru.sovcombank.hackaton.proto.Request();
                        switch (object.command) {
                        default:
                            if (typeof object.command === "number") {
                                message.command = object.command;
                                break;
                            }
                            break;
                        case "ctHandshake":
                        case 0:
                            message.command = 0;
                            break;
                        case "ctStatus":
                        case 1:
                            message.command = 1;
                            break;
                        case "ctExecCommand":
                        case 2:
                            message.command = 2;
                            break;
                        }
                        if (object.commandForExec != null) {
                            if (typeof object.commandForExec !== "object")
                                throw TypeError(".ru.sovcombank.hackaton.proto.Request.commandForExec: object expected");
                            message.commandForExec = $root.ru.sovcombank.hackaton.proto.OwnCommand.fromObject(object.commandForExec);
                        }
                        if (object.supportedCommands) {
                            if (!Array.isArray(object.supportedCommands))
                                throw TypeError(".ru.sovcombank.hackaton.proto.Request.supportedCommands: array expected");
                            message.supportedCommands = [];
                            for (var i = 0; i < object.supportedCommands.length; ++i) {
                                if (typeof object.supportedCommands[i] !== "object")
                                    throw TypeError(".ru.sovcombank.hackaton.proto.Request.supportedCommands: object expected");
                                message.supportedCommands[i] = $root.ru.sovcombank.hackaton.proto.OwnCommand.fromObject(object.supportedCommands[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ru.sovcombank.hackaton.proto.Request
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.Request} message Request
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Request.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.supportedCommands = [];
                        if (options.defaults)
                            object.command = options.enums === String ? "ctHandshake" : 0;
                        if (message.command != null && message.hasOwnProperty("command"))
                            object.command = options.enums === String ? $root.ru.sovcombank.hackaton.proto.CommandType[message.command] === undefined ? message.command : $root.ru.sovcombank.hackaton.proto.CommandType[message.command] : message.command;
                        if (message.commandForExec != null && message.hasOwnProperty("commandForExec")) {
                            object.commandForExec = $root.ru.sovcombank.hackaton.proto.OwnCommand.toObject(message.commandForExec, options);
                            if (options.oneofs)
                                object._commandForExec = "commandForExec";
                        }
                        if (message.supportedCommands && message.supportedCommands.length) {
                            object.supportedCommands = [];
                            for (var j = 0; j < message.supportedCommands.length; ++j)
                                object.supportedCommands[j] = $root.ru.sovcombank.hackaton.proto.OwnCommand.toObject(message.supportedCommands[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Request to JSON.
                     * @function toJSON
                     * @memberof ru.sovcombank.hackaton.proto.Request
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Request.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Request
                     * @function getTypeUrl
                     * @memberof ru.sovcombank.hackaton.proto.Request
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/ru.sovcombank.hackaton.proto.Request";
                    };

                    return Request;
                })();

                proto.OwnCommand = (function() {

                    /**
                     * Properties of an OwnCommand.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @interface IOwnCommand
                     * @property {string|null} [alias] OwnCommand alias
                     * @property {string|null} [caption] OwnCommand caption
                     * @property {string|null} [description] OwnCommand description
                     * @property {Array.<ru.sovcombank.hackaton.proto.IParameter>|null} [parameters] OwnCommand parameters
                     */

                    /**
                     * Constructs a new OwnCommand.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @classdesc Represents an OwnCommand.
                     * @implements IOwnCommand
                     * @constructor
                     * @param {ru.sovcombank.hackaton.proto.IOwnCommand=} [properties] Properties to set
                     */
                    function OwnCommand(properties) {
                        this.parameters = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * OwnCommand alias.
                     * @member {string} alias
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @instance
                     */
                    OwnCommand.prototype.alias = "";

                    /**
                     * OwnCommand caption.
                     * @member {string|null|undefined} caption
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @instance
                     */
                    OwnCommand.prototype.caption = null;

                    /**
                     * OwnCommand description.
                     * @member {string|null|undefined} description
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @instance
                     */
                    OwnCommand.prototype.description = null;

                    /**
                     * OwnCommand parameters.
                     * @member {Array.<ru.sovcombank.hackaton.proto.IParameter>} parameters
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @instance
                     */
                    OwnCommand.prototype.parameters = $util.emptyArray;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * OwnCommand _caption.
                     * @member {"caption"|undefined} _caption
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @instance
                     */
                    Object.defineProperty(OwnCommand.prototype, "_caption", {
                        get: $util.oneOfGetter($oneOfFields = ["caption"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * OwnCommand _description.
                     * @member {"description"|undefined} _description
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @instance
                     */
                    Object.defineProperty(OwnCommand.prototype, "_description", {
                        get: $util.oneOfGetter($oneOfFields = ["description"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new OwnCommand instance using the specified properties.
                     * @function create
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IOwnCommand=} [properties] Properties to set
                     * @returns {ru.sovcombank.hackaton.proto.OwnCommand} OwnCommand instance
                     */
                    OwnCommand.create = function create(properties) {
                        return new OwnCommand(properties);
                    };

                    /**
                     * Encodes the specified OwnCommand message. Does not implicitly {@link ru.sovcombank.hackaton.proto.OwnCommand.verify|verify} messages.
                     * @function encode
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IOwnCommand} message OwnCommand message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OwnCommand.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.alias != null && Object.hasOwnProperty.call(message, "alias"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.alias);
                        if (message.caption != null && Object.hasOwnProperty.call(message, "caption"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.caption);
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                        if (message.parameters != null && message.parameters.length)
                            for (var i = 0; i < message.parameters.length; ++i)
                                $root.ru.sovcombank.hackaton.proto.Parameter.encode(message.parameters[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified OwnCommand message, length delimited. Does not implicitly {@link ru.sovcombank.hackaton.proto.OwnCommand.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IOwnCommand} message OwnCommand message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OwnCommand.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an OwnCommand message from the specified reader or buffer.
                     * @function decode
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ru.sovcombank.hackaton.proto.OwnCommand} OwnCommand
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OwnCommand.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ru.sovcombank.hackaton.proto.OwnCommand();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.alias = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.caption = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.description = reader.string();
                                    break;
                                }
                            case 4: {
                                    if (!(message.parameters && message.parameters.length))
                                        message.parameters = [];
                                    message.parameters.push($root.ru.sovcombank.hackaton.proto.Parameter.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an OwnCommand message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ru.sovcombank.hackaton.proto.OwnCommand} OwnCommand
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OwnCommand.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an OwnCommand message.
                     * @function verify
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    OwnCommand.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.alias != null && message.hasOwnProperty("alias"))
                            if (!$util.isString(message.alias))
                                return "alias: string expected";
                        if (message.caption != null && message.hasOwnProperty("caption")) {
                            properties._caption = 1;
                            if (!$util.isString(message.caption))
                                return "caption: string expected";
                        }
                        if (message.description != null && message.hasOwnProperty("description")) {
                            properties._description = 1;
                            if (!$util.isString(message.description))
                                return "description: string expected";
                        }
                        if (message.parameters != null && message.hasOwnProperty("parameters")) {
                            if (!Array.isArray(message.parameters))
                                return "parameters: array expected";
                            for (var i = 0; i < message.parameters.length; ++i) {
                                var error = $root.ru.sovcombank.hackaton.proto.Parameter.verify(message.parameters[i]);
                                if (error)
                                    return "parameters." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an OwnCommand message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ru.sovcombank.hackaton.proto.OwnCommand} OwnCommand
                     */
                    OwnCommand.fromObject = function fromObject(object) {
                        if (object instanceof $root.ru.sovcombank.hackaton.proto.OwnCommand)
                            return object;
                        var message = new $root.ru.sovcombank.hackaton.proto.OwnCommand();
                        if (object.alias != null)
                            message.alias = String(object.alias);
                        if (object.caption != null)
                            message.caption = String(object.caption);
                        if (object.description != null)
                            message.description = String(object.description);
                        if (object.parameters) {
                            if (!Array.isArray(object.parameters))
                                throw TypeError(".ru.sovcombank.hackaton.proto.OwnCommand.parameters: array expected");
                            message.parameters = [];
                            for (var i = 0; i < object.parameters.length; ++i) {
                                if (typeof object.parameters[i] !== "object")
                                    throw TypeError(".ru.sovcombank.hackaton.proto.OwnCommand.parameters: object expected");
                                message.parameters[i] = $root.ru.sovcombank.hackaton.proto.Parameter.fromObject(object.parameters[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an OwnCommand message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.OwnCommand} message OwnCommand
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    OwnCommand.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.parameters = [];
                        if (options.defaults)
                            object.alias = "";
                        if (message.alias != null && message.hasOwnProperty("alias"))
                            object.alias = message.alias;
                        if (message.caption != null && message.hasOwnProperty("caption")) {
                            object.caption = message.caption;
                            if (options.oneofs)
                                object._caption = "caption";
                        }
                        if (message.description != null && message.hasOwnProperty("description")) {
                            object.description = message.description;
                            if (options.oneofs)
                                object._description = "description";
                        }
                        if (message.parameters && message.parameters.length) {
                            object.parameters = [];
                            for (var j = 0; j < message.parameters.length; ++j)
                                object.parameters[j] = $root.ru.sovcombank.hackaton.proto.Parameter.toObject(message.parameters[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this OwnCommand to JSON.
                     * @function toJSON
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    OwnCommand.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for OwnCommand
                     * @function getTypeUrl
                     * @memberof ru.sovcombank.hackaton.proto.OwnCommand
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    OwnCommand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/ru.sovcombank.hackaton.proto.OwnCommand";
                    };

                    return OwnCommand;
                })();

                proto.Parameter = (function() {

                    /**
                     * Properties of a Parameter.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @interface IParameter
                     * @property {string|null} [alias] Parameter alias
                     * @property {string|null} [caption] Parameter caption
                     * @property {string|null} [hint] Parameter hint
                     * @property {ru.sovcombank.hackaton.proto.IValueRef|null} [value] Parameter value
                     */

                    /**
                     * Constructs a new Parameter.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @classdesc Тип параметра для типа собственной команды
                     * Поле alias - обязательно для заполнения.
                     * Поля caption, hint - необходимы только для отображения инфо в GUI
                     * 
                     * Поле value - при отправке собственной команды с параметрами при приветствии используется для описания типа поля  и предоставления значения по умолчанию,
                     * при запросе на исполнение собственной команды используется для передачи значения параметра.
                     * @implements IParameter
                     * @constructor
                     * @param {ru.sovcombank.hackaton.proto.IParameter=} [properties] Properties to set
                     */
                    function Parameter(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Parameter alias.
                     * @member {string} alias
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @instance
                     */
                    Parameter.prototype.alias = "";

                    /**
                     * Parameter caption.
                     * @member {string|null|undefined} caption
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @instance
                     */
                    Parameter.prototype.caption = null;

                    /**
                     * Parameter hint.
                     * @member {string|null|undefined} hint
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @instance
                     */
                    Parameter.prototype.hint = null;

                    /**
                     * Parameter value.
                     * @member {ru.sovcombank.hackaton.proto.IValueRef|null|undefined} value
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @instance
                     */
                    Parameter.prototype.value = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Parameter _caption.
                     * @member {"caption"|undefined} _caption
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @instance
                     */
                    Object.defineProperty(Parameter.prototype, "_caption", {
                        get: $util.oneOfGetter($oneOfFields = ["caption"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Parameter _hint.
                     * @member {"hint"|undefined} _hint
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @instance
                     */
                    Object.defineProperty(Parameter.prototype, "_hint", {
                        get: $util.oneOfGetter($oneOfFields = ["hint"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Parameter _value.
                     * @member {"value"|undefined} _value
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @instance
                     */
                    Object.defineProperty(Parameter.prototype, "_value", {
                        get: $util.oneOfGetter($oneOfFields = ["value"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Parameter instance using the specified properties.
                     * @function create
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IParameter=} [properties] Properties to set
                     * @returns {ru.sovcombank.hackaton.proto.Parameter} Parameter instance
                     */
                    Parameter.create = function create(properties) {
                        return new Parameter(properties);
                    };

                    /**
                     * Encodes the specified Parameter message. Does not implicitly {@link ru.sovcombank.hackaton.proto.Parameter.verify|verify} messages.
                     * @function encode
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IParameter} message Parameter message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Parameter.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.alias != null && Object.hasOwnProperty.call(message, "alias"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.alias);
                        if (message.caption != null && Object.hasOwnProperty.call(message, "caption"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.caption);
                        if (message.hint != null && Object.hasOwnProperty.call(message, "hint"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.hint);
                        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                            $root.ru.sovcombank.hackaton.proto.ValueRef.encode(message.value, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Parameter message, length delimited. Does not implicitly {@link ru.sovcombank.hackaton.proto.Parameter.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IParameter} message Parameter message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Parameter.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Parameter message from the specified reader or buffer.
                     * @function decode
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ru.sovcombank.hackaton.proto.Parameter} Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Parameter.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ru.sovcombank.hackaton.proto.Parameter();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.alias = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.caption = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.hint = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.value = $root.ru.sovcombank.hackaton.proto.ValueRef.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Parameter message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ru.sovcombank.hackaton.proto.Parameter} Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Parameter.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Parameter message.
                     * @function verify
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Parameter.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.alias != null && message.hasOwnProperty("alias"))
                            if (!$util.isString(message.alias))
                                return "alias: string expected";
                        if (message.caption != null && message.hasOwnProperty("caption")) {
                            properties._caption = 1;
                            if (!$util.isString(message.caption))
                                return "caption: string expected";
                        }
                        if (message.hint != null && message.hasOwnProperty("hint")) {
                            properties._hint = 1;
                            if (!$util.isString(message.hint))
                                return "hint: string expected";
                        }
                        if (message.value != null && message.hasOwnProperty("value")) {
                            properties._value = 1;
                            {
                                var error = $root.ru.sovcombank.hackaton.proto.ValueRef.verify(message.value);
                                if (error)
                                    return "value." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ru.sovcombank.hackaton.proto.Parameter} Parameter
                     */
                    Parameter.fromObject = function fromObject(object) {
                        if (object instanceof $root.ru.sovcombank.hackaton.proto.Parameter)
                            return object;
                        var message = new $root.ru.sovcombank.hackaton.proto.Parameter();
                        if (object.alias != null)
                            message.alias = String(object.alias);
                        if (object.caption != null)
                            message.caption = String(object.caption);
                        if (object.hint != null)
                            message.hint = String(object.hint);
                        if (object.value != null) {
                            if (typeof object.value !== "object")
                                throw TypeError(".ru.sovcombank.hackaton.proto.Parameter.value: object expected");
                            message.value = $root.ru.sovcombank.hackaton.proto.ValueRef.fromObject(object.value);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Parameter message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.Parameter} message Parameter
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Parameter.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.alias = "";
                        if (message.alias != null && message.hasOwnProperty("alias"))
                            object.alias = message.alias;
                        if (message.caption != null && message.hasOwnProperty("caption")) {
                            object.caption = message.caption;
                            if (options.oneofs)
                                object._caption = "caption";
                        }
                        if (message.hint != null && message.hasOwnProperty("hint")) {
                            object.hint = message.hint;
                            if (options.oneofs)
                                object._hint = "hint";
                        }
                        if (message.value != null && message.hasOwnProperty("value")) {
                            object.value = $root.ru.sovcombank.hackaton.proto.ValueRef.toObject(message.value, options);
                            if (options.oneofs)
                                object._value = "value";
                        }
                        return object;
                    };

                    /**
                     * Converts this Parameter to JSON.
                     * @function toJSON
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Parameter.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Parameter
                     * @function getTypeUrl
                     * @memberof ru.sovcombank.hackaton.proto.Parameter
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Parameter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/ru.sovcombank.hackaton.proto.Parameter";
                    };

                    return Parameter;
                })();

                proto.Response = (function() {

                    /**
                     * Properties of a Response.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @interface IResponse
                     * @property {ru.sovcombank.hackaton.proto.CommandType|null} [command] Response command
                     * @property {ru.sovcombank.hackaton.proto.AnswerType|null} [answerType] Response answerType
                     * @property {string|null} [errorText] Response errorText
                     * @property {ru.sovcombank.hackaton.proto.IStatus|null} [status] Response status
                     */

                    /**
                     * Constructs a new Response.
                     * @memberof ru.sovcombank.hackaton.proto
                     * @classdesc Represents a Response.
                     * @implements IResponse
                     * @constructor
                     * @param {ru.sovcombank.hackaton.proto.IResponse=} [properties] Properties to set
                     */
                    function Response(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Response command.
                     * @member {ru.sovcombank.hackaton.proto.CommandType} command
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @instance
                     */
                    Response.prototype.command = 0;

                    /**
                     * Response answerType.
                     * @member {ru.sovcombank.hackaton.proto.AnswerType} answerType
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @instance
                     */
                    Response.prototype.answerType = 0;

                    /**
                     * Response errorText.
                     * @member {string|null|undefined} errorText
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @instance
                     */
                    Response.prototype.errorText = null;

                    /**
                     * Response status.
                     * @member {ru.sovcombank.hackaton.proto.IStatus|null|undefined} status
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @instance
                     */
                    Response.prototype.status = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Response _errorText.
                     * @member {"errorText"|undefined} _errorText
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @instance
                     */
                    Object.defineProperty(Response.prototype, "_errorText", {
                        get: $util.oneOfGetter($oneOfFields = ["errorText"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Response _status.
                     * @member {"status"|undefined} _status
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @instance
                     */
                    Object.defineProperty(Response.prototype, "_status", {
                        get: $util.oneOfGetter($oneOfFields = ["status"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Response instance using the specified properties.
                     * @function create
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IResponse=} [properties] Properties to set
                     * @returns {ru.sovcombank.hackaton.proto.Response} Response instance
                     */
                    Response.create = function create(properties) {
                        return new Response(properties);
                    };

                    /**
                     * Encodes the specified Response message. Does not implicitly {@link ru.sovcombank.hackaton.proto.Response.verify|verify} messages.
                     * @function encode
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IResponse} message Response message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Response.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.command);
                        if (message.answerType != null && Object.hasOwnProperty.call(message, "answerType"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.answerType);
                        if (message.errorText != null && Object.hasOwnProperty.call(message, "errorText"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.errorText);
                        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                            $root.ru.sovcombank.hackaton.proto.Status.encode(message.status, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Response message, length delimited. Does not implicitly {@link ru.sovcombank.hackaton.proto.Response.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.IResponse} message Response message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Response.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Response message from the specified reader or buffer.
                     * @function decode
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ru.sovcombank.hackaton.proto.Response} Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Response.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ru.sovcombank.hackaton.proto.Response();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.command = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.answerType = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.errorText = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.status = $root.ru.sovcombank.hackaton.proto.Status.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Response message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ru.sovcombank.hackaton.proto.Response} Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Response.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Response message.
                     * @function verify
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Response.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.command != null && message.hasOwnProperty("command"))
                            switch (message.command) {
                            default:
                                return "command: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.answerType != null && message.hasOwnProperty("answerType"))
                            switch (message.answerType) {
                            default:
                                return "answerType: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.errorText != null && message.hasOwnProperty("errorText")) {
                            properties._errorText = 1;
                            if (!$util.isString(message.errorText))
                                return "errorText: string expected";
                        }
                        if (message.status != null && message.hasOwnProperty("status")) {
                            properties._status = 1;
                            {
                                var error = $root.ru.sovcombank.hackaton.proto.Status.verify(message.status);
                                if (error)
                                    return "status." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Response message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ru.sovcombank.hackaton.proto.Response} Response
                     */
                    Response.fromObject = function fromObject(object) {
                        if (object instanceof $root.ru.sovcombank.hackaton.proto.Response)
                            return object;
                        var message = new $root.ru.sovcombank.hackaton.proto.Response();
                        switch (object.command) {
                        default:
                            if (typeof object.command === "number") {
                                message.command = object.command;
                                break;
                            }
                            break;
                        case "ctHandshake":
                        case 0:
                            message.command = 0;
                            break;
                        case "ctStatus":
                        case 1:
                            message.command = 1;
                            break;
                        case "ctExecCommand":
                        case 2:
                            message.command = 2;
                            break;
                        }
                        switch (object.answerType) {
                        default:
                            if (typeof object.answerType === "number") {
                                message.answerType = object.answerType;
                                break;
                            }
                            break;
                        case "atNotSupported":
                        case 0:
                            message.answerType = 0;
                            break;
                        case "atAnswerOK":
                        case 1:
                            message.answerType = 1;
                            break;
                        case "atAnswerError":
                        case 2:
                            message.answerType = 2;
                            break;
                        }
                        if (object.errorText != null)
                            message.errorText = String(object.errorText);
                        if (object.status != null) {
                            if (typeof object.status !== "object")
                                throw TypeError(".ru.sovcombank.hackaton.proto.Response.status: object expected");
                            message.status = $root.ru.sovcombank.hackaton.proto.Status.fromObject(object.status);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Response message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @static
                     * @param {ru.sovcombank.hackaton.proto.Response} message Response
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Response.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.command = options.enums === String ? "ctHandshake" : 0;
                            object.answerType = options.enums === String ? "atNotSupported" : 0;
                        }
                        if (message.command != null && message.hasOwnProperty("command"))
                            object.command = options.enums === String ? $root.ru.sovcombank.hackaton.proto.CommandType[message.command] === undefined ? message.command : $root.ru.sovcombank.hackaton.proto.CommandType[message.command] : message.command;
                        if (message.answerType != null && message.hasOwnProperty("answerType"))
                            object.answerType = options.enums === String ? $root.ru.sovcombank.hackaton.proto.AnswerType[message.answerType] === undefined ? message.answerType : $root.ru.sovcombank.hackaton.proto.AnswerType[message.answerType] : message.answerType;
                        if (message.errorText != null && message.hasOwnProperty("errorText")) {
                            object.errorText = message.errorText;
                            if (options.oneofs)
                                object._errorText = "errorText";
                        }
                        if (message.status != null && message.hasOwnProperty("status")) {
                            object.status = $root.ru.sovcombank.hackaton.proto.Status.toObject(message.status, options);
                            if (options.oneofs)
                                object._status = "status";
                        }
                        return object;
                    };

                    /**
                     * Converts this Response to JSON.
                     * @function toJSON
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Response.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Response
                     * @function getTypeUrl
                     * @memberof ru.sovcombank.hackaton.proto.Response
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/ru.sovcombank.hackaton.proto.Response";
                    };

                    return Response;
                })();

                return proto;
            })();

            return hackaton;
        })();

        return sovcombank;
    })();

    return ru;
})();

module.exports = $root.ru.sovcombank.hackaton.proto;
