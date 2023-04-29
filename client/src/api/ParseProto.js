import proto from './bundle';
import { Buffer } from 'buffer';

const EMProto = proto.ExchangeInfoMessage;

export function ProtoMessageDecoder(messageBuffer) {
    const buffer = Buffer.from(messageBuffer);
    const message = EMProto.decode(buffer);
<<<<<<< HEAD

=======
>>>>>>> da3e4f47e9fe03cee88ec64936bdaa9329896d07
    return message;
}