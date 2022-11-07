import { useState, useEffect } from "react";

import Result from "./result";

import scissors from "../images/icon-scissors.svg";
import lizard from "../images/icon-lizard.svg";
import paper from "../images/icon-paper.svg";
import spock from "../images/icon-spock.svg";
import rock from "../images/icon-rock.svg";

const allIcons = {
  normal: { scissors, paper, rock },
  bonus: { scissors, lizard, paper, spock, rock },
};

const rules = {
  scissors: {
    beats: ["paper", "lizard"],
  },
  lizard: {
    beats: ["spock", "paper"],
  },
  paper: {
    beats: ["rock", "spock"],
  },
  spock: {
    beats: ["scissors", "rock"],
  },
  rock: {
    beats: ["scissors", "lizard"],
  },
};

const Picked = ({ icon, mode, onReplay, onScore }) => {
  const [computerChoice, setComputerChoice] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [winner, setWinner] = useState("");

  const handleComputerChoice = () => {
    const choices = Object.keys(allIcons[mode]);
    const randomNum = Math.floor(Math.random() * choices.length);
    const comChoice = choices[randomNum];
    let i = 0;
    let loops = 1;
    const choicesAnimation = setInterval(() => {
      setComputerChoice(choices[i]);
      if (loops === 3 && comChoice === choices[i]) {
        clearInterval(choicesAnimation);
        setTimeout(() => {
          setShowResult(true);
        }, 500);
        setTimeout(() => {
          handleResult(icon, comChoice);
        }, 700);
        return;
      }
      i++;
      if (i === choices.length) {
        i = 0;
        loops++;
      }
    }, 100);
  };

  useEffect(handleComputerChoice, []);

  const handleReplay = () => {
    setComputerChoice("");
    setShowResult(false);
    setWinner("");
    onReplay();
  };

  const handleResult = (user, computer) => {
    if (user === computer) {
      setWinner("tie");
    } else {
      if (rules[user].beats.indexOf(computer) === -1) {
        setWinner("computer");
        onScore(-1);
      } else {
        setWinner("user");
        onScore(1);
      }
    }
  };

  return (
    <div className="picked-holder d-flex justify-content-between justify-content-md-center align-items-center mx-auto pt-5 mt-5 mt-md-4">
      <div className="d-flex flex-column-reverse flex-md-column">
        <h2 className="text-uppercase text-white text-center letter-gap mb-md-5 mt-4 mt-md-0">
          You picked
        </h2>
        <div
          className={`picked-btn ${icon} ${
            winner === "user" ? "winner" : ""
          } d-flex align-items-center justify-content-center rounded-circle`}
        >
          <div className="icon bg-white rounded-circle d-flex align-items-center justify-content-center">
            <img src={allIcons[mode][icon]} alt={icon} />
          </div>
        </div>
      </div>
      <Result status={showResult} winner={winner} onReplay={handleReplay} />
      <div className="d-flex flex-column-reverse flex-md-column">
        <h2 className="text-uppercase text-white text-center letter-gap mb-md-5 mt-4 mt-md-0">
          The house picked
        </h2>
        <div
          className={`picked-btn ${
            computerChoice.length > 0 ? computerChoice : ""
          } ${
            winner === "computer" ? "winner" : ""
          } d-flex align-items-center justify-content-center rounded-circle ms-auto`}
        >
          <div
            className={`icon ${
              computerChoice.length > 0 ? "bg-white" : ""
            } rounded-circle d-flex align-items-center justify-content-center`}
          >
            <img src={allIcons[mode][computerChoice]} alt={computerChoice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picked;
