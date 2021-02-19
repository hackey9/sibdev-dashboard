import clsx from "clsx"
import React, {FC, PropsWithChildren, ReactNode} from "react"
import css from "./AppLayout.module.scss"



export type AppLayoutProps = PropsWithChildren<{
  nav?: ReactNode
  main?: ReactNode
}>

const AppLayout: FC<AppLayoutProps> = ({nav, main}) => {

  return (
    <div className={clsx(css.layout)}>
      {nav}
      {main}
    </div>
  )
}
export default AppLayout
