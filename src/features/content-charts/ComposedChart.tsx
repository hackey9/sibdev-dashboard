import React, {FC, PropsWithChildren} from "react"
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart as ReChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {ComposedChartData} from "services/fake-widgets"


export type ComposedChartProps = PropsWithChildren<{
  chart: ComposedChartData
}>

const ComposedChart: FC<ComposedChartProps> = ({chart}) => {

  const {data, render} = chart

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#aaaaaa"/>
        {/*<XAxis dataKey="name" label={{value: "Pages", position: "insideBottomRight", offset: 0}} scale="band"/>*/}
        {/*<YAxis label={{value: "Index", angle: -90, position: "insideLeft"}}/>*/}
        {/*<Legend/>*/}
        <XAxis/>
        <YAxis/>
        <Tooltip/>
        {Object.entries(render).map(([key, chart]) => {
          if (chart.type === "bar") {
            return <Bar key={key} dataKey={key} fill={chart.fill}/>
          }
          if (chart.type === "area") {
            return <Area key={key} type="monotone" dataKey={key} fill={chart.fill} stroke={chart.stroke}/>
          }
          if (chart.type === "line") {
            return <Line key={key} type="monotone" dataKey={key} stroke={chart.stroke}/>
          }
        })}
      </ReChart>
    </ResponsiveContainer>
  )
}
export default ComposedChart
