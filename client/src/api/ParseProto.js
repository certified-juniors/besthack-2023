import proto from "./bundle_prod";
const EMProto = proto.ExchangeInfoMessage;

export function ProtoMessageDecoder(messageBuffer) {
    console.log(EMProto);
    const message = EMProto.decode(messageBuffer);
    console.log(message);
    return message;
}
