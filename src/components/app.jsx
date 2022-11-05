import { useState, useEffect } from "react";

import Header from "./header";
import Game from "./game";
import RulesBtn from "./rulesBtn";
import Rules from "./rules";
import Picked from "./picked";

const App = () => {
  const [showRules, setRules] = useState(false);
  const [userPicked, setUserPicked] = useState(false);
  const [pickedIcon, setPickedIcon] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const score = JSON.parse(window.localStorage.getItem("game-score")) || 0;
    setScore(score);
  }, []);

  const handleClose = () => {
    setRules(false);
  };

  const handlePick = (icon) => {
    setUserPicked(true);
    setPickedIcon(icon);
  };

  const handleReset = () => {
    setUserPicked(false);
    setPickedIcon("");
  };

  const handleScore = (change) => {
    const newScore = score + change;
    if (newScore < 0) return;
    setScore(newScore);
    window.localStorage.setItem("game-score", JSON.stringify(newScore));
  };

  return (
    <main className="main-bg pt-4 pt-md-5 pb-5 pb-md-4 px-4 position-relative">
      <Header score={score} />
      {userPicked ? (
        <Picked icon={pickedIcon} onReset={handleReset} onScore={handleScore} />
      ) : (
        <Game onPick={handlePick} />
      )}
      <RulesBtn onShowRules={() => setRules(true)} />
      {showRules ? <Rules onClose={handleClose} /> : ""}
    </main>
  );
};

export default App;
