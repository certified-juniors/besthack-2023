const grpc = require('@grpc/grpc-js');
const protos = require('../protos/exchangeinfomessage')
const services = require('../protos/exchangeinfomessage_grpc_pb')

function initServer(server) {
    server.addService(services.ExchangeServiceService, {
        exchangeRequest: exchangeRequest,
        exchangeResponse: exchangeResponse,
        exchangeEvent: exchangeEvent
    });

    let handshake_data = collectFinhubApi();
}

function collectFinhubApi() {
    const swagger = require('swagger-client');

    const finhubApi = swagger({
        url: 'https://finnhub.io/static/swagger.json',
    });

    finhubApi.then((client) => {
        for (let key in client.spec.paths) {
            console.log(key);
            // serialize to protobuf
            let serialized = hackathon_proto.ownCommand            
        }
    });
}


module.exports = initServer;