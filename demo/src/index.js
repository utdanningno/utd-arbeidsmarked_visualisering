import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import { Context2, Context3, getData } from "../../src";
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

const selectStyles = {
  appearance: "none",
  height: "2.5rem",
  fontSize: "inherit",
  fontFamily: "inherit",
}

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

const disaggregations = [
  {
    name: "By age",
    values: ["antall_40", "over_40"],
    labels: ["Under 40", "Over 40"],
  },
  {
    name: "By experience",
    values: ["antall_13", "antall_710", "other_experience"],
    labels: ["1-3 years", "7-10 years", "Other"],
  },
  {
    name: "By sector",
    values: ["antall_offentlig", "antall_privat", "antall_ukjent_sektor"],
    labels: ["Offentlig", "Privat", "Ukjent sektor"],
  },
  {
    name: "By gender",
    values: ["antall_kvinner", "antall_menn", "antall_ukjent_kjonn"],
    labels: ["kvinner", "menn", "ukjent kjonn"],
  }
]

const Header = ({ title, direction }) => {
  return (
    <div style={{ paddingBottom: "1.25rem" }}>
      <h3 style={{ marginTop: "0", marginBottom: "0.5rem" }}>{ title }</h3>
      <strong>{ direction }</strong>
    </div>
  )
}

