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
        name: '',
        handshake: false,
        lastMessageNum: 0,
        createAt: Date.now(),
        supportedCommands: [],
        subsribes: [],
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
    console.log('Header:', message.header);
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
        const responseBuffer = exchangeInfoMessageProto.encode(responseMessage).finish();
        socket.write(responseBuffer);

        clients[socket.remoteAddress].handshake = true;
        clients[socket.remoteAddress].name = message.header.sender;

        console.log('Handshake OK.');
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

    // записываем команды, которые предоставляет клиент
    if (request.supportedCommands) {
        clients[socket.remoteAddress].supportedCommands = request.supportedCommands;
    }

}

// СОБЫТИЯ
function handleEvent(socket, message) {
    const event = message.event;
    console.log('Received event:', event);

    // отправляем событие всем подписчикам
    clients[socket.remoteAddress].subsribes.forEach(sub => {
        sub.emit("sentBrokerTable", event.status)
    });
}


// Запуск сервера TCP
const tcpPort = 1234;
server.listen(tcpPort, () => {
    console.log(`TCP server listening on port ${tcpPort}.`);

    const io = require("socket.io")(8080, {
        cors: {
            origin: ["http://localhost:3000"]
        }
    })

    io.on("connection", socket => {
        console.log(socket.id);

        //Отправка списка брокеров
        socket.emit("brokerListUpdate", brokerList())

        // //Отправка статуса брокера
        // socket.emit("brokerStatusUpdate", status);

        // //Отправка комманд брокера
        socket.on("getBrokerCommands", broker => {
            //Получение команд конкретного брокера

            socket.emit("brokerCommandsUpdate", getCommands(broker))

            // подписываемся БИ сервис
            Object.values(clients).forEach(client => {
                if (client.name === broker) {
                    client.subsribes.push(socket);
                }
            });
        })

        //Отправка данных по команде
        // socket.on("sentBrokerCommand", command => {
        //     //Получение данных

            
        // })

    })
});

function brokerList() {
    return Object.values(clients).map(client => client.name);
}

function getCommands(broker) {
    const client = Object.values(clients).find(client => client.name === broker);
    console.log(client, broker);
    if (!client) {
        return [];
    }
    return client.supportedCommands;
}
