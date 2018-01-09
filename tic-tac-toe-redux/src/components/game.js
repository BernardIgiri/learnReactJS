import React from 'react'
import PropTypes from 'prop-types'
import { Board } from './board'

export const Game = props => {
	const moves = props.history.map((step, move) => {
		const desc = move ?
			'Go to move # ' + move :
			'Go to game start';
		return (
			<li key={move}>
				<button onClick={() => props.rewindTo(move)}>{desc}</button>
			</li>
		)
	})
	return (
		<div className="game">
			<div className="game-board">
				<Board squares={props.squares}
					onClick={(i) => props.moveTo(i)} />
			</div>
			<div className="game-info">
				<div>{props.status}</div>
				<ol>{moves}</ol>
			</div>
		</div>
	)
}

Game.propTypes = {
	squares: PropTypes.array.isRequired,
	history: PropTypes.array.isRequired,
	status: PropTypes.string.isRequired,
	moveTo: PropTypes.func.isRequired,
	rewindTo: PropTypes.func.isRequired,
}
