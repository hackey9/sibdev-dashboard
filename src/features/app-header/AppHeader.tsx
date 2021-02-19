import React, {FC, PropsWithChildren} from "react"
import css from "./AppHeader.module.scss"



export type AppHeaderProps = PropsWithChildren<{}>

const AppHeader: FC<AppHeaderProps> = () => {

  return (
    <header className={css.header}>
      Dashboard
    </header>
  )
}
export default AppHeader
