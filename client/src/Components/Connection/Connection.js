import React, { useState, useEffect } from "react";
import "./connection.css";
import ConnectionBody from "./Body/Body";
import ResponseBody from "./Response/Response";
import { observer } from "mobx-react-lite";
import Socket from "../../Store/socket";

const Connection = observer(() => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const pathname = url.pathname;
    const dir = pathname.split("/")[3];

    const [allBrokerCommands, setAllBrokerCommands] = useState([]);
    const [status, setStatus] = useState("undefined");

    useEffect(() => {
        Socket.socket.on("brokerStatusUpdate", (response) => {
            console.log(response, 1);
            setStatus(response);
        })

        Socket.socket.emit("getBrokerCommands", dir)
         
        Socket.socket.on("brokerCommandsUpdate", (response) => {
            console.log(response);
            setAllBrokerCommands(response);
        })
    }, [Socket.socket])

    return (
        <div className="connectionPage">
            <div className="connectionpgContent">
                <div className="connectionHeader">
                    <p>Вы подключены к <span>{status}</span></p>
                    <div className="connectionStatus">
                        <button onClick={() => { console.log("Update") }}>Обновить</button>
                        <p>Status: <span>{status}</span></p>
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