import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Dropdown from "../components/Dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);

  const onClick = () => setClick(!click);

  const onMouseEnter = () => setDropdown(true);
  const onMouseLeave = () => setDropdown(false);

  return (
    <>
      <div className="header">
        <Link to="/2022">
          <div className="header-logo"></div>
          <div className="header-title">PRISM</div>
        </Link>

        <div className="header-navbar">
          <ul
            className={click ? "navbar-container active" : " navbar-container"}
          >
            <li className="navbar-list">
              <Link to="/2022/about">About</Link>
            </li>
            <li
              className="navbar-list"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {dropdown && <Dropdown />}
              <div className="navbar-list-project">
                <Link to="/2022/project">Project</Link>
                &nbsp;
                <FontAwesomeIcon icon={faCaretDown} className="navBar-arrow" />
              </div>
            </li>
            <li className="navbar-list">
              <Link to="/2022/designer">Desginer</Link>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon
          className="menu-icon"
          icon={click ? faXmark : faBars}
          onClick={onClick}
        />
      </div>
    </>
  );
}

export default Header;
