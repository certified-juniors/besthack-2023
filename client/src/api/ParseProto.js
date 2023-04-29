import proto from './bundle';
import { Buffer } from 'buffer';

const EMProto = proto.ExchangeInfoMessage;

export function ProtoMessageDecoder(messageBuffer) {
    const buffer = Buffer.from(messageBuffer);
    const message = EMProto.decode(buffer);
    return message;
}