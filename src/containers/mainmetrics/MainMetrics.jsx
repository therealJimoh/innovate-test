import React from "react";
import searchicon from "../../assets/svg/searchicon.svg";
import { AvgCheck, Help, Metricresult } from "../../components";
import "./mainmetrics.scss";

const MainMetrics = () => {
  return (
    <div className="main-metrics">
      <div className="main-metrics__container">
        <div className="main-metrics__contentsearch">
          <div className="main-metrics__oval">
            <img src={searchicon} alt="Search Icon" />
          </div>
          <div className="main-metrics__contentsearch-result">
            <div className="main-metrics-res">
              <h2>Searches</h2>
              <span className="main-metrics-res__progress g-progress">
                +15%
              </span>
            </div>
            <Metricresult
              searchnumberprev="29 380"
              psearchdayprev="Yesterday"
              searchnumberpresent="27 985"
              psearchdaypresent="Last Friday"
            />
          </div>
        </div>
        <div className="main-metrics__container-traffic-check">
          <AvgCheck firsttext="Mobile traffic: 100%" secondtext="Web traffic: 100%" />
          <Help helptext="Searches, Pessimisation" summarytext="You get 100% traffic on mobile and desktop devices." />
        </div>
      </div>

      <div className="main-metrics__spacer"></div>

      <div className="main-metrics__container">
        <div className="main-metrics__contentsearch">
          <div className="main-metrics__oval">
            <img src={searchicon} alt="Search Icon" />
          </div>
          <div className="main-metrics__contentsearch-result">
            <div className="main-metrics-res">
              <h2 className="main-metrics__clicks">Clicks</h2>
              <span className="main-metrics-res__progress r-progress">
                -13%
              </span>
            </div>
            <Metricresult
              searchnumberprev="243"
              psearchdayprev="Yesterday"
              searchnumberpresent="280"
              psearchdaypresent="Last Friday"
            />
          </div>
        </div>
        <div className="main-metrics__container-traffic-check">
          <h2 className="main-metrics__ctr">CTR: 0.04%</h2>
          <Help helptext="CTR, Clicks" summarytext="Conversion from cliks  to bookings on all devices." />
        </div>
      </div>

      <div className="main-metrics__spacer"></div>
      
      <div className="main-metrics__container">
        <div className="main-metrics__contentsearch">
          <div className="main-metrics__oval">
            <img src={searchicon} alt="Search Icon" />
          </div>
          <div className="main-metrics__contentsearch-result">
            <div className="main-metrics-res">
              <h2>Sales</h2>
              <span className="main-metrics-res__progress g-progress">
                +15%
              </span>
            </div>
            <Metricresult
              searchnumberprev="24"
              psearchdayprev="Yesterday"
              searchnumberpresent="24"
              psearchdaypresent="Last Friday"
            />
          </div>
        </div>
        <div className="main-metrics__container-traffic-check">
          <AvgCheck firsttext="STR: 6.2%" secondtext="Avg. Check: 8 903" />
          <Help helptext="Searches, Pessimisation" summarytext="Conversion from cliks  to bookings on all devices." />
        </div>
      </div>
    </div>
  );
};

export default MainMetrics;
