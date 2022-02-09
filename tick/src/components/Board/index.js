import Square from "../Square";
import "./index.css";

function Board({ squares, onSelectSquare }) {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onSelectSquare(index)}
        />
      ))}
    </div>
  );
}

export default Board;
