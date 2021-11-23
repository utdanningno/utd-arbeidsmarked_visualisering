"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Tooltip = function Tooltip(_ref) {
  var tooltip = _ref.tooltip,
      tooltipStyles = _ref.tooltipStyles,
      tooltipCaretStyles = _ref.tooltipCaretStyles;
  return tooltip.item ? /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
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
  }, tooltip.item.customContent ? /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, tooltip.item.customContent) : /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      display: "block",
      overflow: "hidden"
    }
  }, tooltip.item.title), tooltip.item.number)), /*#__PURE__*/_react["default"].createElement("div", {
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
  })) : null;
};

Tooltip.propTypes = process.env.NODE_ENV !== "production" ? {
  tooltip: _propTypes["default"].object
} : {};
var _default = Tooltip;
exports["default"] = _default;
module.exports = exports.default;