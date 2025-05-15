"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _useData = require("./useData");
var _utils = require("./utils");
var _Visualization = _interopRequireDefault(require("./Visualization"));
var _MissingData = _interopRequireDefault(require("./MissingData"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Context3 = _ref => {
  let {
    id = 'y_sykepleier',
    direction = 'uno_id2styrk08',
    layout = 'bars',
    limit = 8,
    disaggregateBy,
    disaggregateLabels,
    tooltipContent,
    colors = _utils.defaultColors,
    moreLabel,
    missingDataText = 'Missing data',
    api_url = 'https://v3.api.utdanning.no'
  } = _ref;
  const [usedLimit, setUsedLimit] = (0, _react.useState)(limit);
  const [total, setTotal] = (0, _react.useState)();
  const item = (0, _useData.useData)(id, direction, api_url);
  const {
    docs
  } = item ? item.mapping || {} : {};
  const dataset = (0, _react.useMemo)(() => (0, _utils.prepareMore)(docs, usedLimit), [docs, usedLimit]);

  // const customMoreLabel = moreLabel || direction.split("2")[1] === "styrk08"
  //   ? "yrkes-kategorier"
  //   : "utdannings-kategorier"

  const handleClickMore = (0, _react.useCallback)(() => {
    setUsedLimit(oldLimit => {
      const newLimit = oldLimit + limit;
      return newLimit > docs.length ? docs.length : newLimit;
    });
  }, [dataset, total]);
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, docs && docs.length ? /*#__PURE__*/_react.default.createElement(_Visualization.default, {
    item: {
      parentId: item.main.uno_id,
      subItems: dataset
    },
    layout: layout,
    disaggregate: !!disaggregateBy,
    disaggregateBy: disaggregateBy,
    disaggregateLabels: disaggregateLabels,
    tooltipContent: tooltipContent,
    moreLabel: moreLabel,
    colors: colors,
    onClickMore: handleClickMore
  }) : /*#__PURE__*/_react.default.createElement(_MissingData.default, {
    text: missingDataText
  }));
};
Context3.propTypes = {
  id: _propTypes.default.string,
  direction: _propTypes.default.oneOf(['uno_id2nus', 'uno_id2nus_kortnavn', 'uno_id2styrk08']),
  limit: _propTypes.default.number,
  disaggregateBy: _propTypes.default.arrayOf(_propTypes.default.string),
  disaggregateLabels: _propTypes.default.arrayOf(_propTypes.default.string),
  colors: _propTypes.default.object,
  missingDataText: _propTypes.default.string
};
var _default = exports.default = Context3;