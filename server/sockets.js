const io = require("socket.io")(8080, {
    cors: {
        origin: ["http://localhost:3000"]
    }
})

const { brokerList } = require('./server')

io.on("connection", socket => {
    
    //Отправка списка брокеров
    socket.emit("getBrokerList", brokerList)


    //Отправка статуса брокера
    socket.emit("brokerStatusUpdate", status);

    //Отправка комманд брокера
    socket.on("getBrokerCommands", broker => {
        //Получение команд конкретного брокера

        socket.emit("brokerCommandsUpdate", commands)
    })

    //Отправка данных по команде
    socket.on("sentBrokerCommand", command => {
        //Получение данных

        socket.emit("sentBrokerTable", data)
    })

})
