import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Socket from "../../../Store/socket"; 
import TimeStamp from "../../../Store/timeStamp";

import { ProtoMessageDecoder } from "../../../api/ParseProto";

const ResponseBody = observer(() => {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);
    const [data, setData] = useState([]);
    const [resTime, setResTime] = useState("");
    const [resTimeCommand, setResTimeCommand] = useState("");
    const [resTimeEvent, setResTimeEvent] = useState("");

    useEffect(() => {
        Socket.socket.on("sentBrokerTable", (data) => {
            ProtoMessageDecoder(data);
            console.log(data);
            setData(data);
            setRows(data.advStatus.data.rows.length);
            setCols(data.advStatus.fields.length);
        });
        Socket.socket.on("brokerCommandResponse", (data) => {
            setResTime(Date.now() - data.header.timestamp + " ms");
            setResTimeCommand(TimeStamp.setResTimeCommand(Date.now()) + " ms");
            setResTimeEvent(Date.now() - data.event.timestamp);
        });
    }, [Socket.socket]);

    return (
        <div className="responsePage">
            <div className="responsepgContent">
                <table>
                    <thead>
                        <tr>
                            {Array.from({ length: cols }).map((_, index) => {
                                console.log(data.advStatus.fields[index].caption);
                                return (
                                    (
                                        !data.advStatus.fields[index].caption) ? {} :
                                        <th key={index}>{data.advStatus.fields[index].caption}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: rows }).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                {Array.from({ length: cols }).map((_, colIndex) => (
                                    <td key={colIndex}>
                                        {data.advStatus.data.rows[rowIndex].values[colIndex].value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="resTimeContainer">
                <p className="responseTimeDelay">Response Delay: <span>{resTime}</span></p>
                <p className="responseTimeCommand">Response Time Command: <span>{resTimeCommand}</span></p>
                <p className="responseTimeEvent">Response Time Event: <span>{resTimeEvent}</span></p>
            </div>
        </div>
    );
});

export default ResponseBody;