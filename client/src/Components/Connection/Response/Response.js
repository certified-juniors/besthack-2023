import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Socket from "../../../Store/socket"; 
import TimeStamp from "../../../Store/timeStamp";
import {OnRecieve, getEventTimeStamp} from "../../../api/OnRecieve";

const ResponseBody = observer(() => {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);
    const [data, setData] = useState([]);
    const [resTime, setResTime] = useState("");
    const [resTimeCommand, setResTimeCommand] = useState("");
    const [resTimeEvent, setResTimeEvent] = useState("");

    useEffect(() => {
        Socket.socket.on("sentBrokerTable", (data) => {
            console.log(OnRecieve(data));
            console.log(getEventTimeStamp(data));
            const status = data.event.status;
            setData(status);
            setRows(status.advStatus.data.rows.length);
            setCols(status.advStatus.fields.length);
        });
        Socket.socket.on("brokerCommandResponse", (data) => {
            setResTime(Date.now() - getEventTimeStamp(data) + " ms");
            setResTimeCommand(TimeStamp.setResTimeCommand(Date.now()) + " ms");
            setResTimeEvent(Date.now() - getEventTimeStamp(data) + " ms");
        });
    }, [Socket.socket]);

    return (
        <div className="responsePage">
            <div className="information-container">
                <p className="details">details: </p>
                <p className="type">type: </p>
                <p className="next-time">next time: </p>
            </div>
            <div className="responsepgContent">
                <table>
                    <thead>
                        <tr>
                            {Array.from({ length: cols }).map((_, index) =>
                                    (!data.advStatus.fields[index].caption) ? {} :
                                        <th key={index}>{data.advStatus.fields[index].caption}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: rows }).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                {Array.from({ length: cols }).map((_, colIndex) => (
                                    <td key={colIndex}>
                                        {data.advStatus.data.rows[rowIndex].values[colIndex].value.value}
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