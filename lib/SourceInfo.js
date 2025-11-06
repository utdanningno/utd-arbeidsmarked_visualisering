"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SourceInfo = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = require("./utils");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SourceInfo = _ref => {
  let {
    kildedato,
    showKildeDato = false
  } = _ref;
  if (!kildedato) {
    return null;
  }
  if (!showKildeDato) {
    return null;
  }
  const dato = new Date(Date.parse(kildedato));
  const year = dato.getFullYear();
  const month = _utils.months[dato.getMonth()];
  return /*#__PURE__*/_react.default.createElement("p", null, "Kilde: Statistisk sentralbyr\xE5 ", year + 1, ". Tall fra ", month, " ", year, ".", " ", /*#__PURE__*/_react.default.createElement("a", {
    href: "/tema/om_utdanning.no/om_yrkes-_og_utdanningstatistikken"
  }, "Forklaring til statistikken"));
};
exports.SourceInfo = SourceInfo;
SourceInfo.propTypes = {
  kildedato: _propTypes.default.string,
  showKildeDato: _propTypes.default.bool
};