const Result = ({ status, winner, onReset }) => {
  return (
    <div className={`result-holder ${status ? "show" : ""}`}>
      <h1 className="result text-uppercase text-white mb-4">
        {winner === "user"
          ? "you win"
          : winner === "computer"
          ? "you lose"
          : "it's a tie"}
      </h1>
      <button
        type="btn"
        className="btn d-block mx-auto bg-white dark-text letter-gap text-uppercase fs-5 py-2 px-5 px-md-0"
        onClick={onReset}
      >
        play again
      </button>
    </div>
  );
};

export default Result;
