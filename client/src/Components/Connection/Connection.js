import React from "react";
import "./connection.css";
import ConnectionBody from "./Body/Body";
import ResponseBody from "./Response/Response";

const Connection = () => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const pathname = url.pathname;
    const dir = pathname.split("/")[3];

    return (
        <div className="connectionPage">
            <div className="connectionpgContent">
                <div className="connectionHeader">
                    <p>Вы подключены к <span>{dir}</span></p>
                    <div className="connectionStatus">
                        <button onClick={() => { console.log("Update") }}>Обновить</button>
                        <p>Status: <span>success</span></p>
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