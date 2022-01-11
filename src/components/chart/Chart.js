import React from 'react'

import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import './chart.css'

const Chart = ({ title, data, dataKey, grid }) => {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      {/* aspect chieu rong y le 4/1 vs chieu cao */}
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}
        >
          <XAxis
            dataKey="name"
            stroke='#555'
          />
          <Line type="monotone" dataKey={dataKey} stroke='#5550bd' />
          {/* hover tung diem */}
          <Tooltip />
          {/* Xay dung cac cot */}
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
