import AppContent from "features/app-content/AppContent"
import AppHeader from "features/app-header/AppHeader"
import AppLayout from "features/app-layout/AppLayout"
import AppNav from "features/app-nav/AppNav"
import React, {FC, PropsWithChildren, useState} from "react"
import {fakeInitialItems, Item} from "services/fake-widgets"


export type AppProps = PropsWithChildren<{}>

const App: FC<AppProps> = () => {

  const [items, setItems] = useState<Item[]>(fakeInitialItems)

  return (
    <>
      <AppLayout
        nav={<AppNav key="nav"/>}
        header={<AppHeader key="header"/>}
        main={<AppContent key="content" items={items} setItems={setItems}/>}
      />
    </>
  )
}
export default App
