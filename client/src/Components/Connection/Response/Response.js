import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Socket from "../../../Store/socket";
import Status from "../../../Store/status";
import { lastTable, updateTable, onRecieve } from "../../../api/OnRecieve";
import Graphics from "../../Graphics/Graphics";


const ResponseBody = observer(() => {
    const [resTimeEvent, setResTimeEvent] = useState("undefined");
    const [table, setTable] = useState(lastTable);
    const [showGraph, setShowGraph] = useState(false);
    const [showGraphRes, setShowGraphRes] = useState(true);
    const [showNextTime, setShowNextTime] = useState("");
    const [option, setOption] = useState("");

    useEffect(() => {
        Socket.socket.on("sentBrokerTable", (data) => {
            const mytable = updateTable(data);
            setTable(mytable);
            setResTimeEvent(Date.now() - mytable.timestamp + " ms");
            setShowNextTime(mytable.nextTime - Date.now() + " ms");
            console.log(mytable.nextTime);
            Status.setStatus(mytable.statusType);
        });

    }, [Socket.socket]);

    return (
        <div className="responsePage">

            <div className="information-container">
                <p className="details">Детали последнего обновления: <span>{table.details}</span></p>
                <p className="next-time">next time: <span>{showNextTime}</span></p>
                <div className="graph">
                    <select className="select" onChange={(e) => setOption(e.target.value)}>
                        <option defaultValue="">Выберите занчение</option>
                        {table.fields.filter((field, i) => (table.types[i] === 1 || table.types[i] === 2)).map((field, i) => (
                            <option value={i} key={i}>{field}</option>
                        ))}
                    </select>
                    {!showGraph ?
                        <button className="createGraphics" onClick={() => (setShowGraph(!showGraph))}>Создать график</button>
                        :
                        <button className="closeGraphics" onClick={() => (setShowGraph(!showGraph))}>Показать таблицу</button>}
                </div>
            </div>
            <div className="responsepgContent">
                {!showGraph ?
                    <table>
                        <thead>
                            <tr>
                                {Array.from({ length: table.columns.length }).map((_, index) =>
                                    (!table.fields[index]) ? {} :
                                        <th key={index}>{table.fields[index]}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: table.rowIdents.length }).map((_, index) =>
                                <tr key={index}>
                                    {Array.from({ length: table.columns.length }).map((_, index2) =>
                                        <td>{table.columns[index2][index] ? table.columns[index2][index] : ""}</td>
                                    )}
                                </tr>
                            )}
                        </tbody>
                    </table>
                    :
                    <Graphics data={table.columns[option]} />}
            </div>
            <div className="resTimeContainer">
                <p className="responseTimeEvent">Задержка события таблицы: <span>{resTimeEvent}</span></p>
            </div>
        </div>
    );
});

export default ResponseBody;