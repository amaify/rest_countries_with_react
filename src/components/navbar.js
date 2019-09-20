import React from "react";
import MoonOpen from "./svg/moonOpen";
import MoonClose from "./svg/moonClose";

import "../assets/scss/main.css";

const Navbar = ({ click, themeMode }) => {
  return (
    <div className={themeMode ? "nav" : "nav-light"}>
      <h1 className="nav__heading">Where in the World?</h1>
      <div className="nav__switch" onClick={click}>
        {themeMode ? <MoonOpen /> : <MoonClose />}
        {themeMode ? <p>Light Mode</p> : <p>Dark Mode</p>}
      </div>
    </div>
  );
};

export default Navbar;
