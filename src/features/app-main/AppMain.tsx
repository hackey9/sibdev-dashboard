import React, {FC, PropsWithChildren, ReactNode} from "react"
import css from "./AppMain.module.scss"


export type AppMainProps = PropsWithChildren<{
  header?: ReactNode
  content?: ReactNode
}>

const AppMain: FC<AppMainProps> = ({header, content}) => {

  return (
    <main className={css.main}>
      {header}
      {content}
    </main>
  )
}
export default AppMain
