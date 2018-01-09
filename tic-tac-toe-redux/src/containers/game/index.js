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
	const current = state.gameHistory[state.gameHistory.length -1]
	return ({
		squares: current,
		history: state.gameHistory,
		status: gameModel.status({
				squares: current,
				xIsNext: state.gameXIsNext
			}),
	})
}

const mapDispatchToProps = dispatch => bindActionCreators({
	gameActionCreators
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameContainer)
