import ExampleBox from "features/exmple-box/ExampleBox"
import React, {FC, PropsWithChildren, useCallback, useEffect, useMemo, useState} from "react"
import GridLayout, {ReactGridLayoutProps, Responsive, WidthProvider} from "react-grid-layout"


const ResponsiveGridLayout = WidthProvider(Responsive)

export type GridProps = PropsWithChildren<{}>

const Grid: FC<GridProps> = ({children}) => {

  const [items, setItems] = useState(initialItems)

  const [layout, setLayout] = useState<GridLayout.Layout[]>([])

  useEffect(() => {
    const layout = items.map(item => ({
      i: item,
      w: 1,
      h: 1,
      x: 1,
      y: 1,
    }))
    setLayout(layout)
  }, [])

  const handleAdd = useCallback(() => {
    setItems(items => [...items, String(+new Date())])
  }, [])

  const handleChange: ReactGridLayoutProps["onLayoutChange"] = useCallback(() => {

  }, [])

  return (
    <div>
      <button onClick={handleAdd}>add</button>
      <GridLayout
        rowHeight={100}
        className={"TEST_CONTAINER"}
        width={600}
        cols={3}
        layout={layout}
        onLayoutChange={setLayout}
      >
        {items.map((item) => (
          <div key={item}>
            <ExampleBox>{item}</ExampleBox>
          </div>
        ))}
      </GridLayout>
      {children}
    </div>
  )
}
export default Grid

const initialItems = [
  "i",
  "wanna",
  "finish",
  "this",
  "project",
]
