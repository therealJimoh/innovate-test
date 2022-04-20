import React from "react";
import "./performance.scss";

const Performance = ({ message, average }) => {
  return (
    <div className="performance">
      <div className="performance__content">
        <div className="performance__content-dot"></div>
        <div className="performance__content-result">
          <div className="performance__content-result__message">
            <h4>{message}</h4>
          </div>
          <div className="performance__content-result__average">
            <p>{average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
