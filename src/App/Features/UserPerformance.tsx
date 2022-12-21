import { useEffect } from "@storybook/addons"
import { useState } from "react"
import Skeleton from "react-loading-skeleton"
import withBoundary from "../../Core/hoc/withBoundary"
import transformEditorMonthlyEarningsInfoChartJs from "../../Core/Utils/transformEditorMonthlyEarningsInfoChartJs"
import MetricService from "../../SDK/services/Metric.service"
import Chart, { ChartProps } from "../Components/Chart/Chart"

 function UserPerformance() {
  
  const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>()

  const [error, setError] = useState<Error>()

  useEffect(()=> {
    MetricService
    .getEditorMonthlyEarnings()
    .then(transformEditorMonthlyEarningsInfoChartJs)
    .then(setEditorEarnings)
    .catch(error => {
      setError(new Error(error.message))
    })
  }, [])

  if(error)
    throw error

  if(!editorEarnings)
  return <div>
    <Skeleton height={227} />
  </div>

  return <Chart
    title="Média de performance nos últimos 12 meses"
    data={editorEarnings}
  />
}

export default withBoundary(UserPerformance, 'User Performance')