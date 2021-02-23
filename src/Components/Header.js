import React from "react";
import "./Header.css";

/**
 *  Header Component for the app
 */
function Header() {
  return (
    <div className="header__container">
      <h1>Cobalt Lend Crypto Price Tracker</h1>
      <img
        src="https://cobaltlend.com/wp-content/uploads/2020/08/LOGO-SIMPLE2.png"
        alt=""
      />
    </div>
  );
}

export default Header;
