import {Drawer} from "antd"
import clsx from "clsx"
import useChangeTheme from "features/app-theme-provider/use-change-theme"
import useTheme from "features/app-theme-provider/use-theme"
import React, {CSSProperties, FC, PropsWithChildren, ReactNode, useReducer, useRef, useState} from "react"
import css from "./AppNav.module.scss"


export type AppNavProps = PropsWithChildren<{
  aside?: ReactNode
}>

const drawerStyle: CSSProperties = {position: "absolute", height: "100%"}

const AppNav: FC<AppNavProps> = ({aside}) => {

  const isLight = useTheme()

  const contentStyle: CSSProperties = {backgroundColor: isLight ? "rgb(238, 238, 238)" : "#444"}
  const [isOpen, toggleIsOpen] = useReducer((s: boolean) => !s, false)
  const {toggle: toggleTheme} = useChangeTheme()

  return (
    <nav className={css.nav}>
      <div className={css.container}>
        <button className={css.buttonSwitch} onClick={() => void toggleIsOpen()}/>
        <button className={css.buttonTheme} onClick={toggleTheme}/>
      </div>
      <section className={css.navAside}>
        <Drawer
          visible={isOpen}
          closable={false}
          getContainer={false}
          width={300}
          mask={false}
          height={"100%"}
          style={drawerStyle}
          drawerStyle={contentStyle}
          className={clsx(css.drawer, {[css.dark]: !isLight})}
          placement={"left"}
        >
          {aside}
        </Drawer>
      </section>
    </nav>
  )
}
export default AppNav
