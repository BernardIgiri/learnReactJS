import * as gameActions from '../constants/gameActions'

export const moveTo = position => ({
	type: gameActions.MOVE_TO,
	position
})

export const rewindTo = step => ({
	type: gameActions.REWIND_TO,
	step
})
