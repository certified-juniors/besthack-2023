import React from "react";
import { LineChart, Line, XAxis, YAxis} from 'recharts';

const Graphics = (colValues) => {
    const data = colValues.data.map((val, i) => {
        return { name: i, uv: val }
    });
const renderLineChart = (
  <LineChart width={800} height={500} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <XAxis dataKey="name" />
    <YAxis domain={[0,Math.round(Math.max(colValues.data))+1]} />
  </LineChart>
);
    return (
        <div>
            ${renderLineChart}
        </div>
    )
}

export default Graphics;