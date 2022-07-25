import "./Dropdown.scss";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const onClick = () => setClick(!click);

  return (
    <ul
      onClick={onClick}
      className={
        window.innerWidth <= "930" ? "dropdown-menu clicked" : "dropdown-menu"
      }
    >
      {DropdownMenu().map((item, index) => {
        return (
          <li key={index}>
            <Link
              to={item.path}
              className={item.cName}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
