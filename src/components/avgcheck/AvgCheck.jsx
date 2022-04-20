import React from "react";
import "./avgcheck.scss"

const AvgCheck = ({ firsttext, secondtext }) => {
  return (
    <div className="avg-check">
      <h2>{firsttext}</h2>
      <h2>{secondtext}</h2>
    </div>
  );
};

export default AvgCheck;
