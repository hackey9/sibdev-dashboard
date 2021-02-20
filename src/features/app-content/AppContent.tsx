import ChartRenderer from "features/content-charts/ChartRenderer"
import WidgetElement from "features/widget/WidgetElement"
import React, {FC, PropsWithChildren, useEffect, useRef, useState} from "react"
import GridLayout from "react-grid-layout"
import {Item} from "services/fake-widgets"
import useResizeObserver from "use-resize-observer"
import css from "./AppContent.module.scss"


export type AppContentProps = PropsWithChildren<{
  items: Item[]
  setItems: React.Dispatch<React.SetStateAction<Item[]>>
}>

const AppContent: FC<AppContentProps> = ({items, setItems}) => {

  const [layout, setLayout] = useState<GridLayout.Layout[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  useResizeObserver({
    ref: containerRef, onResize: ({width}) => {
      width && setW(width)
    },
  })

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
      <div ref={containerRef}>
        <GridLayout
          cols={3}
          rowHeight={135}
          width={w}
          isResizable
          layout={layout}
          onLayoutChange={setLayout}
          className={css.grid}
          margin={[30, 30]}
        >
          {items.map(item => (
            <div className={"TEST_ITEM"} key={item.id}>
              <WidgetElement title={item.name} key={item.id}>
                <ChartRenderer item={item}/>
              </WidgetElement>
            </div>
          ))}
        </GridLayout>
      </div>
    </main>
  )
}
export default AppContent


const ResizeHandle: FC = () => {

  return (
    <div style={{width: 20, height: 20, backgroundColor: "red"}}/>
  )
}
