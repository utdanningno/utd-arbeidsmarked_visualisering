
import React, { Fragment } from "react"
import PropTypes from "prop-types"

const Tooltip = ({ tooltip, tooltipStyles, tooltipCaretStyles }) => {
  return tooltip.item ? (
    <Fragment>
      <div
        style={{
          display: tooltip.visible ? "block" : "none",
          position: "fixed",
          left: tooltip.position[0],
          top: tooltip.position[1],
          background: "rgba(0,0,0,0.8)",
          color: "#FFF",
          width: tooltip.width,
          padding: "0.5rem",
          pointerEvents: "none",
          transform: "translate(-50%, -100%)",
          marginTop: -4,
          borderRadius: "0.25rem",
          fontSize: 14,
          overflow: "hidden",
          boxSizing: "border-box",
          ...tooltipStyles
        }}
      >
        {
          tooltip.item.customContent ? (
            <Fragment>
              {tooltip.item.customContent}
            </Fragment>
          ) : (
            <Fragment>
              <span
                style={{ display: "block", overflow: "hidden" }}
              >
                {tooltip.item.title}
              </span>
              {tooltip.item.number}
            </Fragment>
          )
        }
      </div>
      <div
        style={{
          display: tooltip.visible ? "block" : "none",
          position: "fixed",
          left: tooltip.caretPosition[0],
          top: tooltip.caretPosition[1],
          width: "0.5rem",
          height: "0.5rem",
          background: "transparent",
          pointerEvents: "none",
          transform: "translateX(-50%)",
          marginTop: -4,
          borderRight: "0.5rem solid transparent",
          borderTop: "0.5rem solid rgba(0,0,0,0.8)",
          borderLeft: "0.5rem solid transparent",
          boxSizing: "border-box",
          ...tooltipCaretStyles
        }}
      />
    </Fragment>
  ) : null
}

Tooltip.propTypes = {
  tooltip: PropTypes.object,
}

export default Tooltip
