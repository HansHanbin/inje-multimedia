import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import NavbarLogo from "../assets/images/navBar-logo-1920.png";
import NavbarLogoSmall from "../assets/images/navBar-logo-390.png";
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
        <div className="header-wrapper">
          <div className="header-container">
            <Link to="/2022">
              <img
                src={NavbarLogo}
                alt="navigation logo"
                className="header-logo"
              />

              <img
                src={NavbarLogoSmall}
                alt="navigation logo"
                className="header-logo-small"
              />
            </Link>

            <div className="header-navbar">
              <ul
                className={
                  click ? "navbar-container active" : " navbar-container"
                }
              >
                <li className="navbar-list">
                  <Link to="/2022/about" className="list-item">
                    About
                  </Link>
                </li>
                <li
                  className="navbar-list"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  {dropdown && <Dropdown />}
                  <div className="navbar-list-project">
                    <Link to="/2022/project" className="list-item">
                      Project
                    </Link>
                    &nbsp;
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="navbar-arrow"
                    />
                  </div>
                </li>
                <li className="navbar-list">
                  <Link to="/2022/designer" className="list-item">
                    Desginer
                  </Link>
                </li>
              </ul>
            </div>
            <FontAwesomeIcon
              className="menu-icon"
              icon={click ? faXmark : faBars}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
