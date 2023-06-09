import React, { useState, useEffect } from "react";
import "./connection.css";
import ConnectionBody from "./Body/Body";
import ResponseBody from "./Response/Response";
import { observer } from "mobx-react-lite";
import Socket from "../../Store/socket";
import Name from "../../Store/broker";
import StatusForEvent from "../../Store/status";

const Connection = observer(() => {
    const [allBrokerCommands, setAllBrokerCommands] = useState([]);
    const [status, setStatus] = useState();
    
    useEffect(() => {
        if (StatusForEvent.name !== Name.getName()) { // кринж какой-то, на сонную голову не придумал ничего лучше
            Socket.socket.emit("getBrokerCommands", Name.getName());
            StatusForEvent.name = Name.getName();
        }
        switch (StatusForEvent.status) {
            case 0:
                setStatus("Не готов")
                break;
            case 1:
                setStatus("Готов");
                break;
            case 2:
                setStatus("Выполняется");
                break;
            default:
                setStatus("");
                break;
        }
        Socket.socket.on("brokerCommandsUpdate", (response) => {
            setAllBrokerCommands(response);
        })
    }, [StatusForEvent.status])

    function handleUpdateStatus() {
        Socket.socket.emit("brokerStatusUpdate", Name.getName());
    }


    return (
        <div className="connectionPage">
            {/* <div className="connectionpgContent"> */}
                <div className="connectionHeader">
                    <div className="connectionView">
                        <a href="/terminal"><button>Назад</button></a>
                        <p>Вы подключены к <span>{Name.getName()}</span></p>
                    </div>
                    <div className="connectionStatus">
                        <button onClick={() => { handleUpdateStatus() }}>Обновить</button>
                        <p>Статус сервиса: <span>{status}</span></p>
                    </div>
                </div>
                <div className="connectionBody">
                    <ConnectionBody
                        commands={allBrokerCommands}
                    />
                    <ResponseBody
                    />
                </div>
            {/* </div> */}
        </div>
    )
});

export default Connection;