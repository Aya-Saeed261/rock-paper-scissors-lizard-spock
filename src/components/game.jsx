import bg from "../images/bg-pentagon.svg";
import Button from "./button";

const Game = ({ onPick }) => {
  return (
    <div className="game-container pt-5 mt-5">
      <div className="fit mt-4 position-relative mx-auto">
        <img src={bg} alt="" className="mx-auto game-bg" />
        <Button icon="scissors" onPick={onPick} />
        <Button icon="paper" onPick={onPick} />
        <Button icon="rock" onPick={onPick} />
        <Button icon="lizard" onPick={onPick} />
        <Button icon="spock" onPick={onPick} />
      </div>
    </div>
  );
};

export default Game;
