const protobuf = require('protobufjs');

const root = protobuf.loadSync('../../protos/ExchangeInfoMessage.proto');

const exchangeProto = root.lookupType('ru.sovcombank.hackaton.proto.ExchangeInfoMessage');

const payload = {
    header: {
        messageNum: "1",
        timestamp: 1234567890,
        sender: "sender",
        receiver: "receiver",
    },
    request: {
        command: exchangeProto.parent.CommandType.ctHandshake,
    },
};

const message = exchangeProto.create(payload);
const buffer = exchangeProto.encode(message).finish();
console.log(buffer);

const decoded = exchangeProto.decode(buffer);
console.log(decoded);

function ProtoMessageDecoder(messageBuffer) {
    const message = exchangeProto.decode(messageBuffer);
    return message;
}


