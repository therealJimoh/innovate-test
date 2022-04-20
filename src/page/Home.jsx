import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getMetric } from "../store/reducer/metricSlice";

import "../styles/home.scss";
import searchicon from "../assets/svg/searchicon.svg";
import clickicon from "../assets/svg/clickicon.svg";
import shapeicon from "../assets/svg/shapeicon.svg";

// import Containers and Components
import {
  AvgCheck,
  Benchmark,
  Help,
  Metricresult,
  Performance,
} from "../components";

const Home = () => {
  const dispatch = useDispatch();
  const [viewData, setViewData] = useState(0);
  const metric = useSelector((state) => state.metricSlice);

  useEffect(() => {
    if (metric) {
      dispatch(getMetric());
    }
  }, [metric, dispatch]);

  const lastHour = () => {
    setViewData(0);
  };
  const yesterday = () => {
    setViewData(1);
  };
  const today = () => {
    setViewData(2);
  };
  const last3Days = () => {
    setViewData(3);
  };

  return (
    <div className="home-container">
      <div className="home-container__wrapper">
        <div className="home-container__header-text">
          <h1>Main Metrics</h1>
        </div>
        <div className="home-container__nav-buttons">
          <button className={viewData === 0 ? "active" : ""} onClick={lastHour}>
            Last hour
          </button>
          <button
            className={viewData === 1 ? "active" : ""}
            onClick={yesterday}
          >
            Today
          </button>
          <button className={viewData === 2 ? "active" : ""} onClick={today}>
            Yesterday
          </button>
          <button
            className={viewData === 3 ? "active" : ""}
            onClick={last3Days}
          >
            Last 3 days
          </button>
        </div>
        <div className="home-container__metrics">
          <Performance
            message={
              viewData === 0
                ? `Errors ${
                    metric.data && metric.data[0]
                      ? metric.data[0].errors_last_hour
                        ? metric.data[0].errors_last_hour
                        : 0
                      : 0
                  }%`
                : viewData === 1
                ? `Errors ${
                    metric.data && metric.data[0]
                      ? metric.data[0].errors_today
                        ? metric.data[0].errors_today
                        : 0
                      : 0
                  }%`
                : viewData === 2
                ? `Errors ${
                    metric.data && metric.data[0]
                      ? metric.data[0].errors_yesterday
                        ? metric.data[0].errors_yesterday.toFixed(2)
                        : 0
                      : 0
                  }%`
                : viewData === 3
                ? `Errors ${
                    metric.data && metric.data[0]
                      ? metric.data[0].errors_last_3days
                        ? metric.data[0].errors_last_3days.toFixed(2)
                        : 0
                      : 0
                  }%`
                : ""
            }
            average="0.11%"
          />
          <Performance
            message={
              viewData === 0
                ? `Zeroes ${
                    metric.data && metric.data[0]
                      ? metric.data[0].zeroes_last_hour
                        ? metric.data[0].zeroes_last_hour
                        : 0
                      : 0
                  }%`
                : viewData === 1
                ? `Zeroes ${
                    metric.data && metric.data[0]
                      ? metric.data[0].zeroes_today
                        ? metric.data[0].zeroes_today
                        : 0
                      : 0
                  }%`
                : viewData === 2
                ? `Zeroes ${
                    metric.data && metric.data[0]
                      ? metric.data[0].zeroes_yesterday
                        ? metric.data[0].zeroes_yesterday.toFixed(2)
                        : 0
                      : 0
                  }%`
                : viewData === 3
                ? `Zeroes ${
                    metric.data && metric.data[0]
                      ? metric.data[0].zeroes_last_3days
                        ? metric.data[0].zeroes_last_3days.toFixed(2)
                        : 0
                      : 0
                  }%`
                : ""
            }
            average="0.11%"
          />
          <Performance
            message={
              viewData === 0
                ? `Timeout ${
                    metric.data && metric.data[0]
                      ? metric.data[0].timeout_last_hour
                        ? metric.data[0].timeout_last_hour
                        : 0
                      : 0
                  }%`
                : viewData === 1
                ? `Timeout ${
                    metric.data && metric.data[0]
                      ? metric.data[0].timeout_today
                        ? metric.data[0].timeout_today
                        : 0
                      : 0
                  }%`
                : viewData === 2
                ? `Timeout ${
                    metric.data && metric.data[0]
                      ? metric.data[0].timeout_yesterday
                        ? metric.data[0].timeout_yesterday.toFixed(2)
                        : 0
                      : 0
                  }%`
                : viewData === 3
                ? `Timeout ${
                    metric.data && metric.data[0]
                      ? metric.data[0].timeout_last_3days
                        ? metric.data[0].timeout_last_3days.toFixed(2)
                        : 0
                      : 0
                  }%`
                : ""
            }
            average="0.11%"
          />
        </div>
        <div className="home-container__benchmark-graph">
          <Benchmark
            benchmarkresult={
              viewData === 3
                ? `Error ${
                    metric.errors_last_3days &&
                    metric.errors_last_3days.length > 1
                      ? metric.errors_last_3days[0].code
                        ? metric.errors_last_3days[0].code
                        : 0
                      : 0
                  }: ${
                    metric.errors_last_3days &&
                    metric.errors_last_3days.length > 1
                      ? metric.errors_last_3days[0].count
                        ? metric.errors_last_3days[0].count
                        : 0
                      : 0
                  }`
                : viewData === 2
                ? `Error ${
                    metric.errors_yesterday &&
                    metric.errors_yesterday.length > 1
                      ? metric.errors_yesterday[0].code
                        ? metric.errors_yesterday[0].code
                        : 0
                      : 0
                  }: ${
                    metric.errors_yesterday &&
                    metric.errors_yesterday.length > 1
                      ? metric.errors_yesterday[0].count
                        ? metric.errors_yesterday[0].count
                        : 0
                      : 0
                  }`
                : viewData === 0
                ? `Error ${
                    metric.errors_last_hour &&
                    metric.errors_last_hour.length > 1
                      ? metric.errors_last_hour[0].code
                        ? metric.errors_last_hour[0].code
                        : 0
                      : 0
                  }: ${
                    metric.errors_last_hour &&
                    metric.errors_last_hour.length > 1
                      ? metric.errors_last_hour[0].count
                        ? metric.errors_last_hour[0].count
                        : 0
                      : 0
                  }`
                : viewData === 1
                ? `Error ${
                    metric.errors_last_hour &&
                    metric.errors_last_hour.length > 1
                      ? metric.errors_last_hour[0].code
                        ? metric.errors_last_hour[0].code
                        : 0
                      : 0
                  }: ${
                    metric.errors_last_today &&
                    metric.errors_last_today.length > 1
                      ? metric.errors_last_today[0].count
                        ? metric.errors_last_today[0].count
                        : 0
                      : 0
                  }`
                : ""
            }
          >
            <div className="benchmark-dotY benchmark-dot"></div>
          </Benchmark>
          <Benchmark
            benchmarkresult={
              viewData === 3
                ? `Error ${
                    metric.errors_last_3days &&
                    metric.errors_last_3days.length > 1
                      ? metric.errors_last_3days[1].code
                        ? metric.errors_last_3days[1].code
                        : 0
                      : 0
                  }: ${
                    metric.errors_last_3days &&
                    metric.errors_last_3days.length > 1
                      ? metric.errors_last_3days[1].count
                        ? metric.errors_last_3days[1].count
                        : 0
                      : 0
                  }`
                : viewData === 2
                ? `Error ${
                    metric.errors_yesterday &&
                    metric.errors_yesterday.length > 1
                      ? metric.errors_yesterday[1].code
                        ? metric.errors_yesterday[1].code
                        : 0
                      : 0
                  }: ${
                    metric.errors_yesterday &&
                    metric.errors_yesterday.length > 1
                      ? metric.errors_yesterday[1].count
                        ? metric.errors_yesterday[1].count
                        : 0
                      : 0
                  }`
                : viewData === 0
                ? `Error ${
                    metric.errors_last_hour &&
                    metric.errors_last_hour.length > 1
                      ? metric.errors_last_hour[1].code
                        ? metric.errors_last_hour[1].code
                        : 0
                      : 0
                  }: ${
                    metric.errors_last_hour &&
                    metric.errors_last_hour.length > 1
                      ? metric.errors_last_hour[1].count
                        ? metric.errors_last_hour[1].count
                        : 0
                      : 0
                  }`
                : viewData === 1
                ? `Error ${
                    metric.errors_last_hour &&
                    metric.errors_last_hour.length > 1
                      ? metric.errors_last_hour[1].code
                        ? metric.errors_last_hour[1].code
                        : 0
                      : 0
                  }: ${
                    metric.errors_last_today &&
                    metric.errors_last_today.length > 1
                      ? metric.errors_last_today[1].count
                        ? metric.errors_last_today[1].count
                        : 0
                      : 0
                  }`
                : ""
            }
          >
            <div className="benchmark-dotP benchmark-dot"></div>
          </Benchmark>
          <Benchmark
            benchmarkresult={
              viewData === 3
                ? `Error ${
                    metric.errors_last_3days &&
                    metric.errors_last_3days.length >= 1
                      ? metric.errors_last_3days[2].code
                        ? metric.errors_last_3days[2].code
                        : 0
                      : 0
                  }: ${
                    metric.errors_last_3days &&
                    metric.errors_last_3days.length >= 1
                      ? metric.errors_last_3days[2]
                        ? metric.errors_last_3days[2].count
                        : 0
                      : 0
                  }`
                : viewData === 2
                ? `Error ${
                    metric.errors_yesterday &&
                    metric.errors_yesterday.length >= 1
                      ? metric.errors_yesterday[2]
                        ? metric.errors_yesterday[2].code
                        : 0
                      : 0
                  }: ${
                    metric.errors_yesterday &&
                    metric.errors_yesterday.length >= 1
                      ? metric.errors_yesterday[2]
                        ? metric.errors_yesterday[2].count
                        : 0
                      : 0
                  }`
                : viewData === 0
                ? `Error ${
                    metric.errors_last_hour &&
                    metric.errors_last_hour.length >= 1
                      ? metric.errors_last_hour[2]
                        ? metric.errors_last_hour[2].code
                        : 0
                      : 0
                  }: ${
                    metric.errors_last_hour &&
                    metric.errors_last_hour.length >= 1
                      ? metric.errors_last_hour[2]
                        ? metric.errors_last_hour[2].count
                        : 0
                      : 0
                  }`
                : viewData === 1
                ? `Error ${
                    metric.errors_last_hour &&
                    metric.errors_last_hour.length >= 1
                      ? metric.errors_last_hour[2]
                        ? metric.errors_last_hour[2].code
                        : 0
                      : 0
                  }: ${
                    metric.errors_last_today &&
                    metric.errors_last_today.length >= 1
                      ? metric.errors_last_today[2]
                        ? metric.errors_last_today[2].count
                        : 0
                      : 0
                  }`
                : "0"
            }
          >
            <div className="benchmark-dotB benchmark-dot"></div>
          </Benchmark>
          <Benchmark
            benchmarkresult={
              viewData === 3
                ? `Other ${
                    metric.others && metric.others.length > 1
                      ? metric.others[2]
                        ? metric.others[2].code
                        : 0
                      : 0
                  }: ${
                    metric.others && metric.others.length > 1
                      ? metric.others[2]
                        ? metric.others[2].count
                        : 0
                      : 0
                  }`
                : viewData === 2
                ? `Other ${
                    metric.others && metric.others.length > 1
                      ? metric.others[2]
                        ? metric.others[2].code
                        : 0
                      : 0
                  }: ${
                    metric.others && metric.others.length > 1
                      ? metric.others[2]
                        ? metric.others[2].count
                        : 0
                      : 0
                  }`
                : viewData === 0
                ? `Other ${
                    metric.others && metric.others.length > 1
                      ? metric.others[2]
                        ? metric.others[2].code
                        : 0
                      : 0
                  }: ${
                    metric.others && metric.others.length > 1
                      ? metric.others[2]
                        ? metric.others[2].count
                        : 0
                      : 0
                  }`
                : viewData === 1
                ? `Other ${
                    metric.others && metric.others.length > 1
                      ? metric.others[2]
                        ? metric.others[2].code
                        : 0
                      : 0
                  }: ${
                    metric.others && metric.others.length > 1
                      ? metric.others[2]
                        ? metric.others[2].count
                        : 0
                      : 0
                  }`
                : "0"
            }
          >
            <div className="benchmark-dotA benchmark-dot"></div>
          </Benchmark>
        </div>
        <div className="home-container__main-metrics">
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
                  searchnumberprev={
                    viewData === 0
                      ? metric.data && metric.data[0]
                        ? metric.data[0].searches_current_last_hour
                          ? metric.data[0].searches_current_last_hour
                          : 0
                        : 0
                      : viewData === 1
                      ? metric.data && metric.data[0]
                        ? metric.data[0].searches_current_today
                          ? metric.data[0].searches_current_today
                          : 0
                        : 0
                      : viewData === 2
                      ? metric.data && metric.data[0]
                        ? metric.data[0].searches_current_yesterday
                          ? metric.data[0].searches_current_yesterday
                          : 0
                        : 0
                      : viewData === 3
                      ? metric.data && metric.data[0]
                        ? metric.data[0].searches_current_last_3days
                          ? metric.data[0].searches_current_last_3days
                          : 0
                        : 0
                      : ""
                  }
                  psearchdayprev="Yesterday"
                  searchnumberpresent={
                    viewData === 0
                      ? metric.data && metric.data[0]
                        ? metric.data[0].searches_previous_last_hour
                          ? metric.data[0].searches_previous_last_hour
                          : 0
                        : 0
                      : viewData === 1
                      ? metric.data && metric.data[0]
                        ? metric.data[0].searches_previous_today
                          ? metric.data[0].searches_previous_today
                          : 0
                        : 0
                      : viewData === 2
                      ? metric.data && metric.data[0]
                        ? metric.data[0].searches_previous_yesterday
                          ? metric.data[0].searches_previous_yesterday
                          : 0
                        : 0
                      : viewData === 3
                      ? metric.data && metric.data[0]
                        ? metric.data[0].searches_previous_last_3days
                          ? metric.data[0].searches_previous_last_3days
                          : 0
                        : 0
                      : ""
                  }
                  psearchdaypresent="Last Friday"
                />
              </div>
            </div>
            <div className="main-metrics__container-traffic-check">
              <AvgCheck
                firsttext={
                  metric.data && metric.data.length >= 1
                    ? metric.data[0].mobile_pessimizer
                      ? `Mobile traffic ${metric.data[0].mobile_pessimizer.toFixed(
                          2
                        )}%`
                      : 0
                    : 0
                }
                secondtext={
                  metric.data && metric.data.length >= 1
                    ? metric.data[0].web_pessimizer
                      ? `Web traffic ${metric.data[0].web_pessimizer.toFixed(
                          2
                        )}%`
                      : 0
                    : 0
                }
              />
              <Help
                helptext="Searches, Pessimisation"
                summarytext="You get 100% traffic on mobile and desktop devices."
              />
            </div>
          </div>

          <div className="main-metrics__spacer"></div>

          <div className="main-metrics__container">
            <div className="main-metrics__contentsearch">
              <div className="main-metrics__oval">
                <img src={clickicon} alt="Search Icon" />
              </div>
              <div className="main-metrics__contentsearch-result">
                <div className="main-metrics-res">
                  <h2 className="main-metrics__clicks">Clicks</h2>
                  <span className="main-metrics-res__progress r-progress">
                    -13%
                  </span>
                </div>
                <Metricresult
                  searchnumberprev={
                    viewData === 0
                      ? metric.data && metric.data[0]
                        ? metric.data[0].clicks_current_last_hour
                          ? metric.data[0].clicks_current_last_hour
                          : 0
                        : 0
                      : viewData === 1
                      ? metric.data && metric.data[0]
                        ? metric.data[0].clicks_current_today
                          ? metric.data[0].clicks_current_today
                          : 0
                        : 0
                      : viewData === 2
                      ? metric.data && metric.data[0]
                        ? metric.data[0].clicks_current_yesterday
                          ? metric.data[0].clicks_current_yesterday
                          : 0
                        : 0
                      : viewData === 3
                      ? metric.data && metric.data[0]
                        ? metric.data[0].clicks_current_last_3days
                          ? metric.data[0].clicks_current_last_3days
                          : 0
                        : 0
                      : ""
                  }
                  psearchdayprev="Yesterday"
                  searchnumberpresent={
                    viewData === 0
                      ? metric.data && metric.data[0]
                        ? metric.data[0].clicks_previous_last_hour
                          ? metric.data[0].clicks_previous_last_hour
                          : 0
                        : 0
                      : viewData === 1
                      ? metric.data && metric.data[0]
                        ? metric.data[0].clicks_previous_today
                          ? metric.data[0].clicks_previous_today
                          : 0
                        : 0
                      : viewData === 2
                      ? metric.data && metric.data[0]
                        ? metric.data[0].clicks_previous_yesterday
                          ? metric.data[0].clicks_previous_yesterday
                          : 0
                        : 0
                      : viewData === 3
                      ? metric.data && metric.data[0]
                        ? metric.data[0].clicks_previous_last_3days
                          ? metric.data[0].clicks_previous_last_3days
                          : 0
                        : 0
                      : ""
                  }
                  psearchdaypresent="Last Friday"
                />
              </div>
            </div>
            <div className="main-metrics__container-traffic-check">
              <h2 className="main-metrics__ctr">
                CTR:
                {viewData === 0
                  ? metric.data && metric.data[0]
                    ? metric.data[0].ctr_last_hour
                      ? metric.data[0].ctr_last_hour.toFixed(2)
                      : 0
                    : 0
                  : viewData === 1
                  ? metric.data && metric.data[0]
                    ? metric.data[0].ctr_today
                      ? metric.data[0].ctr_today.toFixed(2)
                      : 0
                    : 0
                  : viewData === 2
                  ? metric.data && metric.data[0]
                    ? metric.data[0].ctr_yesterday
                      ? metric.data[0].ctr_yesterday.toFixed(2)
                      : 0
                    : 0
                  : viewData === 3
                  ? metric.data && metric.data[0]
                    ? metric.data[0].ctr_last_3days
                      ? metric.data[0].ctr_last_3days.toFixed(2)
                      : 0
                    : 0
                  : ""}%
              </h2>
              <Help
                helptext="CTR, Clicks"
                summarytext="Conversion from cliks  to bookings on all devices."
              />
            </div>
          </div>

          <div className="main-metrics__spacer"></div>

          <div className="main-metrics__container">
            <div className="main-metrics__contentsearch">
              <div className="main-metrics__oval">
                <img src={shapeicon} alt="Search Icon" />
              </div>
              <div className="main-metrics__contentsearch-result">
                <div className="main-metrics-res">
                  <h2>Sales</h2>
                  <span className="main-metrics-res__progress g-progress">
                    +15%
                  </span>
                </div>
                <Metricresult
                  searchnumberprev={
                    viewData === 0
                      ? metric.data && metric.data[0]
                        ? metric.data[0].bookings_current_last_hour
                          ? metric.data[0].bookings_current_last_hour
                          : 0
                        : 0
                      : viewData === 1
                      ? metric.data && metric.data[0]
                        ? metric.data[0].bookings_current_today
                          ? metric.data[0].bookings_current_today
                          : 0
                        : 0
                      : viewData === 2
                      ? metric.data && metric.data[0]
                        ? metric.data[0].bookings_current_yesterday
                          ? metric.data[0].bookings_current_yesterday
                          : 0
                        : 0
                      : viewData === 3
                      ? metric.data && metric.data[0]
                        ? metric.data[0].bookings_current_last_3days
                          ? metric.data[0].bookings_current_last_3days
                          : 0
                        : 0
                      : ""
                  }
                  psearchdayprev="Yesterday"
                  searchnumberpresent={
                    viewData === 0
                      ? metric.data && metric.data[0]
                        ? metric.data[0].bookings_previous_last_hour
                          ? metric.data[0].bookings_previous_last_hour
                          : 0
                        : 0
                      : viewData === 1
                      ? metric.data && metric.data[0]
                        ? metric.data[0].bookings_previous_today
                          ? metric.data[0].bookings_previous_today
                          : 0
                        : 0
                      : viewData === 2
                      ? metric.data && metric.data[0]
                        ? metric.data[0].bookings_previous_yesterday
                          ? metric.data[0].bookings_previous_yesterday
                          : 0
                        : 0
                      : viewData === 3
                      ? metric.data && metric.data[0]
                        ? metric.data[0].bookings_previous_last_3days
                          ? metric.data[0].bookings_previous_last_3days
                          : 0
                        : 0
                      : ""
                  }
                  psearchdaypresent="Last Friday"
                />
              </div>
            </div>
            <div className="main-metrics__container-traffic-check">
              <AvgCheck
                firsttext={
                  viewData === 0
                    ? `STR: ${
                        metric.data && metric.data[0]
                          ? metric.data[0].str_last_hour
                            ? metric.data[0].str_last_hour.toFixed(2)
                            : 0
                          : 0
                      }%`
                    : viewData === 1
                    ? `STR: ${
                        metric.data && metric.data[0]
                          ? metric.data[0].str_today
                            ? metric.data[0].str_today.toFixed(2)
                            : 0
                          : 0
                      }%`
                    : viewData === 2
                    ? `STR: ${
                        metric.data && metric.data[0]
                          ? metric.data[0].str_yesterday
                            ? metric.data[0].str_yesterday.toFixed(2)
                            : 0
                          : 0
                      }%`
                    : viewData === 3
                    ? `STR: ${
                        metric.data && metric.data[0]
                          ? metric.data[0].str_last_3days
                            ? metric.data[0].str_last_3days.toFixed(2)
                            : 0
                          : 0
                      }%`
                    : ""
                }
                secondtext={
                  viewData === 0
                    ? `Avg.Check: ${
                        metric.data && metric.data[0]
                          ? metric.data[0].avg_price_last_hour
                            ? metric.data[0].avg_price_last_hour
                            : 0
                          : 0
                      }`
                    : viewData === 1
                    ? `Avg.Check: ${
                        metric.data && metric.data[0]
                          ? metric.data[0].avg_price_today
                            ? metric.data[0].avg_price_today
                            : 0
                          : 0
                      }`
                    : viewData === 2
                    ? `Avg.Check: ${
                        metric.data && metric.data[0]
                          ? metric.data[0].avg_price_yesterday
                            ? metric.data[0].avg_price_yesterday
                            : 0
                          : 0
                      }`
                    : viewData === 3
                    ? `Avg.Check: ${
                        metric.data && metric.data[0]
                          ? metric.data[0].avg_price_last_3days
                            ? metric.data[0].avg_price_last_3days
                            : 0
                          : 0
                      }`
                    : ""
                }
              />
              <Help
                helptext="Searches, Pessimisation"
                summarytext="Conversion from cliks  to bookings on all devices."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
