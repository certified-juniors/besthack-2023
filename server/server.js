const proto = require('./protos/bundle.js');

// const { handleRequest, handleEvent } = require('./handlers.js');

const clients = {};

const exchangeInfoMessageProto = proto.ExchangeInfoMessage;

// Создание сервера TCP
const net = require('net');
const server = net.createServer((socket) => {
    console.log('Client connected.');

    clients[socket.remoteAddress] = {
        socket: socket,
        state: 'connected',
        handshake: false,
        lastMessageNum: 0,
        createAt: Date.now(),
    };

    // Обработка входящих сообщений
    socket.on('data', (data) => {
        clients[socket.remoteAddress].lastMessageNum++;
        const message = exchangeInfoMessageProto.decode(data);

        // Обработка сообщения
        switch (message.body) {
            case 'request':
                handleRequest(socket, message);
                break;
            case 'event':
                handleEvent(socket, message);
                break;
            case 'response':
            default:
                console.error(`Unknown message type: ${message.body}`);
                break;
        }
    });

    // Обработка ошибок
    socket.on('error', (err) => {
        console.error(`Socket error: ${err}`);
    });

    // Обработка закрытия соединения
    socket.on('close', () => {
        console.log('Client disconnected.');
    });
});


// ЗАПРОСЫ
function handleRequest(socket, message) {
    const request = message.request;
    console.log('Received request:', request);

    const header = {
        messageNum: (clients[socket.remoteAddress].lastMessageNum).toString(),
        timestamp: (Date.now()).toString(),
        sender: "server",
        receiver: message.header.sender,
        messageNumAnswer: message.header.messageNum,
    };

    // рукопожатие
    if (request.command === proto.CommandType.ctHandshake 
        && !clients[socket.remoteAddress].handshake
        && clients[socket.remoteAddress].createAt + 5000 > Date.now()) {
        const response = {
            command: proto.CommandType.ctHandshake,
            answerType: proto.AnswerType.atAnswerOK,
        };
        const responseMessage = exchangeInfoMessageProto.create({ header, response });
        console.log(responseMessage);
        const responseBuffer = exchangeInfoMessageProto.encode(responseMessage).finish();
        console.log(responseBuffer);
        socket.write(responseBuffer);
        clients[socket.remoteAddress].handshake = true;

        console.log('Handshake OK.');
        return;
    }

    // проверка рукопожатия
    if (!clients[socket.remoteAddress].handshake) {
        console.log('Handshake required.');
        
        const response = {
            command: request.command,
            answerType: proto.AnswerType.atAnswerError,
        };

        const responseMessage = exchangeInfoMessageProto.encode({
            header,
            response: response,
        }).finish();
        
        socket.write(responseMessage);
        socket.end();
        return;
    }


}

// СОБЫТИЯ
function handleEvent(socket, message) {
    const event = message.event;
    console.log('Received event:', event);
}


// Запуск сервера TCP
const tcpPort = 1234;
server.listen(tcpPort, () => {
    console.log(`TCP server listening on port ${tcpPort}.`);
});
