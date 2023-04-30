const protos = require('./protos/bundle');
const createHeader = require('./utils/header_creator').createHeader;
const net = require('net');
let commands = [];
let is_ready = false;
let lastdatarows = [];
function initServer(server) {
    console.log("Init server");
    collectFinhubApi(server);
}

const DELAY = require('./utils/header_creator').DELAY;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const FIELDS = [
    protos.AdvInfoFieldRef.create({
        alias: "id",
        caption: "Целое число",
        dataType: protos.DataType.dtInteger
    }),
    protos.AdvInfoFieldRef.create({
        alias: "name",
        caption: "Имя",
        dataType: protos.DataType.dtString
    }),
    protos.AdvInfoFieldRef.create({
        alias: "money",
        caption: "Баланс",
        dataType: protos.DataType.dtFloat
    }),
    protos.AdvInfoFieldRef.create({
        alias: "date",
        caption: "Дата",
        dataType: protos.DataType.dtDateTime
    }),
    protos.AdvInfoFieldRef.create({
        alias: "is_active",
        caption: "Активен",
        dataType: protos.DataType.dtBoolean
    }),
];
function collectFinhubApi(server) {
    const swagger = require('swagger-client');

    const finhubApi = swagger({
        url: 'https://finnhub.io/static/swagger.json',
    });

    finhubApi.then((api) => {
        for (let key in api.spec.paths) {
            let command = api.spec.paths[key];
            const method = Object.keys(command)[0];
            command = command[method];
            let proto = protos.OwnCommand.create({
                alias: key,
                parameters: (() => {
                    let params = [];
                    let raw_params = command.parameters;
                    for (let param in raw_params) {
                        const actual_param = raw_params[param];
                        params.push(protos.Parameter.create({
                            alias: actual_param.name,
                            caption: actual_param.description,
                            hint: actual_param.description,
                            value: protos.ValueRef.create({
                                dataType: protos.DataType.dtString,
                            }),
                        }));
                    }
                    return params;
                })(),
                description: method.toUpperCase() + " " + command.title,
            })
            commands.push(proto);
        }
        is_ready = true;

        socket = net.createConnection({ port: 1234 }, () => {
            console.log('connected to back!');
            const request = protos.ExchangeInfoMessage.create({
                header: createHeader("backend"),
                request: protos.ExchangeInfoMessage.create({
                    command: protos.CommandType.ctHandShake,
                    supportedCommands: commands,
                }),
            });
            const requestBuffer = protos.ExchangeInfoMessage.encode(request).finish();
            socket.write(requestBuffer);
            console.log("Sent handshake");

            console.log("Running Event Runner!!!!");
            setInterval(() => {
                const event = protos.ExchangeInfoMessage.create({
                    event: protos.Event.create({
                        status: protos.Status.create({
                            type: (() => {
                                let types = [
                                    protos.StatusType.stNotReady,
                                    protos.StatusType.stReady,
                                    protos.StatusType.stPerformed,
                                ];
                                return types[getRandomInt(0, 2)];
                            })(),
                            details: randomString(getRandomInt(10, 20)),
                            nextTime: Date.now() + DELAY,
                            advStatus: generateAdvStatus()
                        })
                    }),
                    header: createHeader("backend"),
                });
                const eventBuffer = protos.ExchangeInfoMessage.encode(event).finish();
                socket.write(eventBuffer);
            }, DELAY)

        });
        attachLogic(api, socket);

    });
}

function generateAdvStatus() {
    return protos.AdvInfo.create({
        caption: Math.random().toString(),
        fields: FIELDS,
        data: (() => {
            if (lastdatarows.length == 0) {
                let count = getRandomInt(10, 20);
                for (let i = 0; i < count; i++) {
                    lastdatarows.push(
                        protos.DataRow.create({
                            rowIdent: i.toString(),
                            incrementDelete: false,
                            values: randomValues(i)
                        })
                    );
                }
                return protos.AdvInfoData.create({
                    fullOrIncrement: true,
                    rows: shuffle(lastdatarows)
                });
            }
            // check for increment delete and delete those
            lastdatarows = lastdatarows.filter((row) => {
                return !row.incrementDelete;
            });
            let fullOrIncrement = Boolean(getRandomInt(0, 1));
            let deleteFalseCreateTrue = Boolean(getRandomInt(0, 1));
            if (deleteFalseCreateTrue) {
                lastdatarows.push(
                    protos.DataRow.create({
                        rowIdent: lastdatarows.length.toString(),
                        incrementDelete: false,
                        values: randomValues(lastdatarows.length)
                    })
                );
            } else {
                // choose random row and mark incrementDelete = true
                if (lastdatarows.length > 0)
                lastdatarows[getRandomInt(0, lastdatarows.length - 1)].incrementDelete = true;
            }
            return protos.AdvInfoData.create({
                fullOrIncrement,
                rows: lastdatarows,
            });
        })(),
    });
}

