import React from "react";
import "./benchmark.scss";

const Benchmark = ({ benchmarkresult, children }) => {
  return (
    <div className="benchmark">
      {children}
      <div className="benchmark__result">
        <h6>{benchmarkresult}</h6>
      </div>
    </div>
  );
};

export default Benchmark;
