import React from "react";

//components
import "./styles/Nav.css";

// other
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";

// redux
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../features/user/userSlice";

const Nav = ({ toggleSignUp, toggleLogin, toggleSidebar }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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
          {user ? (
            <Button
              onClick={() => {
                dispatch(logout());
              }}
            >
              logout
            </Button>
          ) : (
            <Button onClick={toggleLogin}>login</Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
