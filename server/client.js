const net = require('net');
const proto = require('./protos/bundle');

const client = net.createConnection({ port: 1234 }, () => {
    // 'connect' listener.
    console.log('connected to server!');
    
    const exchangeInfoMessageProto = proto.ExchangeInfoMessage;

    const payload = {
        header: {
            messageNum: "1",
            timestamp: 1234567890,
            sender: "sender",
            receiver: "receiver",
        },
        request: {
            command: proto.CommandType.ctHandshake,
        },
    };
    
    const message = exchangeInfoMessageProto.create(payload);
    const buffer = exchangeInfoMessageProto.encode(message).finish();
    
    client.write(buffer);

    client.on('data', (data) => {
        console.log(data.toString());
        client.end();
    });
});