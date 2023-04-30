const { Header } = require("../protos/bundle")

let messageNum = -1;
const sender = 'The ExchangeService 2';

function createHeader(receiver, messageNumAnswer) {
    messageNum++;
    return Header.create({
        messageNum: messageNum.toString(),
        timestamp: Date.now(),
        sender,
        receiver,
        messageNumAnswer,
    });
}

module.exports = createHeader;