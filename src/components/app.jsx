import { useState, useEffect } from "react";

import Header from "./header";
import Game from "./game";
import RulesBtn from "./rulesBtn";
import Rules from "./rules";
import Picked from "./picked";
import ModeBtn from "./modeBtn";

const App = () => {
  const [showRules, setRules] = useState(false);
  const [userPicked, setUserPicked] = useState(false);
  const [pickedIcon, setPickedIcon] = useState("");
  const [score, setScore] = useState({ normal: 0, bonus: 0 });
  const [mode, setMode] = useState("normal");

  useEffect(() => {
    const score = JSON.parse(window.localStorage.getItem("game-score")) || {
      normal: 0,
      bonus: 0,
    };
    setScore(score);
  }, []);

  const handleClose = () => {
    setRules(false);
  };

  const handlePick = (icon) => {
    setUserPicked(true);
    setPickedIcon(icon);
  };

  const handleReplay = () => {
    setUserPicked(false);
    setPickedIcon("");
  };

  const handleScore = (change) => {
    const newScore = { ...score };
    newScore[mode] += change;
    if (newScore[mode] < 0) return;
    updateScore(newScore);
  };

  const updateScore = (newScore) => {
    setScore(newScore);
    window.localStorage.setItem("game-score", JSON.stringify(newScore));
  };

  return (
    <main className="main-bg pt-4 pt-md-5 pb-5 pb-md-4 px-4 position-relative">
      <Header
        score={score}
        mode={mode}
        onReset={() => updateScore({ normal: 0, bonus: 0 })}
      />
      {userPicked ? (
        <Picked
          icon={pickedIcon}
          mode={mode}
          onReplay={handleReplay}
          onScore={handleScore}
        />
      ) : (
        <Game onPick={handlePick} mode={mode} />
      )}
      <div className="settings-holder position-absolute d-flex align-items-center justify-content-between">
        <ModeBtn onMode={(newMode) => setMode(newMode)} />
        <RulesBtn onShowRules={() => setRules(true)} />
      </div>
      {showRules ? <Rules onClose={handleClose} /> : ""}
    </main>
  );
};

export default App;
