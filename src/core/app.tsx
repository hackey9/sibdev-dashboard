import {Layout} from "antd"
import React, {FC, PropsWithChildren, useCallback, useEffect, useRef, useState} from "react"


export type AppProps = PropsWithChildren<{}>

const App: FC<AppProps> = () => {

  return (
    <>
      <Layout>
        <Layout.Sider>

        </Layout.Sider>
        <Layout>
          <Layout.Header>

          </Layout.Header>
          <Layout.Content>

          </Layout.Content>
        </Layout>
      </Layout>
    </>
  )
}
export default App
