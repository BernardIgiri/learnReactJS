export const calculateWinner = squares => {
	const winningLines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let line of winningLines) {
		const [a, b, c] = line;
		if (squares[a] !== null &&
			squares[a] === squares[b] &&
			squares[b] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

export const nextPlayer = xIsNext => (
	xIsNext ? 'X' : 'O'
)

export const outOfMoves = squares => (
	!squares.includes(null)
)

export const invalidMove = (move, squares) => (
	squares[move] !== null ||
		outOfMoves(squares) ||
		calculateWinner(squares) !== null
)

export const status = ({ squares, xIsNext }) => {
	const winner = calculateWinner(squares)
	if (winner === null) {
		if (outOfMoves(squares)) {
			return "Draw!"
		} else {
			return 'Next player: ' + nextPlayer(xIsNext)
		}
	} else {
		return "Winner: " + winner
	}
}
