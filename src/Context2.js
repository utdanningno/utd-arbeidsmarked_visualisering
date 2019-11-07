
import React, { Fragment, useMemo } from "react"
import PropTypes from "prop-types"

import { useData } from "./useData"
import { defaultColors, prepareMore } from "./utils"
import Visualization from "./Visualization"
import MissingData from "./MissingData"

const Context2 = ({
  id = "y_sykepleier",
  direction = "uno_id2styrk08",
  layout = "bars",
  limit = 8,
  disaggregateBy,
  disaggregateLabels,
  tooltipContent,
  colors = defaultColors,
  missingDataText = "Missing data",
}) => {

  const item = useData(id, direction)
  const { docs } = item ? (item.mapping || {}) : {}
  const dataset = useMemo(() => prepareMore(docs, limit), [docs, limit])

  return (
    <Fragment>
      {
        (docs && docs.length) ?
        <Visualization
          item={{
            parentId: item.main ? item.main.uno_id : id,
            subItems: dataset,
          }}
          layout={layout}
          disaggregate={!!disaggregateBy}
          disaggregateBy={disaggregateBy}
          disaggregateLabels={disaggregateLabels}
          tooltipContent={tooltipContent}
          colors={colors}
        /> : <MissingData text={missingDataText} />
      }
    </Fragment>
  )
}

Context2.propTypes = {
  id: PropTypes.string,
  direction: PropTypes.oneOf([
    "uno_id2nus",
    "uno_id2nus_kortnavn",
    "uno_id2styrk08",
    "nus_kortnavn2styrk08",
    "nus2styrk08",
  ]),
  limit: PropTypes.number,
  disaggregateBy: PropTypes.arrayOf(PropTypes.string),
  disaggregateLabels: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.object,
  missingDataText: PropTypes.string,
}

export default Context2
