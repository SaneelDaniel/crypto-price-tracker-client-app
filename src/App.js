import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import AppState from "./Context/AppState";


function App() {


  return (
    <div className="App">
      <Header />
      <Body  />
    </div>
  );
}

export default () => {
  return (
    <AppState>
      <App />
    </AppState>
  );
};
