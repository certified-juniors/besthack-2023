import React, { useState, useEffect } from "react";
import "./connection.css";
import ConnectionBody from "./Body/Body";
import ResponseBody from "./Response/Response";

const Connection = ({ socket }) => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const pathname = url.pathname;
    const dir = pathname.split("/")[3];

    const [allBrokerCommands, setAllBrokerCommands] = useState([]);
    const [status, setStatus] = useState("undefined");

    useEffect(() => {
        socket.on("checkBrokerStatus", (response) => {
            const res = JSON.parse(response);
            setStatus(res);
        })

        socket.on("getBrokerCommands", (response) => {
            const res = JSON.parse(response);
            setAllBrokerCommands(res);
        })
    }, [socket])

    return (
        <div className="connectionPage">
            <div className="connectionpgContent">
                <div className="connectionHeader">
                    <p>Вы подключены к <span>{dir}</span></p>
                    <div className="connectionStatus">
                        <button onClick={() => { console.log("Update") }}>Обновить</button>
                        <p>Status: <span>{status}</span></p>
                    </div>
                </div>
                <div className="connectionBody">
                    <ConnectionBody
                        commands={allBrokerCommands}
                        socket={socket}
                        />
                    <ResponseBody
                        socket={socket}
                    />
                </div>
            </div>
        </div>
    )
}

export default Connection;