import React, {FC, PropsWithChildren} from "react"
import css from "./AsideBar.module.scss"


export type AsideBarProps = PropsWithChildren<{}>

const AsideBar: FC<AsideBarProps> = ({children}) => {

  return (
    <div>
      {children}
    </div>
  )
}
export default AsideBar
