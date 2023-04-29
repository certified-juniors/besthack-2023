import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Socket from "../../../Store/socket"; 

import { ProtoMessageDecoder } from "../../../api/ParseProto";

const ResponseBody = observer(() => {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);
    const [data, setData] = useState([]);
    const [resTimeEvent, setResTimeEvent] = useState("");

    useEffect(() => {
        Socket.socket.on("sentBrokerTable", (data) => {
            data = ProtoMessageDecoder(data);
            const status = data.event.status;
            console.log(data);
            setData(status);
            setRows(status.advStatus.data.rows.length);
            setCols(status.advStatus.fields.length);

            setResTimeEvent(Date.now() - data.header.timestamp + " ms");
        });
    }, [Socket.socket]);

    return (
        <div className="responsePage">
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
                                        {data.advStatus.data.rows[rowIndex].values[colIndex].value.DataFieldValue}
                                    </td>
                                ))}
                            </tr>
                        ))}
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