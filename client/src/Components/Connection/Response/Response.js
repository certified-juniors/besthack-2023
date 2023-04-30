import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Socket from "../../../Store/socket";
import StatusForEvent from "../../../Store/status";
import { lastTable, updateTable } from "../../../api/OnRecieve";
import Graphics from "../../Graphics/Graphics";


const ResponseBody = observer(() => {
    const [resTimeEvent, setResTimeEvent] = useState("undefined");
    const [table, setTable] = useState(lastTable);
    const [showGraph, setShowGraph] = useState(false);
    const [showNextTime, setShowNextTime] = useState("");
    const [option, setOption] = useState("choose option");
    const [bytes, setBytes] = useState(0);
    let index = [];

    useEffect(() => {
        Socket.socket.on("sentBrokerTable", (data) => {
            if (!Socket.pause) {
                setBytes(data.byteLength)
                const mytable = updateTable(data);
                setTable(mytable);
                setResTimeEvent(Date.now() - mytable.timestamp + " ms");
                console.log(showNextTime)
                if (!isNaN(mytable.nextTime)) {
                    setShowNextTime(mytable.nextTime - Date.now());
                }
                StatusForEvent.setStatusForEvent(mytable.statusType);
            }
        });

    }, []);

    function getNumberIndex(field, i) {
        if (table.types[i] === 1 || table.types[i] === 2) {
            index.push(i);
            return true;
        }
        else return false;
    }

    return (
        <div className="responsePage">

            <div className="information-container">
                <p className="details">Детали последнего обновления: <span>{table.details}</span></p>
                <p className="next-time">next time: <span>{showNextTime} ms</span></p>
                <div className="graph">
                    <select className="select" onChange={(e) => setOption(e.target.value)}>
                        <option key="default" value="choose option" selected="true" disabled="disabled">Выберите опцию</option>
                        {table.fields.filter((field, i) => (getNumberIndex(field, i))).map((field,i) => (
                            <option value={index[i]} key={index[i]}>{field}</option>
                        ))}
                    </select>
                    {!showGraph ?
                        <button className="createGraphics" disabled={option === "choose option" ? true : false} onClick={() => (setShowGraph(!showGraph))}>Создать график</button>
                        :
                        <button className="closeGraphics" onClick={() => (setShowGraph(!showGraph))}>Показать таблицу</button>}
                </div>
            </div>
            {console.log(table)}
            {console.log(option)}
            {console.log(table.columns[option])}
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
            <div>
                <div className="resTimeContainer">
                    <p className="responseTimeEvent">Задержка события таблицы: <span>{resTimeEvent}</span> </p>
                    <p>Получено: <span>{bytes} байт</span></p>
                    <button className="pause-button" onClick={() => Socket.pause = !Socket.pause}>{Socket.pause ? "Продолжить" : "Пауза"}</button>
                </div>
            </div>
        </div>
    );
});

export default ResponseBody;