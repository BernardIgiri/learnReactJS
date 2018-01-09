import React from 'react';

export const Square = ({onClick, value, ...props}) => (
	<button className="square" onClick={() => onClick()}>
		{value}
	</button>
)
