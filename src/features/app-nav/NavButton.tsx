import React, {FC, PropsWithChildren} from "react"
import css from "./NavButton.module.scss"


export type NavButtonProps = PropsWithChildren<{
  onClick?: () => void
}>

const NavButton: FC<NavButtonProps> = ({children, onClick}) => {

  return (
    <div className={css.button} onClick={onClick}>
      {children}
    </div>
  )
}
export default NavButton
