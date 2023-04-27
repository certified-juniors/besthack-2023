const { Header } = require("../protos/bundle")

let messageNum = 0;
const sender = 'vanya';

function createHeader(receiver, messageNumAnswer) {
    return Header.create({
        messageNum,
        timestamp: Date.now(),
        sender,
        receiver,
        messageNumAnswer,
    });
}

module.exports = createHeader;