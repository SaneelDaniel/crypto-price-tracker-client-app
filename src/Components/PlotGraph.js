import React, { useEffect } from "react";
import Plot from "react-plotly.js";
import AppContext from "../Context/app-context";

/**
 * PlotGraph component holls the render and styles for the graph
 * is called by parent when graphs are to be set
 */
function PlotGraph() {
  const { searchObjectQuote, sortedXValues, sortedYValues } = React.useContext(
    AppContext
  );
  var w = window.innerWidth;
  var h = window.innerHeight;
  var plotw = w * (3.5 / 4);

  useEffect(() => {}, [searchObjectQuote, sortedXValues, sortedYValues]);
  var selectorOptions = {
    buttons: [
      {
        step: "month",
        stepmode: "backward",
        count: 1,
        label: "1m",
      },
      {
        step: "month",
        stepmode: "backward",
        count: 6,
        label: "6m",
      },

      {
        step: "year",
        stepmode: "backward",
        count: 1,
        label: "1y",
      },
      {
        step: "year",
        stepmode: "todate",
        count: 1,
        label: "YTD",
      },
    ],
  };
  return (
    <div className="graph">
      <Plot
        data={[
          {
            x: sortedXValues,
            y: sortedYValues,
            type: "scatter",
            mode: "scatter+marker",
            marker: { color: "lightblue" },
            backgroundColor: "gray",
            fill: "tonexty",
          },
        ]}
        layout={{
          width: plotw,
          height: 740,
          backgroundColor: "gray",
          xaxis: {
            rangeselector: selectorOptions,
          },
          yaxis: {
            fixedrange: true,
          },
        }}
        config={{ displayModeBar: false }}
      />
    </div>
  );
}

export default PlotGraph;
