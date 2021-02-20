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

export type Chart =
  | CirclesExample
  | RectanglesExample
  | ComposedChartData

export type ChartType =
  | "circles"
  | "rectangles"
  | "composed"

export type CirclesExample = {
  type: "circles"
}

export type RectanglesExample = {
  type: "rectangles"
}

export type ComposedChartData = {
  type: "composed"
  //data: Record<string, number>[]
  data: { [key: string]: number }[]
  render: Record<string, ComposedChartType & { type: string }>
}

export type ComposedChartType =
  | { type: "bar", fill: HexColorString }
  | { type: "area", fill: HexColorString, stroke: HexColorString }
  | { type: "line", stroke: HexColorString }

export type HexColorString = string

export const fakeInitialItems: Item[] = [
  {
    id: "123123141",
    name: "Столбцовый график",
    position: {size: 3, row: 1, col: 1},
    chart: {
      type: "composed",
      render: {
        bar: {type: "bar", fill: "#5e5e61"},
      },
      data: [
        {bar: 108},
        {bar: 114},
        {bar: 84},
        {bar: 92},
        {bar: 124},
        {bar: 120},
        {bar: 146},
      ],
    },
  },
  {
    id: "74675474567",
    name: "Две линии",
    position: {size: 2, row: 1, col: 1},
    chart: {
      type: "composed",
      render: {
        red: {type: "line", stroke: "#ff0000"},
        blue: {type: "line", stroke: "#0000ff"},
      },
      data: [
        {red: 108, blue: 92},
        {red: 114, blue: 64},
        {red: 84, blue: 48},
        {red: 92, blue: 100},
        {red: 124, blue: 44},
        {red: 120, blue: 180},
        {red: 146, blue: 194},
      ],
    },
  },
]
