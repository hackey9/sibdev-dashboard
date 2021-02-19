import {Item} from "core/demo"
import ChartCircles from "features/content-charts/ChartCircles"
import ChartRectangles from "features/content-charts/ChartRectangles"
import React, {FC, PropsWithChildren, useEffect, useState} from "react"
import GridLayout from "react-grid-layout"
import {Area, Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer} from "recharts"
import css from "./AppContent.module.scss"


export type AppContentProps = PropsWithChildren<{
  items: Item[]
  setItems: React.Dispatch<React.SetStateAction<Item[]>>
}>

const AppContent: FC<AppContentProps> = ({items, setItems}) => {

  const [layout, setLayout] = useState<GridLayout.Layout[]>([])

  useEffect(() => {
    setLayout(layout => items.map(item => {
      const x = item.position.col
      const y = item.position.row
      const w = item.position.size
      const h = item.position.size
      const i = item.id
      return {x, y, w, h, i}
    }))
  }, [items])

  const [w, setW] = useState(600)

  return (
    <main className={css.main}>
      <div>
        <GridLayout
          cols={3}
          rowHeight={100}
          width={w}
          layout={layout}
          onLayoutChange={setLayout}
          className={"TEST_CONTAINER"}
        >
          {items.map(item => (
            <div className={"TEST_ITEM"} key={item.id}>
              {chartFactory(item)}
            </div>
          ))}
        </GridLayout>
      </div>
    </main>
  )
}
export default AppContent


function chartFactory(item: Item) {
  if (item.chart.type === "circles") {
    return <ChartCircles id={item.id}/>
  }
  if (item.chart.type === "rectangles") {
    return <ChartRectangles id={item.id}/>
  }
  if (item.chart.type === "composed") {
    const {data, render} = item.chart

    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
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
          {/*<Tooltip/>*/}
          {/*<Legend/>*/}
          {Object.entries(render).map(([key, chart]) => {
            if (chart.type === "bar") {
              return <Bar key={key} dataKey={key} barSize={20} fill={chart.fill}/>
            }
            if (chart.type === "area") {
              return <Area key={key} type="monotone" dataKey={key} fill={chart.fill} stroke={chart.stroke}/>
            }
            if (chart.type === "line") {
              return <Line key={key} type="monotone" dataKey={key} stroke={chart.stroke}/>
            }
          })}
        </ComposedChart>
      </ResponsiveContainer>
    )
  }
  return null
}
