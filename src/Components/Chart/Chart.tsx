import { Line } from 'react-chartjs-2';

const data = {
  labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun'],
  datasets: [
    {
      label: 'Receitas',
      data: [500, 400, 600, 100, 800, 20],
      fill: true,
      backgroundColor: '#0099ff',
      borderColor: '#0099ff',
      borderwidth: 0.5,
      yAxisID: 'cashflow',
    },
    {
      label: 'Despesas',
      data: [550, 620, 100, 600, 1000, 430],
      fill: false,
      backgroundColor: '#274060',
      borderColor: '#274060',
      borderwidth: 0.5,
      yAxisID: 'cashflow',
    },
  ],
};

const options: Chart.ChartOptions = {

    maintainAspectRatio: false,

    elements:{
        line:{
            tension: 0
        }
    },

    legend:{
        display: true,
        position: 'bottom',
        align: 'center',
        labels:{
            usePointStyle: true
        }
    },

  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'cashflow',
      },
    //   {
    //     type: 'linear',
    //     display: true,
    //     position: 'right',
    //     id: 'y-axis-2',
    //     gridLines: {
    //       display: false
    //     },
    //   },
    ],
  },
};

export interface ChartProps {}

export default function Chart () {
  return <div>
{
        <Line 
        type= "line"
        height= {200}
        data= {data}
        options={options}
        
        />}
  </div>
}