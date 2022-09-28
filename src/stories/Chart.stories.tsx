import { Story, Meta } from '@storybook/react';
import Chart, { ChartProps } from '../Components/Chart/Chart';

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
      fill: true,
      backgroundColor: '#274060',
      borderColor: '#274060',
      borderwidth: 0.5,
      yAxisID: 'cashflow',
    },
  ],
};

export default {
  title: 'Example/Chart',
  component: Chart,
} as Meta;

const Template: Story<ChartProps> = (args) => <Chart {...args} />;

export const Default = Template.bind({})
Default.args = {
  title: 'Média de performace nos ultimos 12 meses',
  data
}

export const WithoutData = Template.bind({})
WithoutData.args = {
  title: 'Média de performace nos ultimos 6 meses',
}