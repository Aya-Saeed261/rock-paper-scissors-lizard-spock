import NormalMode from "./normalMode";
import BonusMode from "./bonusMode";

const Game = ({ onPick, mode }) => {
  return (
    <div className="game-container pt-5 mt-5">
      <div
        className={`fit mt-4 position-relative mx-auto ${
          mode === "normal" ? "normal" : "bonus"
        }`}
      >
        {mode === "normal" ? (
          <NormalMode onPick={onPick} />
        ) : (
          <BonusMode onPick={onPick} />
        )}
      </div>
    </div>
  );
};

export default Game;
