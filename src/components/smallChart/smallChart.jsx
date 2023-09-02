import React from 'react'
import './smallChart.css';

import { LineChart, Line, ResponsiveContainer } from 'recharts';


function smallChart(data, dataKey, stroke) {
  return (
    <div className='featuredChart' >
      <ResponsiveContainer width="100%" aspect={1 / 1}>
            <LineChart data={data}> 
                <Line type="monotone"  dataKey={dataKey}  stroke={stroke} />
            </LineChart>
          </ResponsiveContainer>
    </div>
  )
}

export default smallChart
