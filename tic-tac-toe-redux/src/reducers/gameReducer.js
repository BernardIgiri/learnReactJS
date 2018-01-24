import * as model from '../model/game'
import * as gameActions from '../constants/gameActions'

const initialState = {
	game: {
		history: [{
			squares: Array(9).fill(null)
		}],
		xIsNext: true,
		stepNumber: 0,
	}
}

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case gameActions.MOVE_TO: {
				const history = state.game.history.slice(0, state.game.stepNumber + 1)
				const current = history[history.length -1]
				const squares = current.squares.slice();
				if (model.invalidMove(action.position, squares)) {
					return {
						...state
					}
				} else {
					squares[action.position] = model.nextPlayer(state.game.xIsNext)
					return {
						...state,
						game: {
							...state.game,
								history: history.concat([{
								squares,
							}]),
							stepNumber: history.length,
							xIsNext: !state.game.xIsNext,
						}
					}
				}
			}
		case gameActions.REWIND_TO:{
				return {
					...state,
					game: {
						...state.game,
						stepNumber: action.step,
						xIsNext: (action.step % 2) === 0,
					}
				}
			}
		default: {
			return {
				...state
			}
		}
	}
}
