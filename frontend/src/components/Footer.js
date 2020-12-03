import React from "react";

// components
import "./styles/Footer.css";

// other
import { Link as LinkScroll } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <h1>the footer</h1>
      <LinkScroll to="banner" smooth={true} duration={700}>
        <p>back to top</p>
      </LinkScroll>
    </div>
  );
};

export default Footer;
