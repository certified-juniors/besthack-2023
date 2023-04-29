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
    console.log(`${socket.id} подключился к серверу`);

    //Отправка списка брокеров
    socket.emit("brokerListUpdate", brokerList());

    // //Отправка статуса брокера
    // socket.emit("brokerStatusUpdate", status);

    // //Отправка комманд брокера
    socket.on("getBrokerCommands", (broker) => {
        //Получение команд конкретного брокера
        console.log(`Клиент ${socket.id} запросил команды ${broker}`);
        socket.emit("brokerCommandsUpdate", getCommands(broker));

        // подписываемся БИ сервис
        console.log(`Клиент ${socket.id} подписался на ${broker}`);
        services.forEach((client) => {
            if (client.name === broker) {
                client.subsribes.push(socket);
            }
        });
        socket.leaveAll();
        socket.join(broker);
    });

    //Отправка данных по команде
    socket.on("sentBrokerCommand", (commandjson) => {
        commandjson = JSON.parse(commandjson);
        // find receiver in clients by command alias
        const receiver = services.find((client) =>
            client.supportedCommands.map((c) => c.alias).includes(commandjson.alias)
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

        waitings[header.messageNum] = {
            socket,
            command: commandjson,
        };

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
});

// Создание сервера TCP
const net = require("net");
const server = net.createServer((socket) => {
    console.log("Client connected.");

    services.push({
        socket: socket,
        state: "connected",
        name: "",
        handshake: false,
        lastMessageNum: 0,
        createAt: Date.now(),
        supportedCommands: [],
        subsribes: [],
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
                handleEvent(socket, message, data);
                break;
            case "response":
                handleResponse(socket, message);
                break;
            default:
                console.error(`Unknown message type: ${message.body}`);
                break;
        }
    });

    // Обработка ошибок
    socket.on("error", (err) => {
        console.error(`Socket error: ${err}`);
    });

    // Обработка закрытия соединения
    socket.on("close", () => {
        console.log("Client disconnected.");
    });
});

let waitings = {};

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
function handleEvent(socket, message, data) {
    const service = services.find((service) => service.socket === socket);

    // отправляем событие всем подписчикам
    io.to(service.name).emit("sentBrokerTable", data);
}

// Запуск сервера TCP
const tcpPort = 1234;
server.listen(tcpPort, () => {
    console.log(`TCP server listening on port ${tcpPort}.`);
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
