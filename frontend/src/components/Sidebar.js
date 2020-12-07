import React from "react";

// components
import "./styles/Sidebar.css";

// other
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

// redux
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../features/user/userSlice";

const Sidebar = ({ toggleSignUp, toggleLogin, toggleSidebar, userLogout }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <aside className="sidebar__container">
      <div className="sidebar__close">
        <CloseIcon onClick={toggleSidebar} />
      </div>
      <ul className="sidebar__menu">
        {user ? (
          <Link to="/ActiveOrder">
            <li onClick={toggleSidebar} className="sidebar__link">
              Active orders
            </li>
          </Link>
        ) : null}
        <LinkScroll to="about" smooth={true} duration={700}>
          <li onClick={toggleSidebar} className="sidebar__link">
            About
          </li>
        </LinkScroll>
        <li
          onClick={() => {
            toggleSignUp();
            toggleSidebar();
          }}
          className="sidebar__link"
        >
          Sign Up
        </li>
      </ul>
      <div className="sidebar__button">
        {user ? (
          <Button
            onClick={() => {
              dispatch(logout());
              toggleSidebar();
              userLogout(user);
            }}
          >
            logout
          </Button>
        ) : (
          <Button
            onClick={() => {
              toggleLogin();
              toggleSidebar();
            }}
          >
            Sign In
          </Button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
