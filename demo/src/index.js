import React from "react"
import {render} from "react-dom"

import {SmallVisual, LargeVisual} from "../../src"

const Demo = () => {
  return (
    <div>
      <h1>Test job-market-visuals Demo</h1>
      <SmallVisual/>
      <LargeVisual/>
    </div>
  )
}

render(<Demo/>, document.querySelector("#demo"))
