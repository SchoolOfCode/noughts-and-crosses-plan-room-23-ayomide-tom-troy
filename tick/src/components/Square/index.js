function Square({ value, handleClick }) {
  return (
    <div className="Square" onClick={handleClick}>
      <h1>{value}</h1>
    </div>
  );
}

export default Square;
