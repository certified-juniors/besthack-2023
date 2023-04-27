const protos = require('./protos/bundle');
const createHeader = require('./utils/header_creator');
const net = require('net');
let commands = [];
let is_ready = false;
let lastdatarows = [];
function initServer(server) {
    console.log("Init server");
    collectFinhubApi(server);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

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
                    header: createHeader("backend"),
                    event: protos.Event.create({
                        status: protos.Status.create({
                            type: protos.StatusType.stPerformed,
                            details: "randomString" + Math.random(),
                            nextTime: Date.now() + 5000,
                            advStatus: protos.AdvInfo.create({
                                caption: Math.random().toString(),
                                fields: [
                                    protos.AdvInfoFieldRef.create({
                                        alias: "id",
                                        caption: "Идентификатор",
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
                                ],
                                data: (() => {
                                    if (lastdatarows.length == 0) {
                                        let count = getRandomInt(10, 20)
                                        for (let i = 0; i < count; i++) {
                                            lastdatarows.push(
                                                protos.DataRow.create({
                                                    rowIdent: i.toString(),
                                                    incrementDelete: false,
                                                    values: [
                                                        protos.ValueRef.create({
                                                            dataType: protos.DataType.dtInteger,
                                                            value: i.toString(),
                                                        }),
                                                        protos.ValueRef.create({
                                                            dataType: protos.DataType.dtString,
                                                            value: getRandomInt(10000, 99999).toString(),
                                                        }),
                                                        protos.ValueRef.create({
                                                            dataType: protos.DataType.dtFloat,
                                                            value: getRandomArbitrary(0, 20000).toString()
                                                        }),
                                                    ]
                                                })
                                            )
                                        }
                                        return protos.AdvInfoData.create({
                                            fullOrIncrement: true,
                                            rows: lastdatarows
                                        });
                                    }
                                    let fullOrIncrement = Boolean(getRandomInt(0, 1));
                                    let deleteFalseCreateTrue = Boolean(getRandomInt(0, 1));
                                    if (deleteFalseCreateTrue) {
                                        lastdatarows.push(
                                            protos.DataRow.create({
                                                rowIdent: lastdatarows.length.toString(),
                                                incrementDelete: false,
                                                values: [
                                                    protos.ValueRef.create({
                                                        dataType: protos.DataType.dtInteger,
                                                        value: lastdatarows.length.toString()
                                                    }),
                                                    protos.ValueRef.create({
                                                        dataType: protos.DataType.dtString,
                                                        value: getRandomInt(10000, 99999).toString(),
                                                    }),
                                                    protos.ValueRef.create({
                                                        dataType: protos.DataType.dtFloat,
                                                        value: getRandomArbitrary(0, 20000).toString()
                                                    }),
                                                ]
                                            })
                                        )
                                    } else {
                                        lastdatarows.pop()
                                    }
                                    return protos.AdvInfoData.create({
                                        fullOrIncrement,
                                        rows: lastdatarows,
                                    });
                                })(),
                            })
                        })
                    })
                });
                const eventBuffer = protos.ExchangeInfoMessage.encode(event).finish();
                socket.write(eventBuffer);
            }, 5000)

        });
        attachLogic(api, socket);
    });
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
                header: createHeader(sender, messageNum),
            });
            const responseBuffer = protos.ExchangeInfoMessage.encode(response).finish();
            conn.write(responseBuffer);
        } else if (command === ctExecCommand) {
            console.log("Exec command");
            const commandForExec = request.commandForExec;
            const commandAlias = commandForExec.alias;
            const commandParameters = commandForExec.parameters;
            // swagger-client api call
            const method = commandAlias.split(" ")[0].toLowerCase();
            const path = commandAlias.split(" ")[1];
            const params = {};
        }
    }
}

initServer();