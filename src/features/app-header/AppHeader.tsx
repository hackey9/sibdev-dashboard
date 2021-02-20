import {Layout, Menu} from "antd"
import React, {FC, PropsWithChildren} from "react"
import css from "./AppHeader.module.scss"



export type AppHeaderProps = PropsWithChildren<{}>

const AppHeader: FC<AppHeaderProps> = () => {

  return (
    <Layout>
      <Layout.Content>Dashboard</Layout.Content>
      <Layout.Content>
        <Menu>

        </Menu>
      </Layout.Content>
    </Layout>
  )
}
export default AppHeader
