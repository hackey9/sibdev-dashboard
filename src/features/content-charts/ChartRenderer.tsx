import ComposedChart from "features/content-charts/ComposedChart"
import React, {FC, PropsWithChildren} from "react"
import {Item} from "services/fake-widgets"


export type ChartRendererProps = PropsWithChildren<{
  item: Item
}>

const ChartRenderer: FC<ChartRendererProps> = ({item}) => {

  return (
    <>
      {item.chart.type === "composed" && (
        <ComposedChart key={"chart"} chart={item.chart}/>
      )}
    </>
  )
}
export default ChartRenderer
