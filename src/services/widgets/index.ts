export {}

export function loadWidgets() {

}



function internalGet() {
  const data = localStorage.getItem("widgets") || "{}"
  return JSON.parse(data)
}


