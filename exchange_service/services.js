const protos = require('./protos/bundle');
const createHeader = require('./utils/header_creator');
const net = require('net');
let commands = [];
let is_ready = false;

function initServer(server) {
    console.log("Init server");
    server.on('connection', handle);
    collectFinhubApi(server);
}

function handle(conn) {
    var remoteAddress = conn.remoteAddress + ':' + conn.remotePort;
    console.log('new client connection from %s', remoteAddress);
    conn.on('data', onConnData);
    conn.once('close', onConnClose);
    conn.on('error', onConnError);
    function onConnData(d) {
        console.log('connection data from ', remoteAddress);
        try {
            const proto = protos.ExchangeInfoMessage.decode(d);
            mainlogic(conn, proto);
        } catch (e) {
            sendError(e);
        }
    }
    function onConnClose() {
        console.log('connection from %s closed', remoteAddress);
    }
    function onConnError(err) {
        console.log('Connection %s error: %s', remoteAddress, err.message);
    }
}

function collectFinhubApi(server) {
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

        // net.createConnection({ port: 1234 }, () => {
        //     console.log('connected to back!');
        //     const request = protos.ExchangeInfoMessage.create({
        //         header: createHeader("backend"),
        //         request: protos.ExchangeInfoMessage.create({
        //             command: protos.CommandType.ctHandShake,
        //             supportedCommands: commands,
        //         }),
        //     });
        //     const requestBuffer = protos.ExchangeInfoMessage.encode(request).finish();
        //     conn.write(requestBuffer);
        // });
    });
}

function mainlogic(conn, proto) {
    const messageNum = proto.header.messageNum;
    const sender = proto.header.sender;
    if (proto.request) {
        const request = proto.request;
        const command = request.command; // proto enum
    }
}


module.exports = initServer;