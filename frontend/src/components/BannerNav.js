import React from "react";

// components
import "./styles/BannerNav.css";

const BannerNav = () => {
  return (
    <div className="bannerNav">
      <div className="bannerNav__container">
        <div className="bannerNav__segment">starters</div>
        <div className="bannerNav__segment">mains</div>
        <div className="bannerNav__segment">dessert</div>
        <div className="bannerNav__segment">extras</div>
      </div>
    </div>
  );
};

export default BannerNav;
