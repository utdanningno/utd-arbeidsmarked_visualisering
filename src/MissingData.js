import React from 'react';
import PropTypes from 'prop-types';

const MissingData = ({ text = 'Missing data' }) => {
  return <div>{text}</div>;
};

MissingData.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default MissingData;
