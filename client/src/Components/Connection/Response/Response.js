import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Socket from "../../../Store/socket"; 
import Status from "../../../Store/status";
import {OnRecieve, getEventTimeStamp, getType, getNextTime, getDetails} from "../../../api/OnRecieve";
import Graphics from "../../Graphics/Graphics";


import ProtoMessageDecoder from "../../../api/ParseProto";

const ResponseBody = observer(() => {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);
    const [data, setData] = useState([]);
    const [resTimeEvent, setResTimeEvent] = useState("undefined");
    const [details, setDetails] = useState("undefined");
    const [nextTime, setNextTime] = useState("undefined");
    const [showGraph, setShowGraph] = useState(false);
    const [showGraphRes, setShowGraphRes] = useState(true);

    useEffect(() => {
        Socket.socket.on("sentBrokerTable", (data) => {
            setDetails(getDetails(data));
            console.log(OnRecieve(data));
            setNextTime(getNextTime(data) - Date.now() + " ms");
            Status.setStatus(getType(data));

            data = ProtoMessageDecoder(data);
            console.log(data);

            const status = data.event.status;
            setData(status);
            setRows(status.advStatus.data.rows.length);
            setCols(status.advStatus.fields.length);
            setResTimeEvent(Date.now() - data.header.timestamp + " ms");
        });

        
    }, [Socket.socket]);
    
    return (
        <div className="responsePage">
            <div className="information-container">
                <p className="details">Детали последнего обновления: <span>{details}</span></p>
                <p className="next-time">next time: <span>{nextTime}</span></p>
                {!showGraph ?
                <button className="createGrpahics" onClick={() => setShowGraph(!showGraph)}>Создать график</button>
                :
                <button className="closeGraphics" onClick={() => setShowGraph(!showGraph)}>Показать таблицу</button>}
            </div>
            <div className="responsepgContent">
                {!showGraph ?
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
                                        { (!data.advStatus.data.rows[rowIndex].values[colIndex]) ? null :
                                            data.advStatus.data.rows[rowIndex].values[colIndex].value.value
                                        }
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                :
                <Graphics data={data}/>}
            </div>
            <div className="resTimeContainer">
                <p className="responseTimeEvent">Задержка события таблицы: <span>{resTimeEvent}</span></p>
            </div>
            <div className="information-container">
                <p className="details">Детали последнего обновления: <span>{details}</span></p>
                <p className="next-time">next time: <span>{nextTime}</span></p>
                {!showGraphRes ?
                <button className="createGrpahics" onClick={() => setShowGraphRes(!showGraphRes)}>Создать график</button>
                :
                <button className="closeGraphics" onClick={() => setShowGraphRes(!setShowGraphRes)}>Показать таблицу</button>}
            </div>
            <div className="responsepgContent">
                {!showGraphRes ?
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
                                        { (!data.advStatus.data.rows[rowIndex].values[colIndex]) ? null :
                                            data.advStatus.data.rows[rowIndex].values[colIndex].value.value
                                        }
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                :
                <Graphics data={data}/>}
            </div>
            <div className="resTimeContainer">
                <p className="responseTimeEvent">Задержка события таблицы: <span>{resTimeEvent}</span></p>
            </div>
        </div>
    );
});

export default ResponseBody;