"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MissingData = _ref => {
  let {
    text = "Missing data"
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, text);
};
MissingData.propTypes = {
  text: _propTypes.default.string
};
var _default = exports.default = MissingData;