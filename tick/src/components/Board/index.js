import Square from "../Square";
import "./index.css";

function Board() {
  return (
    <>
      <table className="table">
        <tr>
          <Square value={0} />
        </tr>
        <tr>
          <Square value={1} />
        </tr>
        <tr>
          <Square value={2} />
        </tr>
        <tr>
          <Square value={3} />
        </tr>
        <tr>
          <Square value={4} />
        </tr>
        <tr>
          <Square value={5} />
        </tr>
        <tr>
          <Square value={6} />
        </tr>
        <tr>
          <Square value={7} />
        </tr>
        <tr>
          <Square value={8} />
        </tr>
      </table>
    </>
  );
}

export default Board;
