"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useData = require("./useData");

var _utils = require("./utils");

var _Visualization = require("./Visualization");

var _Visualization2 = _interopRequireDefault(_Visualization);

var _MissingData = require("./MissingData");

var _MissingData2 = _interopRequireDefault(_MissingData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Context2 = function Context2(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === undefined ? "y_sykepleier" : _ref$id,
      _ref$direction = _ref.direction,
      direction = _ref$direction === undefined ? "uno_id2styrk08" : _ref$direction,
      _ref$layout = _ref.layout,
      layout = _ref$layout === undefined ? "bars" : _ref$layout,
      _ref$limit = _ref.limit,
      limit = _ref$limit === undefined ? 8 : _ref$limit,
      disaggregateBy = _ref.disaggregateBy,
      disaggregateLabels = _ref.disaggregateLabels,
      tooltipContent = _ref.tooltipContent,
      _ref$colors = _ref.colors,
      colors = _ref$colors === undefined ? _utils.defaultColors : _ref$colors,
      moreLabel = _ref.moreLabel,
      _ref$missingDataText = _ref.missingDataText,
      missingDataText = _ref$missingDataText === undefined ? "Missing data" : _ref$missingDataText,
      tooltipStyles = _ref.tooltipStyles,
      tooltipCaretStyles = _ref.tooltipCaretStyles;


  var item = (0, _useData.useData)(id, direction);

  var _ref2 = item ? item.mapping || {} : {},
      docs = _ref2.docs;

  var dataset = (0, _react.useMemo)(function () {
    return (0, _utils.prepareMore)(docs, limit);
  }, [docs, limit]);

  // const customMoreLabel = moreLabel || direction.split("2")[1] === "styrk08"
  //   ? "yrkes-kategorier"
  //   : "utdannings-kategorier"

  return _react2.default.createElement(
    _react.Fragment,
    null,
    docs && docs.length ? _react2.default.createElement(_Visualization2.default, {
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
      tooltipCaretStyles: tooltipCaretStyles
    }) : _react2.default.createElement(_MissingData2.default, { text: missingDataText })
  );
};

Context2.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes2.default.string,
  direction: _propTypes2.default.oneOf(["uno_id2nus", "uno_id2nus_kortnavn", "uno_id2styrk08", "nus_kortnavn2styrk08", "nus2styrk08"]),
  limit: _propTypes2.default.number,
  disaggregateBy: _propTypes2.default.arrayOf(_propTypes2.default.string),
  disaggregateLabels: _propTypes2.default.arrayOf(_propTypes2.default.string),
  colors: _propTypes2.default.object,
  missingDataText: _propTypes2.default.string
} : {};

exports.default = Context2;
module.exports = exports["default"];