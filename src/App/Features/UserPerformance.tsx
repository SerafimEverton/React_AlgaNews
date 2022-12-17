import { useEffect } from "@storybook/addons"
import { useState } from "react"
import transformEditorMonthlyEarningsInfoChartJs from "../../Core/Utils/transformEditorMonthlyEarningsInfoChartJs"
import MetricService from "../../SDK/services/Metric.service"
import Chart, { ChartProps } from "../Components/Chart/Chart"

const FAKE_DATA = {
  labels: ['Batata', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  datasets: [
    {
      label: 'Receitas',
      data: [500, 400, 600, 100, 800, 20, 123, 320, 120, 500, 434, 322],
      
      yAxisID: 'cashflow',
    },
    {
      label: 'Despesas',
      data: [100, 200, 250, 500, 1000, 600, 123, 210, 344, 800, 123, 0],
      
      yAxisID: 'cashflow',
    },
  ]
}

export default function UserPerformance() {

  const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>()

  useEffect(()=> {
    MetricService
    .getEditorMonthlyEarnings()
    .then(transformEditorMonthlyEarningsInfoChartJs)
    .then(setEditorEarnings)
  }, [])

  if(!editorEarnings)
  return null

  return <Chart
    title="Média de performance nos últimos 12 meses"
    data={editorEarnings}
  />
}