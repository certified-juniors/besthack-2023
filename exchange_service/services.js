const grpc = require('@grpc/grpc-js');
const protos = require('./proto_api');

function initServer(server) {
    server
    let handshake_data = collectFinhubApi();
}

function collectFinhubApi() {
    const swagger = require('swagger-client');

    const finhubApi = swagger({
        url: 'https://finnhub.io/static/swagger.json',
    });

    
    finhubApi.then((client) => {
        for (let key in client.spec.paths) {
            console.log(protos.OwnCommand);
            
        }
    });
}


module.exports = initServer;