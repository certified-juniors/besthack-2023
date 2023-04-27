import React, { useEffect, useState } from "react";

const ResponseBody = ({ socket }) => {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        socket.on("sentBrokerTable", (data) => {
            console.log(data);
            setData(data);
            setRows(data.advStatus.data.rows.length);
            setCols(data.advStatus.fields.length);
        });
    }, [socket]);

    return (
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
    );
};

export default ResponseBody;