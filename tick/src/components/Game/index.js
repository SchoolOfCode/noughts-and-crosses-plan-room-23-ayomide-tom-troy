import { useState } from "React";

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
export default Game;
