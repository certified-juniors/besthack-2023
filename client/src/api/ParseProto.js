import proto from './bundle';
import { Buffer } from 'buffer';

export function ProtoMessageDecoder(messageBuffer) {
    const buffer = Buffer.from(messageBuffer);

    const EMProto = proto.ExchangeInfoMessage;

    const message = EMProto.decode(buffer);
    console.log(message);
    return message;
}