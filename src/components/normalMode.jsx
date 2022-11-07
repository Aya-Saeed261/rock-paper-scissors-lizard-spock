import React from "react";
import Button from "./button";

import bg from "../images/bg-triangle.svg";

const NormalMode = ({ onPick }) => {
  return (
    <React.Fragment>
      <img src={bg} alt="" className="mx-auto game-bg" />
      <Button icon="scissors" onPick={onPick} />
      <Button icon="paper" onPick={onPick} />
      <Button icon="rock" onPick={onPick} />
    </React.Fragment>
  );
};

export default NormalMode;
