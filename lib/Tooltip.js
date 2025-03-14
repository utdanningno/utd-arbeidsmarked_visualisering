"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const Tooltip = _ref => {
  let {
    tooltip,
    tooltipStyles,
    tooltipCaretStyles
  } = _ref;
  return tooltip.item ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread({
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
  }, tooltip.item.customContent ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, tooltip.item.customContent) : /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      display: "block",
      overflow: "hidden"
    }
  }, tooltip.item.title), tooltip.item.number)), /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread({
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
Tooltip.propTypes = {
  tooltip: _propTypes.default.object
};
var _default = exports.default = Tooltip;