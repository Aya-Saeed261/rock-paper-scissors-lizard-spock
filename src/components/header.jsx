import normal from "../images/logo.svg";
import bonus from "../images/logo-bonus.svg";

import Reset from "./resetBtn";

const Header = ({ score, onReset, mode }) => {
  return (
    <div className="header mid-width d-flex justify-content-between mx-auto">
      <h1 className="align-self-center mb-0" aria-label="game logo">
        <img
          src={mode === "normal" ? normal : bonus}
          alt={
            mode === "normal"
              ? "rock paper scissors logo"
              : "rock paper scissors lizard spock logo"
          }
          className="logo ms-2"
        />
      </h1>
      <Reset onReset={onReset} />
      <div className="score-holder bg-white pt-2 pt-md-4 pb-md-3 d-flex flex-column align-items-center justify-content-center">
        <p className="main-fs blue-text letter-gap text-uppercase lh-1 mb-1">
          score
        </p>
        <div className="score dark-text fw-bold text-center lh-1">
          {score[mode]}
        </div>
      </div>
    </div>
  );
};

export default Header;
