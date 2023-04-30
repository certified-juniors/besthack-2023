import React from "react";
import { LineChart, Line, XAxis, YAxis} from 'recharts';

const Graphics = (props) => {
    const data = [
        {name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
        {name: 'Page B', uv: 200, pv: 2400, amt: 2400},
        {name: 'Page C', uv: 100, pv: 2400, amt: 2400},
        {name: 'Page D', uv: 300, pv: 2400, amt: 2400},
        {name: 'Page E', uv: 500, pv: 2400, amt: 2400},
        {name: 'Page F', uv: 800, pv: 2400, amt: 2400},
        {name: 'Page G', uv: 600, pv: 2400, amt: 2400},
    ];
const renderLineChart = (
  <LineChart width={800} height={320} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);
    return (
        <div>
            ${renderLineChart}
        </div>
    )
}

export default Graphics;