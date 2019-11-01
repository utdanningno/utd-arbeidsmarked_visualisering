
import React from "react"
import PropTypes from "prop-types"

const MissingData = ({ text = "Missing data" }) => {
  return (
    <div>
      { text }
    </div>
  )
}

MissingData.propTypes = {
  text: PropTypes.string,
}

export default MissingData
