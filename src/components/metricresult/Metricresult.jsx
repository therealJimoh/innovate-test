import React from "react";
import "./metricresult.scss";

const Metricresult = ({
  searchtext,
  searchnumberprev,
  psearchdayprev,
  searchnumberpresent,
  psearchdaypresent,
  children,
  progress,
  progrssclicks,
}) => {
  return (
    <div className="metric-result">
      <div className="metric-result__search-text__time">
        <span className="metric-result__prev">
          <h6>{searchnumberprev}</h6>
          <p>{psearchdayprev}</p>
        </span>
        <span className="metric-result__present">
          <h6>{searchnumberpresent}</h6>
          <p>{psearchdaypresent}</p>
        </span>
      </div>
    </div>
  );
};

export default Metricresult;
