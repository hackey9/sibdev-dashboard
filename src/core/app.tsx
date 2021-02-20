import {ConfigProvider, Input, Tree} from "antd"
import AppContent from "features/app-content/AppContent"
import AppHeader from "features/app-header/AppHeader"
import AppLayout from "features/app-layout/AppLayout"
import AppNav from "features/app-nav/AppNav"
import AppThemeProvider from "features/app-theme-provider/AppThemeProvider"
import {IconType} from "rc-tree/lib/interface"
import React, {FC, PropsWithChildren, useState} from "react"
import {fakeInitialItems, Item} from "services/fake-widgets"
import css from "./app.module.scss"



export type AppProps = PropsWithChildren<{}>

const App: FC<AppProps> = () => {

  const [items, setItems] = useState<Item[]>(fakeInitialItems)

  return (
    <AppThemeProvider>
      <AppLayout
        nav={<AppNav
          key="nav"
          aside={<>
            <Search/>
          </>}
        />}
        header={<AppHeader key="header"/>}
        main={<AppContent key="content" items={items} setItems={setItems}/>}
      />
    </AppThemeProvider>
  )
}
export default App


const Search: FC = () => {

  const [data, setData] = useState<DataNode[]>([
    {
      title: "Месторождение",
      key: "0",
      children: [
        {
          key: "0-0",
          title: "ОАО \"ННН\"",
          children: [
            {
              key: "0-0-0",
              title: "Скважина №1",
            },
            {
              key: "0-0-1",
              title: "Скважина №2",
            },
            {
              key: "0-0-2",
              title: "Скважина №3",
            },
          ],
        },
        {
          key: "0-1",
          title: "ЗАО \"ННН\"",
        },
        {
          key: "0-2",
          title: "ООО \"ННН\"",
        },
      ],
    },
  ])

  return (
    <div>
      <Input.Search placeholder={"Поиск"} style={{height: 48}}/>
      <Tree treeData={data} style={{backgroundColor: "initial"}} className={css.tree}/>
    </div>
  )
}


interface DataNode {
  checkable?: boolean;
  children?: DataNode[];
  disabled?: boolean;
  disableCheckbox?: boolean;
  icon?: IconType;
  isLeaf?: boolean;
  key: string | number;
  title?: React.ReactNode;
  selectable?: boolean;
  switcherIcon?: IconType;
}
