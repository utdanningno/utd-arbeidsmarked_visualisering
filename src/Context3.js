
import React, { Fragment, useMemo } from "react"
import PropTypes from "prop-types"

import { useData } from "./useData"
import { defaultColors, prepareMore } from "./utils"
import Visualization from "./Visualization"
import MissingData from "./MissingData"

const Context3 = ({
  id = "y_sykepleier",
  direction = "uno_id2styrk08",
  layout = "bars",
  limit = 8,
  disaggregateBy,
  disaggregateLabels,
  tooltipContent,
  colors = defaultColors,
  moreLabel,
  missingDataText = "Missing data",
}) => {

  const item = useData(id, direction)
  const { docs } = item ? (item.mapping || {}) : {}
  const dataset = useMemo(() => prepareMore(docs, limit), [docs, limit])

  const customMoreLabel = moreLabel || direction.split("2")[1] === "styrk08"
    ? "yrkes-kategorier"
    : "utdannings-kategorier"

  return (
    <Fragment>
      {
        (docs && docs.length) ?
        <Visualization
          item={{
            parentId: item.main.uno_id,
            subItems: dataset,
          }}
          layout={layout}
          disaggregate={!!disaggregateBy}
          disaggregateBy={disaggregateBy}
          disaggregateLabels={disaggregateLabels}
          tooltipContent={tooltipContent}
          moreLabel={customMoreLabel}
          colors={colors}
        /> : <MissingData text={missingDataText} />
      }
    </Fragment>
  )
}

Context3.propTypes = {
  id: PropTypes.string,
  direction: PropTypes.oneOf([
    "uno_id2nus",
    "uno_id2nus_kortnavn",
    "uno_id2styrk08",
  ]),
  limit: PropTypes.number,
  disaggregateBy: PropTypes.arrayOf(PropTypes.string),
  disaggregateLabels: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.object,
  missingDataText: PropTypes.string,
}

export default Context3
