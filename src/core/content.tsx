import {Item} from "core/demo"
import AppContent from "features/app-content/AppContent"
import React, {FC, PropsWithChildren} from "react"
import "@syncfusion/ej2-base/styles/material.css"
import "@syncfusion/ej2-react-layouts/styles/material.css"


export type ContentProps = PropsWithChildren<{}>

const Content: FC<ContentProps> = ({children}) => {

  return (
    <AppContent items={persistedItems}/>
  )
}
export default Content


const persistedItems: Item[] = [
  {id: "1613711988693", name: "Foo", position: {size: 1, row: 1, col: 1}, chart: {type: "rectangles"}},
  {id: "1613711989113", name: "Foo", position: {size: 2, row: 1, col: 1}, chart: {type: "circles"}},
  {id: "1613711989327", name: "Baz", position: {size: 1, row: 1, col: 1}, chart: {type: "circles"}},
  {id: "1613711989948", name: "Foo", position: {size: 1, row: 1, col: 1}, chart: {type: "rectangles"}},
  {id: "1613711990390", name: "Baz", position: {size: 3, row: 1, col: 1}, chart: {type: "circles"}},
  {id: "16137123390", name: "Baz", position: {size: 3, row: 1, col: 1}, chart: {type: "circles"}},
  {id: "161371232390", name: "Baz", position: {size: 3, row: 1, col: 1}, chart: {type: "circles"}},
  {id: "16234234390", name: "Baz", position: {size: 2, row: 1, col: 1}, chart: {type: "circles"}},
]
