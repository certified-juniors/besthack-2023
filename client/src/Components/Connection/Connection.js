import React, { useState, useEffect } from "react";
import "./connection.css";
import ConnectionBody from "./Body/Body";
import ResponseBody from "./Response/Response";
import { observer } from "mobx-react-lite";
import Socket from "../../Store/socket";
import Name from "../../Store/broker";
import Status from "../../Store/status";

const Connection = observer(() => {
    const [allBrokerCommands, setAllBrokerCommands] = useState([]);
    const [status, setStatus] = useState("undefined");
    const [type, setType] = useState("undefined");

    useEffect(() => {
        

        Socket.socket.emit("getBrokerCommands", Name.getName());

        Socket.socket.on("brokerCommandsUpdate", (response) => {
            setAllBrokerCommands(response);
        })
    }, [Socket.socket])


    return (
        <div className="connectionPage">
            <div className="connectionpgContent">
                <div className="connectionHeader">
                    <div className="connectionView">
                        <a href="/terminal"><button>Назад</button></a>
                        <p>Вы подключены к <span>{Name.getName()}</span></p>
                    </div>
                    <div className="connectionStatus">
                        <button onClick={() => setStatus(Status.getStatus()) }>Обновить</button>
                        <p>Status: <span>{status}</span></p>
                        <p>Type: </p>
                    </div>
                </div>
                <div className="connectionBody">
                    <ConnectionBody
                        commands={allBrokerCommands}
                    />
                    <ResponseBody
                    />
                </div>
            </div>
        </div>
    )
});

export default Connection;