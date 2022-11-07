import React from "react";
import Button from "./button";

import bg from "../images/bg-pentagon.svg";

const BonusMode = ({ onPick }) => {
  return (
    <React.Fragment>
      <img src={bg} alt="" className="mx-auto game-bg" />
      <Button icon="scissors" onPick={onPick} />
      <Button icon="paper" onPick={onPick} />
      <Button icon="rock" onPick={onPick} />
      <Button icon="lizard" onPick={onPick} />
      <Button icon="spock" onPick={onPick} />
    </React.Fragment>
  );
};

export default BonusMode;
