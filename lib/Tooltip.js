"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = function Tooltip(_ref) {
  var tooltip = _ref.tooltip,
      tooltipStyles = _ref.tooltipStyles,
      tooltipCaretStyles = _ref.tooltipCaretStyles;

  return tooltip.item ? _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      "div",
      {
        style: _extends({
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
          boxSizing: "border-box"
        }, tooltipStyles)
      },
      tooltip.item.customContent ? _react2.default.createElement(
        _react.Fragment,
        null,
        tooltip.item.customContent
      ) : _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          "span",
          {
            style: { display: "block", overflow: "hidden" }
          },
          tooltip.item.title
        ),
        tooltip.item.number
      )
    ),
    _react2.default.createElement("div", {
      style: _extends({
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
        boxSizing: "border-box"
      }, tooltipCaretStyles)
    })
  ) : null;
};

Tooltip.propTypes = process.env.NODE_ENV !== "production" ? {
  tooltip: _propTypes2.default.object
} : {};

exports.default = Tooltip;
module.exports = exports["default"];