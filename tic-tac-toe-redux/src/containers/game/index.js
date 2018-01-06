import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as gameActions from './containers/gameActions'

const Game = props => (
	<div className="game">
		<div className="game-board">
			<Board squares={props.squares}
			onClick={(i) => props.handleClick(i)}
		</div>
		<div className="game-info">
		</div>
	</div>
)
