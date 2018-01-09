import * as model from '../model/game'
import * as gameActions from '../constants/gameActions'

const initialState = {
	gameHistory: [{
		squares: Array(9).fill(null)
	}],
	gameXIsNext: true,
	gameStepNumber: 0,
}

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case gameActions.MOVE_TO: {
				const history = state.gameHistory.slice(0, state.gameStepNumber + 1)
				const current = history[history.length -1]
				const squares = current.squares.slice();
				if (model.invalidMove(action.position, squares)) {
					return {
						...state
					}
				} else {
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
