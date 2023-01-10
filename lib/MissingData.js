"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MissingData = function MissingData(_ref) {
  var _ref$text = _ref.text,
    text = _ref$text === void 0 ? "Missing data" : _ref$text;
  return /*#__PURE__*/_react["default"].createElement("div", null, text);
};
MissingData.propTypes = process.env.NODE_ENV !== "production" ? {
  text: _propTypes["default"].string
} : {};
var _default = MissingData;
exports["default"] = _default;
module.exports = exports.default;