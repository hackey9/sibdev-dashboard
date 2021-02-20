import {MoreOutlined} from "@ant-design/icons"
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
  height: "calc(100% - 36px)",
}

const WidgetElement: FC<WidgetElementProps> = ({title, children}) => {

  return (
    <Card
      size={"small"}
      title={title}
      style={cardStyle}
      bodyStyle={cardBodyStyle}
      extra={<>
        <MoreOutlined size={40}/>
      </>}
    >
      {children}
    </Card>
  )
}
export default WidgetElement
