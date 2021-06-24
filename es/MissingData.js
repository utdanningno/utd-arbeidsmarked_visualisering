
import React from "react";
import PropTypes from "prop-types";

var MissingData = function MissingData(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === undefined ? "Missing data" : _ref$text;

  return React.createElement(
    "div",
    null,
    text
  );
};

MissingData.propTypes = process.env.NODE_ENV !== "production" ? {
  text: PropTypes.string
} : {};

export default MissingData;