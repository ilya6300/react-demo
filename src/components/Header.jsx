import React from "react";
import calc from "../img/icons8-calculator-67.png";
import '../css/header.css';

const Header = () => {
  return (
      <div className="App-header">
        <h1
        >
          Виджеты на React
        </h1>
        <img className="App-headder-img"
          src={calc}
        />
      </div>
  );
};

export default Header;