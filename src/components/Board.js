import React, { PropTypes } from 'react'
import Square from './Square'
import Knight from './Knight'

const Board = () => (
  <div>
    <Square black>
      <Knight />
    </Square>
  </div>
)

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
}

export default Board
