import React, {FC, PropsWithChildren} from "react"


export type ChartRendererProps = PropsWithChildren<{
  chart: ChartData,
  position: Position
}>

const ChartRenderer: FC<ChartRendererProps> = ({children}) => {

  return (
    <div>

      {children}
    </div>
  )
}
export default ChartRenderer


export type ChartData = {

}

export type Position = {

}
