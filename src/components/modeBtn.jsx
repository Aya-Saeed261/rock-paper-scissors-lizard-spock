import { useState } from "react";

const ModeBtn = ({ onMode }) => {
  const [mode, setMode] = useState("normal");
  const handleClick = (newMode) => {
    setMode(newMode);
    onMode(newMode);
  };

  return (
    <div>
      <button
        className="btn mode-btn btn-outline-light main-fs border-2 text-uppercase rounded-3 px-4 letter-gap main-btn bg-transparent text-white dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="game mode"
      >
        {mode}
      </button>
      <ul className="dropdown-menu py-0 bg-transparent border-2 border-light">
        <li>
          <button
            className={`dropdown-item main-fs py-2 text-white ${
              mode === "normal" ? "active" : ""
            }`}
            onClick={() => handleClick("normal")}
          >
            Normal
          </button>
        </li>
        <li>
          <button
            className={`dropdown-item main-fs py-2 text-white ${
              mode === "bonus" ? "active" : ""
            }`}
            onClick={() => handleClick("bonus")}
          >
            Bonus
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ModeBtn;
