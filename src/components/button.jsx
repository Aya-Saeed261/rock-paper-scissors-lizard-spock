import { useState } from "react";

import scissors from "../images/icon-scissors.svg";
import lizard from "../images/icon-lizard.svg";
import paper from "../images/icon-paper.svg";
import spock from "../images/icon-spock.svg";
import rock from "../images/icon-rock.svg";

const icons = { scissors, lizard, paper, spock, rock };

const Button = ({ icon, onPick }) => {
  const [isPicked, setPicked] = useState(false);

  return (
    <button
      type="button"
      className={`btn game-btn p-0 ${
        isPicked ? "picked" : ""
      } ${icon} d-flex align-items-center justify-content-center rounded-circle position-absolute`}
      aria-label={icon}
      onClick={() => {
        setPicked(true);
        onPick(icon);
      }}
    >
      <div className="icon bg-white rounded-circle d-flex align-items-center justify-content-center">
        <img src={icons[icon]} alt={`${icon} icon`} />
      </div>
    </button>
  );
};

export default Button;
