import logo from "../images/logo-bonus.svg";

const Header = ({ score }) => {
  return (
    <div className="header mid-width d-flex justify-content-between mx-auto">
      <h1>
        <img src={logo} alt="game logo" className="logo ms-2" />
      </h1>
      <div className="score-holder bg-white pt-2 d-flex flex-column align-items-center justify-content-center">
        <p className="score-title letter-gap text-uppercase lh-1 mb-1">score</p>
        <div className="score dark-text fw-bold text-center lh-1">{score}</div>
      </div>
    </div>
  );
};

export default Header;
