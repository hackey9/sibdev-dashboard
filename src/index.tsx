import App from "core/app"
import "index.scss"
import Demo from "core/demo"
import React, {StrictMode} from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"


ReactDOM.render(
  <StrictMode>
    {/*<App/>*/}
    <Demo/>
  </StrictMode>,
  document.getElementById("root"),
)

reportWebVitals();
