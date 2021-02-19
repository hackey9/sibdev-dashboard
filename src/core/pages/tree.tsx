import React, {FC, PropsWithChildren} from "react"


export type TreePageProps = PropsWithChildren<{}>

const TreePage: FC<TreePageProps> = ({children}) => {

  return (
    <div>
      {children}
    </div>
  )
}
export default TreePage
