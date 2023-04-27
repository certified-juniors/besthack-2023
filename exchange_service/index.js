var net = require('net');
const initServer = require('./services');

var server = net.createServer();
initServer(server)
server.listen(9000, function () {
    console.log('server listening to %j', server.address());
});