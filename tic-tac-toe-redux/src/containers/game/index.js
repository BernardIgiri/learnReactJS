import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as gameActionCreators from '../../actionCreators/gameActionCreators'
import * as gameModel from '../../model/game'
import { Game } from '../../components/game'

const GameContainer = (props) => (
	<Game
		squares={props.squares}
		history={props.history}
		status={props.status}
		moveTo={props.moveTo}
		rewindTo={props.rewindTo}
		/>
)

const mapStateToProps = state => {
	const history = state.gameHistory || [Array(9).fill(null)]
	const step = state.gameStepNumber || 0
	const squares = history[step]
	const xIsNext = state.gameXIsNext === true
	return ({
		squares,
		history,
		status: gameModel.status({
				squares,
				xIsNext: xIsNext
			}),
	})
}

const mapDispatchToProps = dispatch => bindActionCreators({
	...gameActionCreators
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameContainer)
