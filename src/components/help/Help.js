import React from "react";
import "./help.scss";

const Help = ({ helptext, summarytext }) => {
  return (
    <div className="help">
      <p className="help__summarytext">{summarytext}</p>
      <p className="help__text">
        <span className="help__span">Help:</span>
        {helptext}
      </p>
    </div>
  );
};

export default Help;
