"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MissingData = function MissingData(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === undefined ? "Missing data" : _ref$text;

  return _react2.default.createElement(
    "div",
    null,
    text
  );
};

MissingData.propTypes = process.env.NODE_ENV !== "production" ? {
  text: _propTypes2.default.string
} : {};

exports.default = MissingData;
module.exports = exports["default"];