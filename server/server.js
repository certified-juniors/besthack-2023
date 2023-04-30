const { Server } = require("socket.io");

const proto = require("./protos/bundle.js");

const services = [];

const EMProto = proto.ExchangeInfoMessage;


const io = new Server(8080, {
    cors: {
        origin: ["http://localhost:3000"],
    },
});

io.on("connection", (socket) => {
    onFrontConnect(socket);
});

// Создание сервера TCP
const net = require("net");
const server = net.createServer((socket) => {
    onTCPConnect(socket);
});

// Клиенты фронтенда
function onFrontConnect(socket) {
    console.log(`${socket.id} подключился к серверу`);

    //Отправка списка брокеров
    socket.emit("brokerListUpdate", brokerList(services));

    // //Отправка комманд брокера
    socket.on("getBrokerCommands", (broker) => {
        //Получение команд конкретного брокера
        console.log(`Клиент ${socket.id} запросил команды ${broker}`);
        socket.emit("brokerCommandsUpdate", getCommands(broker));

        // подписываемся БИ сервис
        console.log(`Клиент ${socket.id} подписался на ${broker}`);
        socket.leaveAll();
        socket.join(broker);

        // отправляем последний event если есть
        const service = services.find((client) => client.name === broker);
        if (service && service.lastEvent) {
            console.log(`Клиент ${socket.id} получает последний event`);
            socket.emit("brokerEvent", service.lastEvent);
        }
    });

    //Отправка данных по команде
    socket.on("sentBrokerCommand", (commandraw) => {
        const commandjson = JSON.parse(commandraw);
        // find receiver in clients by command alias
        const receiver = services.find((client) => client.supportedCommands.map((c) => c.alias).includes(commandjson.alias)
        );

        if (!receiver) {
            console.log("Receiver not found");
            return;
        }

        const header = {
            messageNum: (receiver.lastMessageNum++).toString(),
            timestamp: Date.now().toString(),
            sender: "server",
            receiver: receiver.name,
        };

        socket.join(header.messageNum);

        const exchangeInfoMessage = EMProto.create({
            header,
            request: {
                command: proto.CommandType.ctExecCommand,
                commandForExec: commandjson,
            },
        });

        const exchangeInfoMessageBuffer = EMProto
            .encode(exchangeInfoMessage)
            .finish();

        receiver.socket.write(exchangeInfoMessageBuffer);
    });
}

// Клиенты БИ сервисов
function onTCPConnect(socket) {
    console.log("Client connected.");

    services.push({
        socket: socket,
        state: "connected",
        name: "",
        handshake: false,
        lastMessageNum: 0,
        createAt: Date.now(),
        supportedCommands: [],
        lastEvent: null,
    });

    // Обработка входящих сообщений
    socket.on("data", (data) => {
        // увеличиваем счетчик сообщений
        services.forEach((client) => {
            if (client.socket === socket) {
                client.lastMessageNum++;
            }
        });

        const message = EMProto.decode(data);

        // Обработка сообщения
        switch (message.body) {
            case "request":
                handleRequest(socket, message);
                break;
            case "event":
                console.log("Received event:", Number(message.header.timestamp));
                handleEvent(socket, data);
                break;
            case "response":
                handleResponse(data, message);
                break;
            default:
                console.error(`Unknown message type: ${message.body}`);
                break;
        }
    });

    // Обработка закрытия соединения
    socket.on("close", () => {
        // Удаляем клиента из списка
        services.forEach((client, index) => {
            if (client.socket === socket) {
                services.splice(index, 1);
            }
        }
        );
    });

    // Обработка ошибок
    socket.on("error", (err) => {
        console.error(err);
    }
    );
}

// ЗАПРОСЫ
function handleRequest(socket, message) {
    console.log("Header:", message.header);
    const request = message.request;
    console.log("Received request:", request);

    const service = services.find((client) => client.socket === socket);

    const header = {
        messageNum: (service.lastMessageNum++).toString(),
        timestamp: Date.now().toString(),
        sender: "server",
        receiver: message.header.sender,
        messageNumAnswer: message.header.messageNum,
    };

    // рукопожатие
    if (
        request.command === proto.CommandType.ctHandshake &&
        !service.handshake &&
        service.createAt + 5000 > Date.now()
    ) {
        const response = {
            command: proto.CommandType.ctHandshake,
            answerType: proto.AnswerType.atAnswerOK,
        };
        const responseMessage = EMProto.create({
            header,
            response,
        });
        const responseBuffer = EMProto
            .encode(responseMessage)
            .finish();
        socket.write(responseBuffer);

        service.handshake = true;
        service.name = message.header.sender;

        console.log("Handshake OK.");
        console.log("Services: ", services.map((service) => service.name).join(", "));
    }

    // проверка рукопожатия
    if (!service.handshake) {
        console.log("Handshake required.");

        const response = {
            command: request.command,
            answerType: proto.AnswerType.atAnswerError,
        };

        const responseMessage = EMProto
            .encode({
                header,
                response: response,
            })
            .finish();

        socket.write(responseMessage);
        socket.end();
        return;
    }

    // записываем команды, которые предоставляет клиент
    if (request.supportedCommands) {
        service.supportedCommands = request.supportedCommands;
    }
}

// СОБЫТИЯ
function handleEvent(socket, data) {
    const service = services.find((service) => service.socket === socket);

    // отправляем событие всем подписчикам
    io.to(service.name).emit("sentBrokerTable", data);
    service.lastEvent = data;
}

// ОТВЕТЫ
function handleResponse(data, message) {
    // console.log('Header:', message.header);
    // const response = message.response;
    console.log("Received response:", message.header.messageNumAnswer);
    const receiver = message.header.messageNumAnswer;
    // отправляем ответ всем подписчикам
    io.to(receiver).emit("brokerCommandResponse", data);
    // Убрать комнату
    io.socketsLeave(receiver);
}

// Запуск сервера TCP
const tcpPort = 1234;
server.listen(tcpPort, () => {
    console.log(`TCP server listening on port ${tcpPort}.`);
});

function brokerList(services) {
    console.log("Broker list:", services.map((client) => client.name));
    return services.map((client) => client.name);
}

function getCommands(broker) {
    const client = services.find((client) => client.name === broker);
    console.log(client, broker);
    if (!client) {
        return [];
    }
    return client.supportedCommands;
}