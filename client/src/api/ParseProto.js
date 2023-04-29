import proto from "./bundle";
const EMProto = proto.ExchangeInfoMessage;

export function ProtoMessageDecoder(messageBuffer) {
    console.log(EMProto, messageBuffer);
    const message = EMProto.decode(messageBuffer);
    console.log(message);
    return message;
}
