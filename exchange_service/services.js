const protos = require('./protos/bundle');

let commands = [];
let is_ready = false;

function initServer(server) {
    console.log("Init server");
    server.on('connection', handle);
    let handshake_data = collectFinhubApi();
}

function handle() {
    var remoteAddress = conn.remoteAddress + ':' + conn.remotePort;
    console.log('new client connection from %s', remoteAddress);
    conn.on('data', onConnData);
    conn.once('close', onConnClose);
    conn.on('error', onConnError);
    function onConnData(d) {
        console.log('connection data from %s: %j', remoteAddress, d);
        const proto = protos.ExchangeInfoMessage.decode(d);
        mainlogic(proto);
    }
    function onConnClose() {
        console.log('connection from %s closed', remoteAddress);
    }
    function onConnError(err) {
        console.log('Connection %s error: %s', remoteAddress, err.message);
    }
}

function collectFinhubApi() {
    const swagger = require('swagger-client');

    const finhubApi = swagger({
        url: 'https://finnhub.io/static/swagger.json',
    });
    
    finhubApi.then((client) => {
        for (let key in client.spec.paths) {
            let command = client.spec.paths[key];
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
    });
}

function mainlogic(proto) {
    const messageNum = proto.header.messageNum;
    if (proto.request) {
        const request = proto.request;
        const command = request.command; // proto enum
        if (command == protos.CommandType.ctHandShake) {
            if (is_ready) {
                const response = protos.ExchangeInfoMessage.create({
                    header: protos.Header.create({
                        messageNum,
                        timestamp: Date.now(),
                        sender: "vanya",
                        receiver: "client",
                    }),
                    response: protos.Response.create({
                        command,
                        result: protos.Result.create({
                            code: protos.ResultCode.rcOk,
                            message: "OK",
                        }),
                        data: protos.Data.create({
                            command: protos.OwnCommand.create({
                                alias: "finhub",
                                parameters: (() => {
                                    let params = [];
                                    for (let command in commands) {
                                        params.push(commands[command]);
                                    }
                                    return params;
                                })(),
                                description: "Finhub API",
                            }),
                        }),
                    }),
                });
                const responseBuffer = protos.ExchangeInfoMessage.encode(response).finish();
                conn.write(responseBuffer);
            }
        }
    }
}


module.exports = initServer;