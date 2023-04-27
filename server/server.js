// Загрузка proto-файла
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = '../protos/ExchangeInfoMessage.proto'
const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
};
const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const exchangeProto = grpc.loadPackageDefinition(packageDefinition).ru.sovcombank.hackaton.proto;

// Создание сервера TCP
const net = require('net');
const server = net.createServer((socket) => {
    console.log('Client connected.');

    // Обработка входящих сообщений
    socket.on('data', (data) => {
        // Разбор сообщения с помощью proto-файла
        const message = exchangeProto.Message.decode(data);

        // Обработка сообщения
        switch (message.type) {
            case exchangeProto.MessageType.QUOTE_REQUEST:
                handleQuoteRequest(socket, message.quoteRequest);
                break;
            case exchangeProto.MessageType.TRADE_REQUEST:
                handleTradeRequest(socket, message.tradeRequest);
                break;
            default:
                console.error(`Unknown message type: ${message.type}`);
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
function handleQuoteRequest(socket, quoteRequest) {
    console.log('Received quote request:', quoteRequest);

    // Отправка ответа
    const quoteResponse = {
        symbol: quoteRequest.symbol,
        bidPrice: Math.random() * 100,
        askPrice: Math.random() * 100
    };
    const responseMessage = exchangeProto.Message.encode({
        type: exchangeProto.MessageType.QUOTE_RESPONSE,
        quoteResponse: quoteResponse
    });
    socket.write(responseMessage);
}

// Обработка запроса на сделку
function handleTradeRequest(socket, tradeRequest) {
    console.log('Received trade request:', tradeRequest);

    // Отправка ответа
    const tradeResponse = {
        orderId: Math.floor(Math.random() * 1000000)
    };
    const responseMessage = exchangeProto.Message.encode({
        type: exchangeProto.MessageType.TRADE_RESPONSE,
        tradeResponse: tradeResponse
    });
    socket.write(responseMessage);
}

// Создание HTTP сервера
const http = require('http');
const httpPort = 8080;
const httpServer = http.createServer((req, res) => {
    console.log('Received HTTP request.');

    // Отправка HTML страницы
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<html><body><h1>Welcome to the Exchange!</h1></body></html>');
});

// Запуск HTTP сервера
httpServer.listen(httpPort, () => {
    console.log(`HTTP server listening on port ${httpPort}.`);
});
