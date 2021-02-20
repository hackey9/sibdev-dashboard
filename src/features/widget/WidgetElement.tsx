import {MoreOutlined} from "@ant-design/icons"
import {Card} from "antd"
import clsx from "clsx"
import useTheme from "features/app-theme-provider/use-theme"
import React, {CSSProperties, FC, PropsWithChildren} from "react"
import css from "./WidgetElement.module.scss"


export type WidgetElementProps = PropsWithChildren<{
  title: string
}>


const cardBodyStyle: CSSProperties = {
  height: "calc(100% - 36px)",
}

const cardHeadStyle: CSSProperties = {
  borderBottom: "none",
}

const WidgetElement: FC<WidgetElementProps> = ({title, children}) => {
  const isLight = useTheme()

  const cardStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "stretch",
    height: "100%",
    backgroundColor: isLight ? undefined : "#111",
    border: "none",
  }

  return (
    <Card
      size={"small"}
      title={title}
      style={cardStyle}
      bodyStyle={cardBodyStyle}
      headStyle={cardHeadStyle}
      className={clsx(css.widget, {[css.dark]: !isLight})}
      extra={<>
        <MoreOutlined size={40}/>
      </>}
    >
      {children}
    </Card>
  )
}
export default WidgetElement
