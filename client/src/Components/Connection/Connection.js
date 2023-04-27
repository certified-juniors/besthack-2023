import React, { useState, useEffect } from "react";
import "./connection.css";
import ConnectionBody from "./Body/Body";
import ResponseBody from "./Response/Response";

const Connection = ({ socket }) => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const pathname = url.pathname;
    const dir = pathname.split("/")[3];

    const [connectionStatus, setConnectionStatus] = useState("undefined");
    const [brokerName, setBrokerName] = useState(dir);

    useEffect(() => {
        socket.on("connectionStatusUpdate", (status) => {
            setConnectionStatus(status);
        })

        socket.on("brokerNameUpdate", (name) => {
            setBrokerName(name);
        })

        socket.emit("getInitialData"); // Название брокера и его статус

        return () => {
            socket.off("connectionStatusUpdate");
            socket.off("brokerNameUpdate");
        }
    }, [socket])

    const handleUpdate = () => {
        console.log("Update");
        socket.emit("updateData");
    }

    return (
        <div className="connectionPage">
            <div className="connectionpgContent">
                <div className="connectionHeader">
                    <p>Вы подключены к <span>{brokerName}</span></p>
                    <div className="connectionStatus">
                        <button onClick={handleUpdate}>Обновить</button>
                        <p>Status: <span>{connectionStatus}</span></p>
                    </div>
                </div>
                <div className="connectionBody">
                    <ConnectionBody />
                    <ResponseBody />
                </div>
            </div>
        </div>
    )
}

export default Connection;