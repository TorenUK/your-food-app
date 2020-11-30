import React from "react";

// components
import "./styles/BannerNav.css";

// other
import { Link as LinkScroll } from "react-scroll";

const BannerNav = () => {
  return (
    <div className="bannerNav">
      <div className="bannerNav__container">
        <div className="bannerNav__segment">
          <LinkScroll to="starters" smooth={true} duration={700}>
            <p>starters</p>
          </LinkScroll>
        </div>
        <div className="bannerNav__segment">
          <LinkScroll to="mains" smooth={true} duration={700}>
            <p>mains</p>
          </LinkScroll>
        </div>
        <div className="bannerNav__segment">
          <LinkScroll to="desserts" smooth={true} duration={700}>
            <p>desserts</p>
          </LinkScroll>
        </div>
        <div className="bannerNav__segment">
          <LinkScroll to="extras" smooth={true} duration={700}>
            <p>extras</p>
          </LinkScroll>
        </div>
      </div>
    </div>
  );
};

export default BannerNav;
