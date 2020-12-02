import React from "react";

//components
import "./styles/Nav.css";

// other
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";

const Nav = ({ toggleSignUp, toggleLogin, toggleSidebar }) => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <h1>Your Food App.</h1>
        </div>
        <div className="nav__burger">
          <MenuIcon onClick={toggleSidebar} />
        </div>
        <div className="nav__menu">
          <ul className="nav__links">
            <li className="nav__item">Orders</li>
            <li className="nav__item">About</li>
            <li onClick={toggleSignUp} className="nav__item">
              Sign Up
            </li>
          </ul>
        </div>
        <div className="nav__button">
          <Button onClick={toggleLogin}>Sign In</Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
