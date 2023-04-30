import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Socket from "../../../Store/socket"; 
import { lastTable, updateTable } from "../../../api/OnRecieve";

const ResponseBody = observer(() => {
    // const [rows, setRows] = useState(0);
    // const [cols, setCols] = useState(0);
    // const [data, setData] = useState([]);
    const [resTimeEvent, setResTimeEvent] = useState("");
    const [table, setTable] = useState(lastTable);
    // const [details, setDetails] = useState("undefined");
    // const [nextTime, setNextTime] = useState("undefined");

    useEffect(() => {
        Socket.socket.on("sentBrokerTable", (data) => {
            // setDetails(getDetails(data));
            // console.log(OnRecieve(data));
            // setNextTime(getNextTime(data) - Date.now());
            // Status.setStatus(getType(data));

            // data = ProtoMessageDecoder(data);
            // console.log(data);

            // const status = data.event.status;
            // setData(status);
            // setRows(status.advStatus.data.rows.length);
            // setCols(status.advStatus.fields.length);
            const mytable = updateTable(data);
            setTable(mytable);
            setResTimeEvent(Date.now() - mytable.timestamp + " ms");
        });
    }, [Socket.socket]);

    return (
        <div className="responsePage">
            <div className="information-container">
                <p className="details">Детали последнего обновления: <span>{table.details}</span></p>
                {/* <p className="type">type: <span>{type}</span></p> */}
                <p className="next-time">next time: <span>{table.nextTime}</span></p>
            </div>
            <div className="responsepgContent">
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
            </div>
            <div className="resTimeContainer">
                <p className="responseTimeEvent">Задержка события таблицы: <span>{resTimeEvent}</span></p>
            </div>
        </div>
    );
});

export default ResponseBody;