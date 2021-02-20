import * as rand from "utils/rand"


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
  // row 0
  {
    id: "123123141",
    name: "Показатель 1",
    position: {size: 1, row: 0, col: 0},
    chart: {
      type: "composed",
      render: {
        bar: {type: "bar", fill: "#5e5e61"},
      },
      data: rand.arrayOfNumbers(10).map(() => ({
        bar: rand.getRandomInt(20, 200),
      })),
    },
  },
  {
    id: "74675474567",
    name: "Две линии",
    position: {size: 1, row: 0, col: 1},
    chart: {
      type: "composed",
      render: {
        red: {type: "line", stroke: "#ff0000"},
        blue: {type: "line", stroke: "#0000ff"},
      },
      data: rand.arrayOfNumbers(10).map(() => ({
        red: rand.getRandomInt(20, 200),
        blue: rand.getRandomInt(20, 200),
      })),
    },
  },
  {
    id: "9879794623423",
    name: "График с заливкой",
    position: {size: 1, row: 0, col: 2},
    chart: {
      type: "composed",
      render: {
        bars: {type: "area", fill: "#d78282", stroke: "#ff4c4c"},
      },
      data: rand.arrayOfNumbers(20).map(() => ({
        bars: rand.getRandomInt(1000, 5000),
      })),
    },
  },
  // row 1-2
  {
    id: "76394586735",
    name: "Средний график",
    position: {size: 2, row: 1, col: 0},
    chart: {
      type: "composed",
      render: {
        foo: {type: "area", fill: "#8e99fa", stroke: "#0e19ff"},
        bar: {type: "line", stroke: "#f50d0d"},
      },
      data: rand.arrayOfNumbers(15).map(() => ({
        foo: rand.getRandomInt(100, 500),
        bar: rand.getRandomInt(200, 400),
      })),
    },
  },
  {
    id: "85475694",
    name: "Маленький график",
    position: {size: 1, row: 1, col: 2},
    chart: {
      type: "composed",
      render: {
        foo: {type: "bar", fill: "#1299ff"},
      },
      data: rand.arrayOfNumbers(15).map(() => ({
        foo: rand.getRandomInt(100, 500),
      })),
    },
  },
  {
    id: "54646987",
    name: "Маленький график",
    position: {size: 1, row: 2, col: 2},
    chart: {
      type: "composed",
      render: {
        foo: {type: "area", fill: "#ffdc8a", stroke: "#ffbc12"},
      },
      data: rand.arrayOfNumbers(15).map(() => ({
        foo: rand.getRandomInt(100, 500),
      })),
    },
  },
  // row 3-5
  {
    id: "094803",
    name: "Графики можно комбинировать",
    position: {size: 3, row: 3, col: 0},
    chart: {
      type: "composed",
      render: {
        baz: {type: "bar", fill: "#d2d2d2"},
        foo: {type: "line", stroke: "#00d55f"},
        bar: {type: "line", stroke: "#e708b9"},
      },
      data: rand.arrayOfNumbers(15).map(() => ({
        foo: rand.getRandomInt(100, 500),
        bar: rand.getRandomInt(200, 400),
        baz: rand.getRandomInt(150, 600),
      })),
    },
  },
  // row 6-7
  {
    id: "123123",
    name: "Маленький график",
    position: {size: 1, row: 6, col: 0},
    chart: {
      type: "composed",
      render: {
        foo: {type: "bar", fill: "#1299ff"},
      },
      data: rand.arrayOfNumbers(15).map(() => ({
        foo: rand.getRandomInt(100, 500),
      })),
    },
  },
  {
    id: "234234",
    name: "Маленький график",
    position: {size: 1, row: 7, col: 0},
    chart: {
      type: "composed",
      render: {
        foo: {type: "area", fill: "#ffdc8a", stroke: "#ffbc12"},
      },
      data: rand.arrayOfNumbers(15).map(() => ({
        foo: rand.getRandomInt(100, 500),
      })),
    },
  },
  {
    id: "345345",
    name: "Средний график",
    position: {size: 2, row: 6, col: 1},
    chart: {
      type: "composed",
      render: {
        foo: {type: "area", fill: "#8e99fa", stroke: "#0e19ff"},
        bar: {type: "line", stroke: "#f50d0d"},
      },
      data: rand.arrayOfNumbers(15).map(() => ({
        foo: rand.getRandomInt(100, 500),
        bar: rand.getRandomInt(200, 400),
      })),
    },
  },
]
