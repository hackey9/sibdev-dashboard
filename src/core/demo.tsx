import AppContent, {AppContentProps} from "features/app-content/AppContent"
import AppHeader from "features/app-header/AppHeader"
import AppLayout from "features/app-layout/AppLayout"
import AppMain from "features/app-main/AppMain"
import AppNav from "features/app-nav/AppNav"
import NavButton from "features/app-nav/NavButton"
import React, {FC, useCallback, useEffect, useState} from "react"
import "@syncfusion/ej2-base/styles/material.css"
import "@syncfusion/ej2-react-layouts/styles/material.css"


const Demo: FC = () => {

  const [items, setItems] = useState<Array<Item>>(persistedItems)

  const handleAdd = useCallback(() => {
    const id = String(+new Date())
    const name = ["Foo", "Bar", "Baz"][Math.floor(Math.random() * 3) % 3]
    const size = +id % 3 + 1
    const type = ["circles", "rectangles"][Math.floor(Math.random() * 2) % 2] as Item["type"]

    const item: Item = {id, name, size, type, col: 1, row: 1}
    setItems(items => [...items, item])
  }, [])

  useEffect(() => {
    console.log(items)
  }, [items])

  const handleChangePositions: AppContentProps["onChangePositions"] = useCallback((newItems: { id: string, row: number, col: number }[]) => {
    console.log(newItems)
  }, [])

  return (
    <AppLayout
      nav={
        <AppNav>
          <NavButton onClick={handleAdd}>add</NavButton>
          <NavButton>rm</NavButton>
        </AppNav>
      }
      main={
        <AppMain
          header={<AppHeader/>}
          content={
            <AppContent
              items={items}
              onChangePositions={handleChangePositions}
            />
          }
        />
      }
    />
  )
}
export default Demo


export type Item = {
  id: string
  name: string
  type: "circles" | "rectangles"
  size: number
  row: number
  col: number
}

const persistedItems: Item[] = [
  {id: "1613711988693", name: "Foo", size: 1, row: 1, col: 1, type: "rectangles"},
  {id: "1613711989113", name: "Foo", size: 1, row: 1, col: 1, type: "circles"},
  {id: "1613711989327", name: "Baz", size: 2, row: 1, col: 1, type: "circles"},
  {id: "1613711989948", name: "Foo", size: 2, row: 1, col: 1, type: "circles"},
  {id: "1613711990390", name: "Baz", size: 3, row: 1, col: 1, type: "rectangles"},
]
