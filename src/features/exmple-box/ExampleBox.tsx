import React, {FC, PropsWithChildren} from "react"


export type ExampleBoxProps = PropsWithChildren<{}>

const ExampleBox: FC<ExampleBoxProps> = ({children}) => {

  return (
    <div style={{backgroundColor: "lightgray"}}>
      {children}
    </div>
  )
}
export default ExampleBox
