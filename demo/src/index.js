import React, { useState } from "react";
import { render } from "react-dom";

import { Visualization } from "../../src";
import "./styles.css";

const data = [
  // "u_bioingeniorfag",
  // "y_elektriker",
  // "u_journalistikk",
  // "y_allmennlege",

  "u_automatiseringsfag",
  // "u_reservedelsfag",
  // "u_journalistikk",
  
  // "y_journalist",
  // "y_agronom",
  // "y_arkitekt",
  // "y_urolog",

];

const containerStyles = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  maxWidth: 1120,
  margin: "0 auto",
  padding: "2.5rem 0.75rem",
  boxSizing: "border-box"
};

const itemStyles = {
  width: "25%",
  padding: "0.75rem",
  boxSizing: "border-box"
};

// const disaggregationValues = [
//   "antall_kvinner",
//   "antall_menn",
//   "antall_ukjent_kjonn"
// ];
// const disaggregationLabels = ["kvinner", "menn", "ukjent kjonn"];

// const disaggregationValues = ["antall_offentlig", "antall_privat", "antall_ukjent_sektor"]
// const disaggregationLabels = ["Offentlig", "Privat", "Ukjent sektor"]

// const disaggregationValues = ["antall_13", "antall_710", "other_experience"]
// const disaggregationLabels = ["1-3 years", "7-10 years", "Other"]

const disaggregationValues = ["antall_40", "over_40"]
const disaggregationLabels = ["Under 40", "Over 40"]

const Demo = ({ items = data }) => {
  const [limit, setLimit] = useState(8);
  const [layout, setLayout] = useState("tree");
  const [disaggregate, setDisaggregate] = useState(null);

  return (
    <div style={containerStyles}>
      <div style={{ width: "25%", padding: "0 0.75rem" }}>
        <input
          type="range"
          min={1}
          max={30}
          value={limit}
          onChange={el => setLimit(+el.target.value)}
          style={{ margin: 0, width: "100%" }}
        />
      </div>
      <div style={{ width: "75%", padding: "0 0.75rem" }}>
        <button onClick={() => setLayout("bars")}>{"Bars"}</button>
        <button onClick={() => setLayout("tree")}>{"Tree"}</button>
        <button
          onClick={() =>
            setDisaggregate(disaggregate ? null : disaggregationValues)
          }
        >
          {"Toggle disaggregations"}
        </button>
      </div>
      {items.map((item, index) => (
        <div key={item} style={itemStyles}>
          <Visualization
            unoId={item}
            limit={limit}
            layout={layout}
            disaggregateBy={disaggregate}
            disaggregateLabels={disaggregationLabels}
            direction={item.substring(0,1) == "y" ? "yrke2utdanning" : "utdanning2yrke"}
          />
        </div>
      ))}
    </div>
  );
};

render(<Demo />, document.querySelector("#demo"));
