import React from 'react';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TotalOrdersChart = () => {

  const options = {
    scales: {
      y: {
        ticks: {
          display: false
        },
        border: {
          display: false
        },
        grid: {
          display: false
        }
      },
      x: {
        ticks: {
          display: false
        },
        border: {
          display: false,
        },
        grid: {
          display: false
        }
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: '',
      },
    },
  };

  const data = {
    labels: [ 'January', 'February', 'March', 'April', 'May' ],
    datasets: [
      {
        fill: false,
        label: '',
        data: [ 1, 1, 1, 1, 1, ],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
  };

  return (
    <div className='lineParent'>
      <Line
        options={ options }
        data={ data }
      />
    </div>
  );
};

export default TotalOrdersChart;