import React, { Fragment, useCallback, useMemo, useState } from 'react';
import PropTypes from "prop-types";
import { useData } from "./useData";
import { defaultColors, prepareMore } from "./utils";
import Visualization from "./Visualization";
import MissingData from "./MissingData";

var Context3 = function Context3(_ref) {
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
      colors = _ref$colors === void 0 ? defaultColors : _ref$colors,
      moreLabel = _ref.moreLabel,
      _ref$missingDataText = _ref.missingDataText,
      missingDataText = _ref$missingDataText === void 0 ? "Missing data" : _ref$missingDataText;

  var _useState = useState(limit),
      usedLimit = _useState[0],
      setUsedLimit = _useState[1];

  var _useState2 = useState(),
      total = _useState2[0],
      setTotal = _useState2[1];

  var item = useData(id, direction);

  var _ref2 = item ? item.mapping || {} : {},
      docs = _ref2.docs;

  var dataset = useMemo(function () {
    return prepareMore(docs, usedLimit);
  }, [docs, usedLimit]); // const customMoreLabel = moreLabel || direction.split("2")[1] === "styrk08"
  //   ? "yrkes-kategorier"
  //   : "utdannings-kategorier"

  var handleClickMore = useCallback(function () {
    setUsedLimit(function (oldLimit) {
      var newLimit = oldLimit + limit;
      return newLimit > docs.length ? docs.length : newLimit;
    });
  }, [dataset, total]);
  return /*#__PURE__*/React.createElement(Fragment, null, docs && docs.length ? /*#__PURE__*/React.createElement(Visualization, {
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
  }) : /*#__PURE__*/React.createElement(MissingData, {
    text: missingDataText
  }));
};

Context3.propTypes = process.env.NODE_ENV !== "production" ? {
  id: PropTypes.string,
  direction: PropTypes.oneOf(["uno_id2nus", "uno_id2nus_kortnavn", "uno_id2styrk08"]),
  limit: PropTypes.number,
  disaggregateBy: PropTypes.arrayOf(PropTypes.string),
  disaggregateLabels: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.object,
  missingDataText: PropTypes.string
} : {};
export default Context3;