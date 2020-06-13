// libs
import PropTypes from 'prop-types';
import React from 'react';

const Square = ({ value, onClick }) => (
  <button type="button" onClick={onClick}>
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Square;
