import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { json } from "d3";

import Visualization from "./Visualization";
import { defaultColors } from "./utils";

// const proxyURL = "http://cors-anywhere.herokuapp.com/"

const VisualizationWrapper = ({
  unoId = "u_bioingeniorfag",
  limit = 8,
  layout = "bars",
  direction = "utdanning2yrke",
  disaggregateBy,
  disaggregateLabels,
  tooltipContent,
  colors = defaultColors
}) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const mappingPromise = json(
      `http://cors-anywhere.herokuapp.com/https://sammenlign.utdanning.no/rest/${direction}?uno_id=${unoId}&dataset=total`
    );
    const allDataPromise = json(
      `http://cors-anywhere.herokuapp.com/https://sammenlign.utdanning.no/rest/main?uno_id=${unoId}`
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

  const dataset = useMemo(() => {
    if (!item.subItems) return [];

    const more = item.subItems.slice(limit).reduce((acc, cur) => {
      return {
        id: "more",
        tittel: "More",
        count: item.subItems.slice(limit).length,
        antall_personer: (acc.antall_personer || 0) + cur.antall_personer,
        antall_kvinner: (acc.antall_kvinner || 0) + cur.antall_kvinner,
        antall_menn: (acc.antall_menn || 0) + cur.antall_menn,
        antall_ukjent_kjonn:
          (acc.antall_ukjent_kjonn || 0) + cur.antall_ukjent_kjonn,
        antall_offentlig: (acc.antall_offentlig || 0) + cur.antall_offentlig,
        antall_privat: (acc.antall_privat || 0) + cur.antall_privat,
        antall_ukjent_sektor:
          (acc.antall_ukjent_sektor || 0) + cur.antall_ukjent_sektor,
        antall_40: (acc.antall_40 || 0) + cur.antall_40,
        antall_13: (acc.antall_13 || 0) + cur.antall_13,
        antall_710: (acc.antall_710 || 0) + cur.antall_710
      };
    }, {});

    return item.subItems.slice(0, limit).concat([more]);
  }, [item.subItems, limit]);

  return (
    <div>
      {item.subItems && (
        <Visualization
          item={{ unoId, subItems: dataset }}
          layout={layout}
          disaggregate={!!disaggregateBy}
          disaggregateBy={disaggregateBy}
          disaggregateLabels={disaggregateLabels}
          tooltipContent={tooltipContent}
          colors={colors}
        />
      )}
    </div>
  );
};

VisualizationWrapper.propTypes = {
  unoId: PropTypes.string,
  limit: PropTypes.number,
  layout: PropTypes.oneOf(["bars", "tree"]),
  direction: PropTypes.oneOf(["utdanning2yrke", "yrke2utdanning"]),
  disaggregateBy: PropTypes.arrayOf(PropTypes.string),
  disaggregateLabels: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.object
};

export default VisualizationWrapper;
