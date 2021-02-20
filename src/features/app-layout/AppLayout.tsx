import {Layout} from "antd"
import clsx from "clsx"
import React, {CSSProperties, FC, PropsWithChildren, ReactNode} from "react"
import css from "./AppLayout.module.scss"



export type AppLayoutProps = PropsWithChildren<{
  nav?: ReactNode
  main?: ReactNode
  header?: ReactNode
}>

const layoutStyle: CSSProperties = {minHeight: "100%"}
const asideStyle: CSSProperties = {backgroundColor: "#e0eaff", position: "fixed", height: "100vh", left: 0}
const contentStyle: CSSProperties = {marginLeft: 80}
const headerStyle: CSSProperties = {position: "sticky", top: 0, zIndex: 1, backgroundColor: "white", flexGrow: 0}
const mainStyle: CSSProperties = {backgroundColor: "white", padding: "24px 16px"}


const AppLayout: FC<AppLayoutProps> = ({nav, main, header}) => {

  return (
    <Layout style={layoutStyle}>
      <Layout.Sider width={80} style={asideStyle}>
        {nav}
      </Layout.Sider>
      <Layout style={contentStyle}>
        <Layout.Content style={headerStyle} >
          {header}
        </Layout.Content>
        <Layout.Content style={mainStyle}>
          {main}
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
export default AppLayout
