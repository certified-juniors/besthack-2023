const io = require("socket.io")(8080, {
    cors: {
        origin: ["http://localhost:3000"]
    }
})

io.on("connection", socket => {
    
    //Отправка списка брокеров
    socket.on("getBrokerList", () => {
        //Надо получить brokerList

        socket.emit("brokerListUpdate", brokerList)
    })

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

    //Отправка статуса брокера
    socket.on("checkBrokerStatus", () => {
        //Получение статуса брокера
        
        socket.emit("brokerStatusUpdate", status);
    })
})