const Context2Demo = ({ layout, disaggregation }) => {
  const [korts, setKorts] = useState(null)
  const [nusKortnavn, setNusKortnavn] = useState("all")

  useEffect(() => {
    getData("y_sykepleier", "uno_id2nus_kortnavn")
      .then(d => {
        if (d && d.mapping && d.mapping.docs) setKorts(d.mapping.docs)
      })
  }, [])

  return (
    <div style={{ width: "100%" }}>

      <div style={{ marginBottom: "1.25rem" }}>
        {
          korts &&
          <select
            style={selectStyles}
            value={nusKortnavn}
            onChange={(evt) => setNusKortnavn(evt.target.value)}
          >
            <option value="all">{ "All" }</option>
            {
              korts.map(d => {
                const name = d.nus_kortnavn.replace(/"/g, "")
                return <option key={d.id} value={name}>{name}</option>
              })
            }
          </select>
        }
      </div>

      <Context2
        id={nusKortnavn === "all" ? "y_sykepleier" : nusKortnavn}
        direction={nusKortnavn === "all" ? "uno_id2styrk08" : "nus_kortnavn2styrk08"}
        layout={layout}
        limit={8}
        disaggregateBy={disaggregation ? disaggregation.values : null}
        disaggregateLabels={disaggregation ? disaggregation.labels : null}
      />
      
    </div>
  )
}

const Demo = () => {
  const [layout, setLayout] = useState("bars")
  const [disaggregation, setDisaggregation] = useState(null)
  return (
    <div style={containerStyles}>

      <div style={{ position: "sticky", top: 0, zIndex: 999, background: "#FFF", width: "100%" }}>
        <h1>{ "Controls" }</h1>
        <button onClick={() => setLayout("bars")}>
          { "Bars" }
        </button>
        <button onClick={() => setLayout("tree")}>
          { "Tree" }
        </button>
        <br />
        <button onClick={() => setDisaggregation(null)}>
          { "No disaggregation" }
        </button>
        {
          disaggregations.map(d => 
            <button key={d.name} onClick={() => setDisaggregation(d)}>
              { d.name }
            </button>
          )
        }
      </div>

      <div style={{ width: "100%" }}>
        <h1>{ "Context 2" }</h1>
      </div>

      <Context2Demo layout={layout} disaggregation={disaggregation} />

      <div style={{ width: "50%" }}>
        <Header title="Sykepleie" direction="nus_kortnavn2styrk08" />
        <Context2
          id="Sykepleie"
          direction="nus_kortnavn2styrk08"
          layout={layout}
          limit={8}
          disaggregateBy={disaggregation ? disaggregation.values : null}
          disaggregateLabels={disaggregation ? disaggregation.labels : null}
        />
      </div>
      <div style={{ width: "50%" }}>
        <Header title="y_sykepleier" direction="y_* uno_id2styrk08" />
        <Context2
          id="y_sykepleier"
          direction="uno_id2styrk08"
          layout={layout}
          limit={8}
          disaggregateBy={disaggregation ? disaggregation.values : null}
          disaggregateLabels={disaggregation ? disaggregation.labels : null}
        />
      </div>
      <div style={{ width: "50%" }}>
        <Header title="u_sykepleie" direction="u_* uno_id2styrk08" />
        <Context2
          id="u_sykepleie"
          direction="uno_id2styrk08"
          layout={layout}
          limit={8}
          disaggregateBy={disaggregation ? disaggregation.values : null}
          disaggregateLabels={disaggregation ? disaggregation.labels : null}
        />
      </div>


      <div style={{ width: "100%" }}>
        <hr style={{ border: 0, borderBottom: "0.25rem solid currentcolor" }} />
      </div>

      <div style={{ width: "100%" }}>
        <h1>{ "Context 3" }</h1>
      </div>
      <div style={{ width: "25%" }}>
        <Header title="y_dataingenior" direction="y_* uno_id2styrk08" />
        <Context3
          id="y_dataingenior"
          direction="uno_id2styrk08"
          layout={layout}
          limit={8}
          disaggregateBy={disaggregation ? disaggregation.values : null}
          disaggregateLabels={disaggregation ? disaggregation.labels : null}
        />
      </div>
      <div style={{ width: "25%" }}>
        <Header title="y_dataingenior" direction="y_* uno_id2nus" />
        <Context3
          id="y_dataingenior"
          direction="uno_id2nus"
          layout={layout}
          limit={8}
          disaggregateBy={disaggregation ? disaggregation.values : null}
          disaggregateLabels={disaggregation ? disaggregation.labels : null}
        />
      </div>
      <div style={{ width: "25%" }}>
        <Header title="y_dataingenior" direction="y_* uno_id2nus_kortnavn" />
        <Context3
          id="y_dataingenior"
          direction="uno_id2nus_kortnavn"
          layout={layout}
          limit={8}
          disaggregateBy={disaggregation ? disaggregation.values : null}
          disaggregateLabels={disaggregation ? disaggregation.labels : null}
        />
      </div>
      <div style={{ width: "25%" }}>
        <Header title="u_journalistikk" direction="u_* uno_id2styrk08" />
        <Context3
          id="u_journalistikk"
          direction="uno_id2styrk08"
          layout={layout}
          limit={8}
          disaggregateBy={disaggregation ? disaggregation.values : null}
          disaggregateLabels={disaggregation ? disaggregation.labels : null}
        />
      </div>
    </div>
  )
}

// const Demo = ({ items = data }) => {
//   const [limit, setLimit] = useState(8);
//   const [layout, setLayout] = useState("tree");
//   const [disaggregate, setDisaggregate] = useState(null);

//   return (
//     <div style={containerStyles}>
//       <div style={{ width: "25%", padding: "0 0.75rem" }}>
//         <input
//           type="range"
//           min={1}
//           max={30}
//           value={limit}
//           onChange={el => setLimit(+el.target.value)}
//           style={{ margin: 0, width: "100%" }}
//         />
//       </div>
//       <div style={{ width: "75%", padding: "0 0.75rem" }}>
//         <button onClick={() => setLayout("bars")}>{"Bars"}</button>
//         <button onClick={() => setLayout("tree")}>{"Tree"}</button>
//         <button
//           onClick={() =>
//             setDisaggregate(disaggregate ? null : disaggregationValues)
//           }
//         >
//           {"Toggle disaggregations"}
//         </button>
//       </div>
//       {items.map((item, index) => (
//         <div key={item} style={itemStyles}>
//           <Visualization
//             unoId={item}
//             limit={limit}
//             layout={layout}
//             disaggregateBy={disaggregate}
//             disaggregateLabels={disaggregationLabels}
//             direction={item.substring(0,1) == "y" ? "yrke2utdanning" : "utdanning2yrke"}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

render(<Demo />, document.querySelector("#demo"));
