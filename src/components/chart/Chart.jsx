import React from 'react'
import './Chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart({title, data, dataKey, grid}) {
    
  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#667085" />
            <Line type="monotone"  dataKey={dataKey}  stroke="#7839EE" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>

      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
