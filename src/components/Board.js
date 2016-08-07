import React, { PropTypes } from 'react'
import Square from './Square'
import Knight from './Knight'

const Board = ({knightPosition}) => {
  function renderSquare(i) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const black = (x + y) % 2 === 1

    const [knightX, knightY] = knightPosition
    const piece = (x === knightX && y === knightY) ? <Knight /> : null

    const style = {
      width: '12.5%',
      height: '12.5%',
      display: 'inline-block',
      verticalAlign: 'top',
    }

    return (
      <div key={i}
           style={style}>
        <Square black={black}>
          {piece}
        </Square>
      </div>
    )
  }

  const style = {
    width: '100%',
    height: '100%',
  }

  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i))
  }

  return (
    <div style={style}>
      {squares}
    </div>
  )
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
}

export default Board
