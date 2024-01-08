import Square from "./Square";
// eslint-disable-next-line react/prop-types
export function WinnerModal({ resetGame, winner }) {
  if (winner === null) return null;
  const textWinner = winner === false ? "Empate" : "Ganó";
  return (
    <section className="winner">
      <div className="text">
        <h2>{textWinner}</h2>
        <header className="win">
          {winner !== false ? (
            <Square>{winner}</Square>
          ) : (
            // eslint-disable-next-line no-irregular-whitespace
            <Square>{"🤝"}​</Square>
          )}
        </header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
