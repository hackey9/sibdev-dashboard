import React, {FC, PropsWithChildren} from "react"
import css from "./AppNav.module.scss"


export type AppNavProps = PropsWithChildren<{}>

const AppNav: FC<AppNavProps> = ({children}) => {

  return (
    <nav className={css.nav}>
      {children}
    </nav>
  )
}
export default AppNav
