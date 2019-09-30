import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { json } from "d3";

import Visualization from "./Visualization";
import { defaultColors } from "./utils";

// const proxyURL = "http://cors-anywhere.herokuapp.com/"

const Explorer = () => {
  // const [unoId, setID] = useState("u_bioingeniorfag");
  // const [direction, setDirection] = useState("u_bioingeniorfag");

  useEffect(() => {
    const mappingPromise = json(
      `https://sammenlign.utdanning.no/rest/${direction}?uno_id=${unoId}&dataset=total`
    );
    const allDataPromise = json(
      `https://sammenlign.utdanning.no/rest/main?uno_id=${unoId}`
    );
    Promise.all([mappingPromise, allDataPromise]).then(
      ([mappingData, allData]) => {
        const subItems =
          direction === "utdanning2yrke"
            ? mappingData[unoId]
            : mappingData.grouped.uno_id.groups.length > 0
            ? mappingData.grouped.uno_id.groups[0].doclist.docs
            : null;

        console.log("aa", unoId, subItems, mappingData);

        if (direction == "yrke2utdanning")
          subItems.forEach(item => {
            item.tittel = item.nus_kortnavn.replace(/\"/g, "");
          });

        setItem({ ...allData[unoId], subItems });
      }
    );
  }, [direction, unoId]);

  return (
    <div>
      <Div>{"Explorer"}</Div>
    </div>
  );
};

export default Explorer;
