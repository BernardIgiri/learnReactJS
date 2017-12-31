import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square ({onClick, value, ...props}) {
  return (
    <button className="square" onClick={() => onClick()}>
      {value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movesLeft: 9,
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (squares[i] === null) {
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        movesLeft: this.state.movesLeft - 1,
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner === null) {
      if (this.state.movesLeft === 0) {
        status = 'Draw!';
      } else {
        status = 'Next player ' + (this.state.xIsNext ? 'X' : 'O') + ', ' +
          ' ' + this.state.movesLeft + ' move' +
           (this.state.movesLeft === 1 ? '' : 's') + ' remain.';
      }
    } else {
      status = 'Winner: ' + winner;
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
