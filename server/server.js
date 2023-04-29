const { Socket } = require('socket.io');
const proto = require('./protos/bundle.js');

const clients = [];

const exchangeInfoMessageProto = proto.ExchangeInfoMessage;

// Создание сервера TCP
const net = require('net');
const server = net.createServer((socket) => {
    console.log('Client connected.');

    clients.push({
        socket: socket,
        state: 'connected',
        name: '',
        handshake: false,
        lastMessageNum: 0,
        createAt: Date.now(),
        supportedCommands: [],
        subsribes: [],
    });

    // Обработка входящих сообщений
    socket.on('data', (data) => {
        // увеличиваем счетчик сообщений
        clients.forEach(client => {
            if (client.socket === socket) {
                client.lastMessageNum++;
            }
        });

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
                handleResponse(socket, message);
                break;
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

let waitings = {};

// ЗАПРОСЫ
function handleRequest(socket, message) {
    console.log('Header:', message.header);
    const request = message.request;
    console.log('Received request:', request);

    const client = clients.find(client => client.socket === socket);

    const header = {
        messageNum: client.lastMessageNum.toString(),
        timestamp: Date.now().toString(),
        sender: "server",
        receiver: message.header.sender,
        messageNumAnswer: message.header.messageNum,
    };

    // рукопожатие
    if (request.command === proto.CommandType.ctHandshake
        && !client.handshake
        && client.createAt + 5000 > Date.now()) {
        const response = {
            command: proto.CommandType.ctHandshake,
            answerType: proto.AnswerType.atAnswerOK,
        };
        const responseMessage = exchangeInfoMessageProto.create({ header, response });
        const responseBuffer = exchangeInfoMessageProto.encode(responseMessage).finish();
        socket.write(responseBuffer);

        client.handshake = true;
        client.name = message.header.sender;

        console.log('Handshake OK.');
    }

    // проверка рукопожатия
    if (!client.handshake) {
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
        client.supportedCommands = request.supportedCommands;
    }

}

// СОБЫТИЯ
function handleEvent(socket, message) {
    const event = message.event;
    const client = clients.find(client => client.socket === socket);
    // console.log('Received event:', event);

    // отправляем событие всем подписчикам
    client.subsribes.forEach(sub => {
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
        console.log(`${socket.id} подключился к серверу`);

        //Отправка списка брокеров
        socket.emit("brokerListUpdate", brokerList())

        // //Отправка статуса брокера
        // socket.emit("brokerStatusUpdate", status);

        // //Отправка комманд брокера
        socket.on("getBrokerCommands", broker => {
            //Получение команд конкретного брокера

            socket.emit("brokerCommandsUpdate", getCommands(broker))

            // подписываемся БИ сервис
            console.log(`Клиент ${socket.id} подписался на ${broker}`);
            clients.forEach(client => {
                if (client.name === broker) {
                    client.subsribes.push(socket);
                }
            });
        })

        //Отправка данных по команде
        socket.on("sentBrokerCommand", commandjson => {
            commandjson = JSON.parse(commandjson);
            // find receiver in clients by command alias
            const receiver = clients.find(client => client.supportedCommands.map(c => c.alias).includes(commandjson.alias));
            
            if (!receiver) {
                console.log("Receiver not found");
                return;
            }

            const header = {
                messageNum: (receiver.lastMessageNum++).toString(),
                timestamp: (Date.now()).toString(),
                sender: "server",
                receiver: receiver.name,
            };

            waitings[header.messageNum] = {
                socket,
                command: commandjson
            };

            const exchangeInfoMessage = exchangeInfoMessageProto.create({
                header,
                request: {
                    command: proto.CommandType.ctExecCommand,
                    commandForExec: commandjson
                }
            });

            const exchangeInfoMessageBuffer = exchangeInfoMessageProto.encode(exchangeInfoMessage).finish();

            receiver.socket.write(exchangeInfoMessageBuffer);


        })

    })
});



function handleResponse(socket, message) {
    // console.log('Header:', message.header);
    // const response = message.response;
    if (Object.keys(waitings).includes(message.header.messageNumAnswer)) {
        const waiting = waitings[message.header.messageNumAnswer];
        waiting.socket.emit("brokerCommandResponse", message);
    }
}

function brokerList() {
    return clients.map(client => client.name);
}

function getCommands(broker) {
    const client = clients.find(client => client.name === broker);
    console.log(client, broker);
    if (!client) {
        return [];
    }
    return client.supportedCommands;
}
