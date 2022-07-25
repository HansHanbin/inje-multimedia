import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Dropdown from "../components/Dropdown/Dropdown";

function Header() {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => setDropdown(true);
  const onMouseLeave = () => setDropdown(false);

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
              <Link to="/about">About</Link>
            </li>
            <li
              className="navbar-list"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {dropdown && <Dropdown />}
              <Link to="/project/dc-studio">Project</Link>
            </li>
            <li className="navbar-list">
              <Link to="/designer">Desginer</Link>
            </li>
            <li className="navbar-list">
              <Link to="/tags">Tags</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
