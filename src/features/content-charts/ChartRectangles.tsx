import React, {FC, useCallback} from "react"
import css from "./charts.module.scss"


export type P = {
  id: string
  onClick?: (id: string) => void
}

const ChartRectangles: FC<P> = ({id, onClick}) => {

  const handleClick = useCallback(() => {
    onClick?.(id)
  }, [])

  return (
    <div className={css.rectangles} onClick={handleClick}>
      <span/>
      <span/>
      <span/>
    </div>
  )
}
export default ChartRectangles
