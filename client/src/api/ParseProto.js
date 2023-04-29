import proto from './bundle';
import { Buffer } from 'buffer';

const EMProto = proto.ExchangeInfoMessage;

export default function ProtoMessageDecoder(messageBuffer) {
    return EMProto.decode(Buffer.from(messageBuffer));
}