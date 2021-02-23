import React, { useEffect } from "react";
import AppContext from "../Context/app-context";
import "./Result.css";

/**
 * ResultTable component holds the render functions for the resultTable Overview section
 * it is called by parent when the query is filtered and
 * resultTables have been set to the state
 */
function ResultTable() {
  const { searchObject, searchObjectQuote } = React.useContext(AppContext);

  const priceObj = searchObject?.quote?.USD ? searchObject?.quote?.USD : null;

  useEffect(() => {}, [searchObjectQuote]);

  return (
    <div className="resultTables__main">
      <div className="data__view">
        <table className="table">
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Circulating Supply</th>
            <th>Total Supply</th>
            <th>Current Price</th>
            <th>Change 1 hr</th>
            <th>Market Cap</th>
            <th>last updated</th>
          </tr>
          <tr>
            <td>{searchObject.symbol}</td>
            <td>{searchObject.name}</td>
            <td>{searchObject.circulating_supply}</td>
            <td>{searchObject.total_supply}</td>
            <td>$ {priceObj?.price ? priceObj.price.toFixed(5) : ""}</td>
            <td>{priceObj?.percent_change_1h}%</td>
            <td>{priceObj?.market_cap}</td>
            <td>
              {priceObj?.last_updated
                ? priceObj.last_updated.substring(0, 10) +
                  " : " +
                  priceObj.last_updated.substring(11, 19) +
                  " UTC"
                : ""}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ResultTable;
