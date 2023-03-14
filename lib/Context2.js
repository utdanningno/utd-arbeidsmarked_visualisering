"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _useData = require("./useData");
var _utils = require("./utils");
var _Visualization = _interopRequireDefault(require("./Visualization2"));
var _MissingData = _interopRequireDefault(require("./MissingData"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Context2 = function Context2(_ref) {
  var _ref$id = _ref.id,
    id = _ref$id === void 0 ? "y_sykepleier" : _ref$id,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "uno_id2styrk08" : _ref$direction,
    _ref$layout = _ref.layout,
    layout = _ref$layout === void 0 ? "bars" : _ref$layout,
    _ref$limit = _ref.limit,
    limit = _ref$limit === void 0 ? 8 : _ref$limit,
    disaggregateBy = _ref.disaggregateBy,
    disaggregateLabels = _ref.disaggregateLabels,
    tooltipContent = _ref.tooltipContent,
    _ref$colors = _ref.colors,
    colors = _ref$colors === void 0 ? _utils.defaultColors : _ref$colors,
    moreLabel = _ref.moreLabel,
    _ref$missingDataText = _ref.missingDataText,
    missingDataText = _ref$missingDataText === void 0 ? "Missing data" : _ref$missingDataText,
    tooltipStyles = _ref.tooltipStyles,
    tooltipCaretStyles = _ref.tooltipCaretStyles,
    _ref$api_url = _ref.api_url,
    api_url = _ref$api_url === void 0 ? 'https://api.utdanning.no' : _ref$api_url;
  var _useState = (0, _react.useState)(limit),
    usedLimit = _useState[0],
    setUsedLimit = _useState[1];
  var item = (0, _useData.useData)(id, direction, api_url);
  var _ref2 = item ? item.mapping || {} : {},
    docs = _ref2.docs;
  var dataset = (0, _react.useMemo)(function () {
    return (0, _utils.prepareMore)(docs, usedLimit);
  }, [docs, usedLimit]);

  // const customMoreLabel = moreLabel || direction.split("2")[1] === "styrk08"
  //   ? "yrkes-kategorier"
  //   : "utdannings-kategorier"

  var handleClickMore = (0, _react.useCallback)(function () {
    setUsedLimit(function (oldLimit) {
      return oldLimit + limit;
    });
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, docs && docs.length ? /*#__PURE__*/_react["default"].createElement(_Visualization["default"], {
    item: {
      parentId: item.main ? item.main.uno_id : id,
      subItems: dataset
    },
    layout: layout,
    disaggregate: !!disaggregateBy,
    disaggregateBy: disaggregateBy,
    disaggregateLabels: disaggregateLabels,
    tooltipContent: tooltipContent,
    moreLabel: moreLabel,
    colors: colors,
    tooltipStyles: tooltipStyles,
    tooltipCaretStyles: tooltipCaretStyles,
    onClickMore: handleClickMore
  }) : /*#__PURE__*/_react["default"].createElement(_MissingData["default"], {
    text: missingDataText
  }));
};
Context2.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes["default"].string,
  direction: _propTypes["default"].oneOf(["uno_id2nus", "uno_id2nus_kortnavn", "uno_id2styrk08", "nus_kortnavn2styrk08", "nus2styrk08"]),
  limit: _propTypes["default"].number,
  disaggregateBy: _propTypes["default"].arrayOf(_propTypes["default"].string),
  disaggregateLabels: _propTypes["default"].arrayOf(_propTypes["default"].string),
  colors: _propTypes["default"].object,
  missingDataText: _propTypes["default"].string
} : {};
var _default = Context2;
exports["default"] = _default;
module.exports = exports.default;