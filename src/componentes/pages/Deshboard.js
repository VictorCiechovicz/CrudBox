import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const Deshboard = () => {
  const [options, setOptions] = useState({
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  })
  const [series, setSeries] = useState([
    {
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
  ])

  return (
    <div className="container w-75 mx-auto shadow p-5 m-5 ">
      <div
        className="container"
        style={{ display: 'flex', margin: 10, justifyContent: 'space-around' }}
      >
        <h2>Produtos mais caros</h2>
        <h2>Produtos com mais estoque</h2>
      </div>
      <div
        style={{ display: 'flex', margin: 10, justifyContent: 'space-around' }}
      >
        <Chart
          options={options}
          series={series}
          type="bar"
          width={375}
          height={320}
        />
        <Chart
          options={options}
          series={series}
          type="bar"
          width={375}
          height={320}
        />
      </div>
    </div>
  )
}

export default Deshboard
