import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderAbout.scss";
import NavbarLogo from "../assets/images/0818Images/1920/about_GNB logo.png";
import NavbarLogoSmall from "../assets/images/0818Images/390/about_GNB logo.png";
import Dropdown from "./Dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);

  const onClick = () => setClick(!click);

  const onMouseEnter = () => setDropdown(true);
  const onMouseLeave = () => setDropdown(false);

  return (
    <>
      <div className="headerAbout">
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
                <li
                  className={
                    click === true ? "navbar-list-active" : "navbar-list"
                  }
                >
                  <FontAwesomeIcon
                    className={
                      click === true
                        ? "menu-icon-mobile-active"
                        : "menu-icon-mobile"
                    }
                    icon={faXmark}
                    onClick={onClick}
                  />
                </li>
                <li
                  className={
                    click === true ? "navbar-list-active" : "navbar-list"
                  }
                >
                  <Link to="/2022/about" className="list-item">
                    About
                  </Link>
                </li>
                <li
                  className={
                    click === true ? "navbar-list-active" : "navbar-list"
                  }
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
                      icon={faAngleDown}
                      className="navbar-arrow"
                    />
                  </div>
                </li>
                <li
                  className={
                    click === true ? "navbar-list-active" : "navbar-list"
                  }
                >
                  <Link to="/2022/designer" className="list-item">
                    Desginer
                  </Link>
                </li>
              </ul>
            </div>
            <FontAwesomeIcon
              className="menu-icon"
              icon={faBars}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
