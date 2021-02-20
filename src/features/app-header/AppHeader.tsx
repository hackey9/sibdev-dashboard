import {Button, Menu, PageHeader, Typography} from "antd"
import clsx from "clsx"
import useTheme from "features/app-theme-provider/use-theme"
import React, {FC, PropsWithChildren} from "react"
import css from "./AppHeader.module.scss"


export type AppHeaderProps = PropsWithChildren<{}>

const AppHeader: FC<AppHeaderProps> = () => {

  const isLight = useTheme()

  return (
    <PageHeader
      title={
        <Typography.Title level={3} style={{marginBottom: 0, color: isLight ? undefined : "white"}}>
          Dashboard
        </Typography.Title>
      }
    >
      <div className={css.spaced}>
        <Menu mode={"horizontal"} selectedKeys={["1st"]} className={clsx(css.menu, {[css.dark]: !isLight})}>
          <Menu.Item key={"1st"}>Показатели руководства</Menu.Item>
          <Menu.Item key={"2nd"}>Мои показатели</Menu.Item>
          <Menu.Item key={"3rd"}>Показатели подчинённых</Menu.Item>
          <Menu.Item key={"4th"}>Добавить</Menu.Item>
        </Menu>
        <Button type={"primary"} style={{color: isLight ? undefined : "#222"}}>Настройки</Button>
      </div>
    </PageHeader>
  )
}
export default AppHeader

