
import React, { useState } from "react"
import {render} from "react-dom"

import { Visualization } from "../../src"

const data = [
  "y_elektriker",
  "u_bioingeniorfag",
  "y_journalist",
  "u_journalistikk",
]

const containerStyles = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  maxWidth: 1120,
  margin: "0 auto",
  padding: "2.5rem 0.75rem",
  boxSizing: "border-box",
}

const itemStyles = {
  width: "25%",
  padding: "0.75rem",
  boxSizing: "border-box",
}

const disaggregationValues = ["antall_kvinner", "antall_menn", "antall_ukjent_kjonn"]
const disaggregationLabels = ["kvinner", "menn", "Ukjent kjonn"]

const Demo = ({ items = data }) => {

  const [limit, setLimit] = useState(8)
  const [layout, setLayout] = useState("bars")
  const [disaggregate, setDisaggregate] = useState(null)

  return (
    <div style={containerStyles}>
 
      <div style={{ width: "25%", padding: "0 0.75rem" }}>
        <input type="range" min={1} max={30} value={limit} onChange={(el) => setLimit(+el.target.value)} style={{ margin: 0, width: "100%" }} />
      </div>
      <div style={{ width: "75%", padding: "0 0.75rem" }}>
        <button onClick={() => setLayout("bars")}>{ "Bars" }</button>
        <button onClick={() => setLayout("tree")}>{ "Tree" }</button>
        <button onClick={() => setDisaggregate(disaggregate ? null : disaggregationValues)}>{ "Toggle disaggregations" }</button>
      </div>
      {
        items.map(item =>
          <div key={item} style={itemStyles}>
            <Visualization
              unoId={item}
              limit={limit}
              direction="utdanning2yrke"
              layout={layout}
              disaggregatedBy={disaggregate}
              disaggregateLabels={disaggregationLabels}
            />
          </div>
        )
      }
    </div>
  )
}

render(<Demo/>, document.querySelector("#demo"))
