import React from 'react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register( ArcElement, Tooltip, Legend );

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right' as const,
      labels: {
        padding: 20,
        usePointStyle: true,
        pointStyle: 'circle',
        font: {
          weight: 'bold',
          size: 12
        }
      }
    },
  }
};

export const data = {
  labels: [ 'Cancelled Orders', 'Completed Orders', 'On Going Orders' ],
  datasets: [
    {
      label: '',
      data: [ 8, 57, 1 ],
      backgroundColor: [
        '#e75656',
        '#28c76f',
        '#e7a612',
      ],
      borderColor: [
        '#e75656',
        '#28c76f',
        '#e7a612',
      ],
      borderWidth: 1,
    },
  ],
};

const TotalOrdersCircleChart = () => {
  return (
    <div className='parent'>
      <Doughnut data={ data } options={ options }/>
    </div>
  );
};

export default TotalOrdersCircleChart;