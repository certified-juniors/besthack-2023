import React from "react";
import { LineChart, Line, XAxis, YAxis} from 'recharts';

const Graphics = (colValues) => {
    // const data = [
    //     {name: 2400, uv: 400}, 
    //     {name: 200, uv: 200},
    //     {name: 800, uv: 100},
    //     {name: 900, uv: 300},
    //     {name: 600, uv: 500},
    //     {name: 100, uv: 800},
    //     {name: 300, uv: 600},
    // ];
    console.log(colValues);
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