import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Socket from "../../../Store/socket"; 
import { lastTable, updateTable } from "../../../api/OnRecieve";
import Graphics from "../../Graphics/Graphics";


const ResponseBody = observer(() => {
    const [resTimeEvent, setResTimeEvent] = useState("undefined");
    const [table, setTable] = useState(lastTable);
    const [showGraph, setShowGraph] = useState(false);
    const [showGraphRes, setShowGraphRes] = useState(true);

    useEffect(() => {
        Socket.socket.on("sentBrokerTable", (data) => {
            const mytable = updateTable(data);
            setTable(mytable);
            setResTimeEvent(Date.now() - mytable.timestamp + " ms");
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
                <Graphics data={data}/>}
            </div>
            <div className="resTimeContainer">
                <p className="responseTimeEvent">Задержка события таблицы: <span>{resTimeEvent}</span></p>
            </div>
        </div>
    );
});

export default ResponseBody;