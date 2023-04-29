// const protobuf = require('protobufjs');

// const root = protobuf.loadSync('../../protos/ExchangeInfoMessage.proto');

// const exchangeProto = root.lookupType('ru.sovcombank.hackaton.proto.ExchangeInfoMessage');

// const payload = {
//     header: {
//         messageNum: "1",
//         timestamp: 1234567890,
//         sender: "sender",
//         receiver: "receiver",
//     },
//     request: {
//         command: exchangeProto.parent.CommandType.ctHandshake,
//     },
// };

// const message = exchangeProto.create(payload);
// const buffer = exchangeProto.encode(message).finish();
// console.log(buffer);

// const decoded = exchangeProto.decode(buffer);
// console.log(decoded);

import proto from "./bundle";
const EMProto = proto.ExchangeInfoMessage;

export function ProtoMessageDecoder(messageBuffer) {
    console.log(EMProto, messageBuffer);
    const message = EMProto.decode(messageBuffer);
    console.log(message);
    return message;
}
