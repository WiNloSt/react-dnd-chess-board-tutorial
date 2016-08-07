import React, { PropTypes } from 'react'

const Square = ({black, children}) => {
  const style = {
    backgroundColor: black ? 'black': 'white',
    color: black ? 'white': 'black',
    width: '100%',
    height: '100%'
  }

  return <div style={style} >{children}</div>
}

Square.propTypes = {
  black: PropTypes.bool
}

export default Square
