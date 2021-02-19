import "@syncfusion/ej2-base/styles/material.css"
import "@syncfusion/ej2-react-layouts/styles/material.css"
import AppContent, {AppContentProps} from "features/app-content/AppContent"
import AppHeader from "features/app-header/AppHeader"
import AppLayout from "features/app-layout/AppLayout"
import AppMain from "features/app-main/AppMain"
import AppNav from "features/app-nav/AppNav"
import NavButton from "features/app-nav/NavButton"
import React, {FC, useCallback, useEffect, useState} from "react"
import * as rand from "utils/rand"


const Demo: FC = () => {

  const [items, setItems] = useState<Array<Item>>(persistedItems)

  useEffect(() => {
    console.log("items are updated",items)
  }, [items])

  const handleAddRectangles = useCallback(() => {
    const item: Item = {
      id: rand.generateId(),
      name: "Название этого виджета",
      position: {size: 1, row: 0, col: 0},
      chart: {type: "rectangles"},
    }
    setItems(items => [...items, item])
  }, [])

  const handleAddCircles = useCallback(() => {
    setItems(items => [...items, {
      id: rand.generateId(),
      name: "Название этого виджета",
      position: {size: rand.getAnyOf(1, 2, 3), row: 0, col: 0},
      chart: {type: "circles"},
    }])
  }, [])

  const handleAddChart = useCallback(() => {
    setItems(items => [...items, {
      id: rand.generateId(),
      position: {size: rand.getAnyOf(1, 2, 3), row: 0, col: 0},
      name: "Какойта сложный график",
      chart: {
        type: "composed",
        render: {
          bars: {type: "bar", fill: "#413ea0"},
          areas: {type: "area", fill: "#8884d8", stroke: "#8884d8"},
          lines: {type: "line", stroke: "#ff7300"},
        },
        data: [
          {bars: 12, areas: 11, lines: 10},
          {bars: 4, areas: 6, lines: 8},
          {bars: 9, areas: 8, lines: 2},
          {bars: 15, areas: 11, lines: 4},
        ],
      },
    }])
  }, [])

  const handleChangePositions: AppContentProps["onChangePositions"] = useCallback((newItems: { id: string, row: number, col: number }[]) => {
    // i should persist this
    console.log("item positions updated: u should persist them", newItems)
  }, [])

  return (
    <AppLayout
      nav={
        <AppNav>
          <NavButton onClick={handleAddRectangles}>add</NavButton>
          <NavButton onClick={handleAddCircles}>circles</NavButton>
          <NavButton onClick={handleAddChart}>chart</NavButton>
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
  chart: Chart & { type: ChartType }
  position: {
    size: number
    row: number
    col: number
  }
}

export type ChartType =
  | "circles"
  | "rectangles"
  | "composed"

export type Chart =
  | CirclesExample
  | RectanglesExample
  | ComposedChart

export type CirclesExample = {
  type: "circles"
}
export type RectanglesExample = {
  type: "rectangles"
}

export type ComposedChart = {
  type: "composed"
  data: Record<string, number>[]
  render: Record<string, ComposedChartType & { type: string }>
}

export type ComposedChartType =
  | { type: "bar", fill: HexColorString }
  | { type: "area", fill: HexColorString, stroke: HexColorString }
  | { type: "line", stroke: HexColorString }

export type HexColorString = string

export const persistedItems: Item[] = [
  {id: "1613711988693", name: "Foo", position: {size: 1, row: 1, col: 1}, chart: {type: "rectangles"}},
  {id: "1613711989113", name: "Foo", position: {size: 2, row: 1, col: 1}, chart: {type: "circles"}},
  {id: "1613711989327", name: "Baz", position: {size: 1, row: 1, col: 1}, chart: {type: "circles"}},
  {id: "1613711989948", name: "Foo", position: {size: 1, row: 1, col: 1}, chart: {type: "rectangles"}},
  {id: "1613711990390", name: "Baz", position: {size: 3, row: 1, col: 1}, chart: {type: "circles"}},
]
