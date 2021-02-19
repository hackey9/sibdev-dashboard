import React, {FC, useCallback} from "react"
import css from "./charts.module.scss"


export type P = {
  id: string
  onClick?: (id: string) => void
}

const ChartCircles: FC<P> = ({id, onClick}) => {

  const handleClick = useCallback(() => {
    onClick?.(id)
  }, [])

  return (
    <div className={css.circles} onClick={handleClick}>
      <span/>
      <span/>
      <span/>
    </div>
  )
}
export default ChartCircles
