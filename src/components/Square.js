// libs
import PropTypes from 'prop-types';
import React from 'react';

const style = {
  background: 'lightblue',
  border: '2px solid darkblue',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
};

const Square = ({ value, onClick }) => (
  <button style={style} type="button" onClick={onClick}>
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Square;
