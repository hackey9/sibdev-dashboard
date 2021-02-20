import {Card} from "antd"
import React, {CSSProperties, FC, PropsWithChildren} from "react"


export type WidgetElementProps = PropsWithChildren<{
  title: string
}>

const cardStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  alignItems: "stretch",
  height: "100%",
}
const cardBodyStyle: CSSProperties = {
  height: "100%",
}

const WidgetElement: FC<WidgetElementProps> = ({title, children}) => {

  return (
    <Card
      size={"small"}
      title={title}
      style={cardStyle}
      bodyStyle={cardBodyStyle}
      extra={<>
      </>}
    >
      {children}
    </Card>
  )
}
export default WidgetElement
