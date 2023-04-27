const net = require('net');
const proto = require('./protos/bundle');

const exchangeInfoMessageProto = proto.ExchangeInfoMessage;

const client = net.createConnection({ port: 1234 }, () => {
    // 'connect' listener.
    console.log('connected to server!');

    const payload = {
        header: {
            messageNum: "1",
            timestamp: Date.now(),
            sender: "sender",
            receiver: "server",
        },
        request: {
            // command: proto.CommandType.ctHandshake,
            command: proto.CommandType.ctExecCommand,
        },
    };
    
    const message = exchangeInfoMessageProto.create(payload);
    const buffer = exchangeInfoMessageProto.encode(message).finish();
    
    client.write(buffer);

    client.on('data', (data) => {
        const message = exchangeInfoMessageProto.decode(data);
        console.log(message.response.answerType === proto.AnswerType.atAnswerOK ? 'OK' : 'ERROR');
    });
});