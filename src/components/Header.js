import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="header-logo"></div>
          <div className="header-title">PRISM</div>
        </Link>

        <div className="header-navbar">
          <ul className="navbar-container">
            <li className="navbar-list">
              <Link to="/">About</Link>
            </li>
            <li className="navbar-list">
              <Link to="/">Project</Link>
            </li>
            <li className="navbar-list">
              <Link to="/">Desginer</Link>
            </li>
            <li className="navbar-list">
              <Link to="/">Tags</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
