import React from 'react';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
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
  Filler,
  Legend
);

export const options = {
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
        display: true
      },
      grid: {
        display: false,
      }
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
      text: '',
    },
  },
};

export const data = {
  labels: [ 'January', 'February', 'March', 'April', 'May', 'June' ],
  datasets: [
    {
      fill: true,
      label: '',
      data: [ 1, 1, 1, 2, 1.5, 1 ],
      borderColor: 'rgb(56, 198, 117)',
      backgroundColor: 'rgba(56, 198, 117, 0.5)',
    },
  ],
};

const AdminEarningChart = () => {
  return (
    <div className=''>
      <Line
        data={ data }
        options={ options }
      />
    </div>
  );
};

export default AdminEarningChart;