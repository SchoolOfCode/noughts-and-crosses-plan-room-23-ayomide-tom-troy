import { useState } from "React";

function calculateWinner() {
  console.log("hello");
}

function Game() {
  const [isXTurn, setIsXTurn] = useState(true);
  const winner = calculateWinner(board);
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const currentPlayer = isXTurn ? "X" : "O";

  function handleClick(index) {
    if (winner || board[index]) {
      return;
    }

    setBoard([
      ...board.slice(0, index),
      currentPlayer,
      ...board.slice(index + 1),
    ]);
  }
  setIsXTurn(!isXTurn);
}
export default Game;
