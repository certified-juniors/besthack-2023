const proto = require('./protos/bundle.js');

/* const exchangeInfoMessageProto = proto.ExchangeInfoMessage;

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
console.log(buffer);

const decodedMessage = exchangeInfoMessageProto.decode(buffer);
const decodedPayload = exchangeInfoMessageProto.toObject(decodedMessage);
console.log(decodedPayload);
console.log(decodedPayload.request.command === proto.CommandType.ctHandshake);*/

const clients = {};

const exchangeInfoMessageProto = proto.ExchangeInfoMessage;

// Создание сервера TCP
const net = require('net');
const server = net.createServer((socket) => {
    console.log('Client connected.');

    clients[socket.remoteAddress] = {};

    // Обработка входящих сообщений
    socket.on('data', (data) => {
        const message = exchangeInfoMessageProto.decode(data);

        // Обработка сообщения
        switch (message.body) {
            case 'request':
                handleRequest(socket, message.request);
                break;
            case 'event':
                handleEvent(socket, message.event);
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

// Запуск сервера TCP
const tcpPort = 1234;
server.listen(tcpPort, () => {
    console.log(`TCP server listening on port ${tcpPort}.`);
});

// Обработка запроса котировки
function handleRequest(socket, request) {
    console.log('Received request:', request);

    // Отправка ответа
    if (request.command === proto.CommandType.ctHandshake) {
        const response = {
            command: proto.CommandType.ctHandshake,
            answerType: proto.AnswerType.atAnswerOK,
        };
        const responseMessage = exchangeInfoMessageProto.encode({
            header: {
                messageNum: "1",
                timestamp: Date.now(),
                sender: "server",
                receiver: "client",
            },
            response: response,
        });
        // const responseBuffer = exchangeInfoMessageProto.encode(responseMessage).finish();
        // socket.write(responseMessage.finish());
        socket.write(Buffer.from('responseMessage'));
    }

    // const quoteResponse = {
    //     symbol: quoteRequest.symbol,
    //     bidPrice: Math.random() * 100,
    //     askPrice: Math.random() * 100
    // };
    // const responseMessage = exchangeProto.Message.encode({
    //     type: exchangeProto.MessageType.QUOTE_RESPONSE,
    //     quoteResponse: quoteResponse
    // });
    // socket.write(responseMessage);
}

// Обработка запроса на сделку
function handleEvent(socket, event) {
    console.log('Received event:', event);

    // Отправка ответа
    // const tradeResponse = {
    //     orderId: Math.floor(Math.random() * 1000000)
    // };
    // const responseMessage = exchangeProto.Message.encode({
    //     type: exchangeProto.MessageType.TRADE_RESPONSE,
    //     tradeResponse: tradeResponse
    // });
    // socket.write(responseMessage);
}

// Создание HTTP сервера
const http = require('http');
const httpPort = 8080;
const httpServer = http.createServer((req, res) => {
    console.log('Received HTTP request.');

    // Отправка HTML страницы
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body><h1>Welcome to the Exchange!</h1></body></html>');
});

// Запуск HTTP сервера
httpServer.listen(httpPort, () => {
    console.log(`HTTP server listening on port ${httpPort}.`);
});
