import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);

const StackedChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Projections',
        data: [10000000, 25000000, 15000000, 10000000, 25000000, 15000000],
        backgroundColor: 'rgba(168, 197, 218, 1)',
        borderRadius: 10, 
 

      },
      {
        label: 'Actuals',
        data: [15000000, 20000000, 10000000, 15000000, 20000000, 10000000],
        backgroundColor: 'rgb(222, 237, 248)',
        borderRadius: 10, 
       
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        type: 'category',
        grid: {
            display: false,
          },
      },
      y: {
        stacked: true,
        min: 0,
        max: 30000000,
        ticks: {
          callback: (value) => `${value / 1000000}M`,
          stepSize: 10000000,
          padding: 10,
        },
        border: {
            display: false,
          },
       
      },
    },
  };

 

  return (
    <div style={{marginTop:'5px'}}>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default StackedChart;
