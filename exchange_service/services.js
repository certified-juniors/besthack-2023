const protos = require('./protos/bundle');

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
        conn.write(d);
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
            protos.OwnCommand.create({
                alias: key,
            })
        }
    });
}


module.exports = initServer;