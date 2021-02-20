import {Button, Menu, PageHeader} from "antd"
import React, {FC, PropsWithChildren} from "react"
import css from "./AppHeader.module.scss"


export type AppHeaderProps = PropsWithChildren<{}>

const AppHeader: FC<AppHeaderProps> = () => {

  return (
    <PageHeader title={"Dashboard"}>
      <div className={css.spaced}>
        <Menu mode={"horizontal"} selectedKeys={["1st"]}>
          <Menu.Item key={"1st"}>Показатели руководства</Menu.Item>
          <Menu.Item key={"2nd"}>Мои показатели</Menu.Item>
          <Menu.Item key={"3rd"}>Показатели подчинённых</Menu.Item>
          <Menu.Item key={"4th"}>Добавить</Menu.Item>
        </Menu>
        <Button type={"primary"}>Настройки</Button>
      </div>
    </PageHeader>
  )
}
export default AppHeader

