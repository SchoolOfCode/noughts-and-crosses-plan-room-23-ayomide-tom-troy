import { useState } from "React";
import Square from "../Square";

function Game() {
  const [turn, setTurn] = useState("x");
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

  const handleClick = (value) => {
    if (turn === "x") {
      setTurn("o");
    } else if (turn === "o") {
      setTurn("x");
    }
  };
}

function boardCheck(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) return false;
  }
  return true;
}

export default Game;
