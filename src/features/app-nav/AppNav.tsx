import {Drawer} from "antd"
import React, {CSSProperties, FC, PropsWithChildren, ReactNode, useReducer, useRef, useState} from "react"
import css from "./AppNav.module.scss"


export type AppNavProps = PropsWithChildren<{
  aside?: ReactNode
}>

const drawerStyle: CSSProperties = {position: "absolute", height: "100%"}
const contentStyle: CSSProperties = {backgroundColor: "rgb(238, 238, 238)"}

const AppNav: FC<AppNavProps> = ({aside}) => {

  const [isOpen, toggleIsOpen] = useReducer((s: boolean) => !s, false)

  return (
    <nav className={css.nav}>
      <div className={css.container}>
        <button className={css.buttonSwitch} onClick={() => void toggleIsOpen()}/>
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
          placement={"left"}
        >
          {aside}
        </Drawer>
      </section>
    </nav>
  )
}
export default AppNav
