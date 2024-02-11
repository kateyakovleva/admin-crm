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
        min: 0.00,
        max: 200.00,
        stepSize: 40.00,
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
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
      text: '',
    },
  },
};

export const data = {
  labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct' ],
  datasets: [
    {
      label: '',
      data: [ 15.00, 0.00, 120.00, 0.00, 0.00, 49.00 ],
      backgroundColor: 'rgba(116, 106, 236)',
    },
  ],
};

const EarningReportChart = () => {
  return (
    <div className='parent'>
      <Bar
        data={ data }
        options={ options }
      />
    </div>
  );
};

export default EarningReportChart;