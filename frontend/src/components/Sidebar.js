import React from "react";

// components
import "./styles/Sidebar.css";

// other
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

const Sidebar = ({ toggle }) => {
  return (
    <aside className="sidebar__container">
      <div className="sidebar__close">
        <CloseIcon onClick={toggle} />
      </div>
      <ul className="sidebar__menu">
        <li onClick={toggle} className="sidebar__link">
          Orders
        </li>
        <li onClick={toggle} className="sidebar__link">
          About
        </li>
        <li onClick={toggle} className="sidebar__link">
          Sign Up
        </li>
      </ul>
      <div className="sidebar__button">
        <Button>Sign In</Button>
      </div>
    </aside>
  );
};

export default Sidebar;
