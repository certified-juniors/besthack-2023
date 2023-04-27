// ЗАПРОСЫ
function handleRequest(socket, message) {
    const request = message.request;
    console.log('Received request:', request);

    const header = {
        messageNum: "1",
        timestamp: Date.now(),
        sender: "server",
        receiver: message.header.sender,
        messageNumAnswer: message.header.messageNum,
    };

    // рукопожатие
    if (request.command === proto.CommandType.ctHandshake) {
        const response = {
            command: proto.CommandType.ctHandshake,
            answerType: proto.AnswerType.atAnswerOK,
        };
        const responseMessage = exchangeInfoMessageProto.encode({
            header,
            response: response,
        }).finish();
        socket.write(responseMessage);
    }
}

// СОБЫТИЯ
function handleEvent(socket, event) {
    console.log('Received event:', event);
}

module.exports = {
    handleRequest,
    handleEvent,
};