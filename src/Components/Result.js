import React, { useEffect } from "react";
import AppContext from "../Context/app-context";
import "./Result.css";

function Result() {
  const { searchObject, searchObjectQuote } = React.useContext(AppContext);

  const priceObj = searchObject?.quote?.USD ? searchObject?.quote?.USD : null;

  useEffect(() => {}, [searchObjectQuote]);

  return (
    <div className="results__main">
      <div className="data__view">
        <table className="table">
          <tr>
            <th marginleft="5px !important" position='left' padding='5px'>Overview</th>
            <th></th>
          </tr>
          <tr>
            <td>Symbol:</td>
            <td>{searchObject.symbol}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{searchObject.name}</td>
          </tr>
          <tr>
            <td>circulating_supply:</td>
            <td>{searchObject.circulating_supply}</td>
          </tr>
          <tr>
            <td>total_supply:</td>
            <td>{searchObject.total_supply}</td>
          </tr>
          <tr className="price">
            <td>price:</td>
            <td>$ {priceObj?.price}</td>
          </tr>
          <tr>
            <td>Percent Change 1 hr:</td>
            <td>{priceObj?.percent_change_1h}%</td>
          </tr>
          <tr>
            <td>Market Cap:</td>
            <td>{priceObj?.market_cap}</td>
          </tr>

          <tr>
            <td>last updated:</td>
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

export default Result;
