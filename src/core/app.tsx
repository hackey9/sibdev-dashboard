import "@syncfusion/ej2-base/styles/material.css"
import "@syncfusion/ej2-react-layouts/styles/material.css"
import {DashboardLayoutComponent, PanelModel} from "@syncfusion/ej2-react-layouts"
import React, {FC, PropsWithChildren, useCallback, useEffect, useRef, useState} from "react"


export type AppProps = PropsWithChildren<{}>

const App: FC<AppProps> = () => {

  const [panels, setPanels] = useState<PanelModel[]>(() => ids.map(id => ({
    id: String(id),
    sizeX: 1,
    sizeY: 1,
  })))

  const handleClick = useCallback(() => {

    const component = ref.current!
    const id = String(+new Date() % 10000)
    const panel: PanelModel = {
      id,
      sizeX: (+id % 2) + 1,
      sizeY: 1,
      content: (() => <Item children={id}/>) as any as string,
    }
    setPanels(panels => [...panels, panel])
    component.addPanel(panel)
  }, [])

  const ref = useRef<DashboardLayoutComponent>(null)

  useEffect(() => {
    console.log({panels})
  }, [panels])

  return (
    <>
      <button onClick={handleClick}>Add new item</button>
      <DashboardLayoutComponent
        panels={panels}
        columns={4}
        className={"DRAG_CONTAINER"}
        ref={ref}
      >
      </DashboardLayoutComponent>
    </>
  )
}
export default App


const ids = [...Array.from({length: 3}).keys()]

const Item: FC = ({children}) => {

  return (
    <div className="DRAG_ITEM">Item #{children}</div>
  )
}