function randomValues(i) {
    return shuffle([
        protos.DataFieldValue.create({
            alias: "id",
            value: createValueInDataField(protos.DataType.dtInteger, getRandomInt(100, 999)),
        }),
        protos.DataFieldValue.create({
            alias: "name",
            value: createValueInDataField(protos.DataType.dtString, randomString(getRandomInt(4, 10))),
        }),
        protos.DataFieldValue.create({
            alias: "money",
            value: createValueInDataField(protos.DataType.dtFloat, getRandomArbitrary(0, 20000)),
        }),
        protos.DataFieldValue.create({
            alias: "date",
            value: createValueInDataField(protos.DataType.dtDateTime, getRandomInt(0, Date.now())),
        }),
        protos.DataFieldValue.create({
            alias: "is_active",
            value: createValueInDataField(protos.DataType.dtBoolean, Boolean(getRandomInt(0, 1))),
        }),
    ].map((item) => {
        return returnWithChance(item, 0.99);
    }).filter((item) => {
        return item != null;
    }));
}

function createValueInDataField(type, value) {
    return protos.ValueRef.create({
        dataType: type,
        value: value.toString(),
    });
}

function randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++)        
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


// chance is 0..1
function returnWithChance(value, chance) {
    return Math.random() < chance ? value : null;
}

function attachLogic(api, conn) {
    conn.on('data', (data) => {
        try {
            const proto = protos.ExchangeInfoMessage.decode(data);
            mainlogic(api, conn, proto);
        } catch (err) {
            sendError(conn, err);
        }
    });
}

function mainlogic(api, conn, proto) {
    const messageNum = proto.header.messageNum;
    const sender = proto.header.sender;
    if (proto.request) {
        const request = proto.request;
        const command = request.command; // proto enum
        if (command === protos.CommandType.ctStatus) {
            console.log("Status command");
            const response = protos.ExchangeInfoMessage.create({
                response: protos.Response.create({
                    command: protos.CommandType.ctStatus,
                    answerType: protos.AnswerType.atAnswerOK,
                    status: protos.Status.create({
                        type: (() => {
                            let types = [
                                protos.StatusType.stNotReady,
                                protos.StatusType.stReady,
                                protos.StatusType.stPerformed,
                            ];
                            return types[getRandomInt(0, 2)];
                        })(),
                        details: randomString(getRandomInt(100, 200)),
                        nextTime: Date.now() + DELAY,
                        advStatus: generateAdvStatus(),
                    }),
                }),
                header: createHeader(sender, messageNum),
            });
            const responseBuffer = protos.ExchangeInfoMessage.encode(response).finish();
            conn.write(responseBuffer);
        } else if (command === protos.CommandType.ctExecCommand) {
            console.log("Exec command");
            // 50% chance to send error
            if (getRandomInt(0, 1)) {
                const response = protos.ExchangeInfoMessage.create({
                    header: createHeader(sender, messageNum),
                    response: protos.Response.create({
                        command: protos.CommandType.ctExecCommand,
                        answerType: protos.AnswerType.atAnswerOK,
                    })
                });
                const responseBuffer = protos.ExchangeInfoMessage.encode(response).finish();
                conn.write(responseBuffer);
            } else {
                const response = protos.ExchangeInfoMessage.create({
                    header: createHeader(sender, messageNum),
                    response: protos.Response.create({
                        command: protos.CommandType.ctExecCommand,
                        answerType: protos.AnswerType.atAnswerError,
                        errorText: randomString(getRandomInt(10, 20)),
                    })
                });
                const responseBuffer = protos.ExchangeInfoMessage.encode(response).finish();
                conn.write(responseBuffer);
            }
        }
    }
}

function sendError(conn, err) {
    const response = protos.ExchangeInfoMessage.create({
        header: createHeader("backend"),
        response: protos.Response.create({
            status: protos.Status.create({
                type: protos.StatusType.stError,
                details: err.message,
            })
        })
    });
    const responseBuffer = protos.ExchangeInfoMessage.encode(response).finish();
    conn.write(responseBuffer);
}


initServer();