import React, { useEffect, useState } from "react";
import "./Body.css";
import Result from "./Result";
import PlotGraph from "./PlotGraph";
import supportedTickers from "./csvHelper";
import { FaSearch } from "react-icons/fa";
import AppContext from "../Context/app-context";

function Body() {
  const { searchObjectQuote } = React.useContext(AppContext);
  const {
    SET_SEARCH_NAME,
    SET_SEARCH_OBJECT,
    SET_SEARCH_OBJECT_QUOTE,
    SET_SORTED_X_VALUE,
    SET_SORTED_Y_VALUE,
  } = React.useContext(AppContext);

  const [searchInput, setSearchInput] = useState("");
  const [dataFound, setDataFound] = useState(false);
  const [sortedX, setSortedX] = useState([]);
  const [sortedY, setSortedY] = useState([]);
  const [showGraph, setShowGraph] = useState(false);

  useEffect(() => {}, [searchObjectQuote]);

  let SEARCH_TICKER_API_URL = `https://crypto-tracker-proxy-api.herokuapp.com/live?symbol=${searchInput}`;
  let SEARCH_DAILYDATA_API_URL = `https://crypto-tracker-proxy-api.herokuapp.com/daily?symbol=${searchInput}`;

  const parseData = () => {
    var count = 1;
    
    if (searchObjectQuote !== {}) {
      if (sortedX !== []) {
        var datesAndOpenValuePairArrray = [];
        var plotXDateValues = [];
        var plotYPriceValue = [];
        for (var i in searchObjectQuote) {
          datesAndOpenValuePairArrray = [
            ...datesAndOpenValuePairArrray,
            [i, searchObjectQuote[i]["1a. open (USD)"]],
          ];
          plotXDateValues = [...plotXDateValues, i];
          plotYPriceValue = [
            ...plotYPriceValue,
            searchObjectQuote[i]["1a. open (USD)"],
          ];
          count++;
          if (count > 30) {
            break;
          }
        }

        for (var i = datesAndOpenValuePairArrray.length - 1; i >= 0; i--) {
          sortedX.push(plotXDateValues[i]);
          sortedY.push(plotYPriceValue[i]);
        }

        if (sortedX.length > 0) {
          SET_SORTED_X_VALUE(sortedX);
          SET_SORTED_Y_VALUE(sortedY);
          setSortedX([]);
          setSortedY([]);
        }
      }
    }
  };

  const sendDataRequest = async () => {
    if (searchInput !== "") {
      fetch(SEARCH_DAILYDATA_API_URL)
        .then((response) => response.json())
        .then((json) => {
          SET_SEARCH_OBJECT_QUOTE(json["Time Series (Digital Currency Daily)"]);

          parseData();

          setShowGraph(true);
        })
        .catch((err) => {
          window.alert(err);
        });
    }
  };

  const sendSearchRequest = async (e) => {
    e.preventDefault();
    setShowGraph(false);
    if (searchInput !== "") {
      let myPromise = new Promise(function (myResolve, myReject) {
        fetch(SEARCH_TICKER_API_URL)
          .then((response) => response.json())
          .then((json) => {
            if (json.status.error_code === 0) {
              if (json.data) {
                for (var i in json.data) {
                  myResolve(json.data[i]);
                }
              }
            } else {
              window.alert(json.status.error_message);
            }
          })
          .catch((err) => {
            window.alert(err);
          });
      });
      myPromise.then(function (json) {
        SET_SEARCH_NAME(searchInput);
        SET_SEARCH_OBJECT(json);
        sendDataRequest();
        setDataFound(true);
      });
    }
  };

  return (
    <div className="body__container">
      <div className="body__header">
        <div className="body__searchContainer">
          <h3>Search For your desired Ticker Symbol</h3>
          <FaSearch />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Search"
            style={{
              height: "22px",
              color: "black",
              borderRadius: "10px",
              marginLeft: "5px",
              flex: "1",
              border: "0.5px solid lightgrey",
              outline: "none",
              background: "none",
            }}
          />
          <button
            onClick={sendSearchRequest}
            type="submit"
            style={{
              height: "95%",
              color: "black",
              borderRadius: "10px",
              fontSize: "20px",
            }}
          >
            Overview
          </button>
          <button
            onClick={sendDataRequest}
            style={{
              height: "95%",
              color: "black",
              borderRadius: "10px",
              fontSize: "20px",
            }}
          >
            Reload Graph
          </button>
          <h4>
            <span>{"<-"} Click to reload the graph</span>
            <span> </span>
          </h4>
        </div>
      </div>

      <div className="table">
        {dataFound && (
          <div>
            <Result></Result>
          </div>
        )}
      </div>
      <div className="plot">{showGraph && <PlotGraph />}</div>
    </div>
  );
}

export default Body;
