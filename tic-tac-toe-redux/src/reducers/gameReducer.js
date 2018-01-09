import * as model from '../model/game'
import * as gameActions from '../constants/gameActions'

const GAME_INITIAL_STATE = {
	gameHistory: [{
		squares: Array(9).fill(null)
	}],
	gameXIsNext: true,
	gameStepNumber: 0,
}

export const gameReducer = (state = GAME_INITIAL_STATE, action) => {
	switch (action.type) {
		case gameActions.MOVE_TO: {
				const history = state.gameHistory.slice(0, state.gameStepNumber + 1)
				const current = state.gameHistory[state.gameHistory.length -1]
				const squares = current.squares.slice();
				squares[action.position] = model.nextPlayer(state.gameXIsNext)
				return {
					...state,
					gameHistory: history.concat([{
						squares,
					}]),
					gameStepNumber: history.length,
					gameXIsNext: !state.gameXIsNext,
				}
			}
		case gameActions.REWIND_TO:{
				return {
					...state,
					gameStepNumber: action.step,
					gameXIsNext: (action.step % 2) === 0,
				}
			}
		default: {
			return {
				...state
			}
		}
	}
}
