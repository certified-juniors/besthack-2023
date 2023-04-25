const grpc = require('@grpc/grpc-js');
const initServer = require('./services');
/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
    let server = new grpc.Server();
    initServer(server);
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        console.log("Microservice ExchangeService started on localhost:50051");
        server.start();
    });
}

main();
