import React from 'react';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip, } from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    y: {
      ticks: {
        min: 0,
        max: 50,
        stepSize: 20,
      },
      title: {
        display: true,
        text: 'Total',
        color: 'black',
        font: {
          weight: 'bold',
          size: 14
        }
      }
    },
    x: {
      grid: {
        display: false
      },
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        padding: 20,
        usePointStyle: true,
        pointStyle: 'rect',
        font: {
          weight: 'bold',
          size: 12
        }
      }
    },
  },
};

export const data = {
  labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct' ],
  datasets: [
    {
      label: 'Finish',
      data: [ 15, 0, 34, 0, 0, 49 ],
      backgroundColor: 'rgb(0,157,255)',
    },
    {
      label: 'Cancelled',
      data: [ 0, 10, 0, 0, 0, 9 ],
      backgroundColor: 'rgb(255,0,0)',
    },
  ],
};


const OrdersStatistic = () => {
  return (
    <div className='parent'>
      <Bar data={ data } options={ options }/>
    </div>
  );
};

export default OrdersStatistic;