import {Layout} from "antd"
import useTheme from "features/app-theme-provider/use-theme"
import React, {CSSProperties, FC, PropsWithChildren, ReactNode} from "react"
import "antd/dist/antd.css"


export type AppLayoutProps = PropsWithChildren<{
  nav?: ReactNode
  main?: ReactNode
  header?: ReactNode
}>

const AppLayout: FC<AppLayoutProps> = ({nav, main, header}) => {
  const isLight = useTheme()

  const colors = {
    sider: isLight ? "#e0eaff" : "#000222",
    header: isLight ? "white" : "#222",
    main: isLight ? undefined : "#333"
  }

  const layoutStyle: CSSProperties = {minHeight: "100%"}
  const asideStyle: CSSProperties = {backgroundColor: colors.sider, position: "fixed", height: "100vh", left: 0, zIndex: 2}
  const contentStyle: CSSProperties = {marginLeft: 80}
  const headerStyle: CSSProperties = {position: "sticky", top: 0, zIndex: 1, backgroundColor: colors.header, flexGrow: 0}
  const mainStyle: CSSProperties = {backgroundColor: colors.main, padding: "24px 16px"}

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
