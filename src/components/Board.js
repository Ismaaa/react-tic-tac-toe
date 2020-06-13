// libs
import PropTypes from 'prop-types';
import React from 'react';

// components
import Square from './Square';

const Board = ({ onClick }) => {
  return (
    <>
      <Square value={1} onClick={() => onClick('dummy value')} />
      <Square value={2} onClick={() => onClick('dummy value')} />
      <Square value={3} onClick={() => onClick('dummy value')} />
      <Square value={4} onClick={() => onClick('dummy value')} />
      <Square value={5} onClick={() => onClick('dummy value')} />
      <Square value={6} onClick={() => onClick('dummy value')} />
      <Square value={7} onClick={() => onClick('dummy value')} />
      <Square value={8} onClick={() => onClick('dummy value')} />
      <Square value={9} onClick={() => onClick('dummy value')} />
    </>
  );
};

Board.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Board;
