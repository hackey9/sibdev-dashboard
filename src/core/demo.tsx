import AppContent from "features/app-content/AppContent"
import AppLayout from "features/app-layout/AppLayout"
import AppNav from "features/app-nav/AppNav"
import NavButton from "features/app-nav/NavButton"
import React, {FC, useCallback, useEffect, useState} from "react"
import {Item, fakeInitialItems} from "services/fake-widgets"
import * as rand from "utils/rand"
import "./demo.scss"


const Demo: FC = () => {

  const [items, setItems] = useState<Item[]>(fakeInitialItems)

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
            <AppContent
              items={items}
              setItems={setItems}
            />
      }
    />
  )
}
export default Demo


