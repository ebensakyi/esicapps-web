// components/BarChart.tsx

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
}

export const BarChart = ({ data }: any) => {    
  return <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Inspections by District' } } }} />;
};
