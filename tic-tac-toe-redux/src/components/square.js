import React from 'react'
import PropTypes from 'prop-types'

export const Square = ({onClick, value, ...props}) => (
	<button className="square" onClick={() => onClick()}>
		{value}
	</button>
)


Square.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.func.isRequired,
}
