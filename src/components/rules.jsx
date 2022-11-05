import { useState, useLayoutEffect } from "react";

import rules from "../images/image-rules-bonus.svg";
import close from "../images/icon-close.svg";

const Rules = ({ onClose }) => {
  const [isScreenSmall, setIsScreenSmall] = useState(
    window.innerWidth > 767 ? false : true
  );

  useLayoutEffect(() => {
    function updateSize() {
      setIsScreenSmall(window.innerWidth > 767 ? false : true);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [window.innerWidth]);

  return (
    <div
      className={`rules-holder d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100`}
    >
      <div className="rules bg-white fit">
        <div className="d-flex justify-content-between align-items-center mb-md-3">
          <h2 className="text-uppercase fw-bold dark-text">rules</h2>
          {isScreenSmall ? (
            ""
          ) : (
            <button
              type="button"
              className="btn p-0"
              aria-label="close"
              onClick={onClose}
            >
              <img src={close} alt="close icon" />
            </button>
          )}
        </div>
        <img src={rules} alt="rules" />
        {isScreenSmall ? (
          <button
            type="button"
            className="btn p-0"
            aria-label="close"
            onClick={onClose}
          >
            <img src={close} alt="close icon" />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Rules;
