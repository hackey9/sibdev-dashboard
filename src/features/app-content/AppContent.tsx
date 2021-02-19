import {DashboardLayoutComponent, PanelModel} from "@syncfusion/ej2-react-layouts"
import {Item} from "core/demo"
import ChartCircles from "features/content-charts/ChartCircles"
import ChartRectangles from "features/content-charts/ChartRectangles"
import React, {FC, PropsWithChildren, RefObject, useCallback, useEffect, useRef, useState} from "react"
import css from "./AppContent.module.scss"


export type AppContentProps = PropsWithChildren<{
  items: Array<Item>
  onChangePositions?: (newItems: Array<{ id: string, row: number, col: number }>) => void
}>

const AppContent: FC<AppContentProps> = ({items, onChangePositions}) => {

  const ref = useRef<DashboardLayoutComponent>(null)
  const panels = usePanels(items, ref)

  const handleChange = useCallback(() => {
    const component = ref.current!
    const persist = JSON.parse(component.getPersistData()) as PanelModel[]

    onChangePositions?.(persist as Array<{ id: string, row: number, col: number }>)
  }, [])

  return (
    <main className={css.main}>
      <div>
        <DashboardLayoutComponent
          enablePersistence
          columns={3}
          ref={ref}
          panels={panels}
          cellAspectRatio={4}
          cellSpacing={[20, 20]}
          change={handleChange}
        />
      </div>
    </main>
  )
}
export default AppContent


function usePanels(
  items: Array<Item>,
  ref: RefObject<DashboardLayoutComponent>,
  onChange?: (newPanelModels: PanelModel[]) => void,
): PanelModel[] {

  const [panels, setPanels] = useState<PanelModel[]>([])

  const handleClick = useCallback((id: string) => {
    console.log(`i was clicked! ${id}`)
  }, [])

  useEffect(() => {
    const component = ref.current!

    for (let item of items) {
      let panel = panels.find(panel => panel.id === item.id)

      if (!panel) {
        panel = {
          id: item.id,
          sizeX: item.size,
          sizeY: item.size,
          content: (() => chartFactory(item, handleClick)) as any,
        }
        setPanels(panels => [...panels, panel!])
        component.addPanel(panel)
      }
    }

    const s: PanelModel[] = items.map(item => ({
      id: item.id,
      sizeX: item.size,
      sizeY: item.size,
      col: item.col,
      row: item.row,
      content: (() => chartFactory(item, handleClick)) as any,
    }))

    setPanels(s)

  }, [items])

  return panels
}


function chartFactory(item: Item, clickHandler: (id: string) => void) {
  if (item.type === "circles") {
    return <ChartCircles id={item.id} onClick={clickHandler}/>
  }
  return <ChartRectangles id={item.id} onClick={clickHandler}/>
}
