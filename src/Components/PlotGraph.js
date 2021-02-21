import React, { useEffect } from "react";
import Plot from "react-plotly.js";
import AppContext from "../Context/app-context";

function PlotGraph() {
  const { searchObjectQuote, sortedXValues, sortedYValues } = React.useContext(
    AppContext
  );

  useEffect(() => {}, [searchObjectQuote, sortedXValues, sortedYValues]);

  return (
    <div className="graph">
      <Plot
        data={[
          {
            x: sortedXValues,
            y: sortedYValues,
            type: "line",
            mode: "lines+markers",
            marker: { color: "lightblue" },
          },
        ]}
        layout={{ width: 1300, height: 740, title: "30 day Price-Chart" }}
      />
    </div>
  );
}

export default PlotGraph;
