const path = require('path');
const PROTOS_PATH = path.resolve(__dirname, './protos');

const PROTOS_FILES = `AdvInfo.proto
AdvInfoData.proto
AdvInfoFieldRef.proto
DataRow.proto
Event.proto
ExchangeInfoMessage.proto
Header.proto
MessageEnums.proto
OwnCommand.proto
Parameter.proto
Request.proto
Response.proto
Status.proto
ValueRef.proto`.split('\n');

const PROTO_FILES = PROTOS_FILES.map((file) => path.resolve(PROTOS_PATH, file));

const PROTO_OPTIONS = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const protobuf = require('google-protobuf');
const protoLoader = require('@grpc/proto-loader');
const grpc = require('@grpc/grpc-js');


const packageDefinition = protoLoader.loadSync(PROTO_FILES, PROTO_OPTIONS);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

module.exports = protoDescriptor.ru.sovcombank.hackaton.proto;