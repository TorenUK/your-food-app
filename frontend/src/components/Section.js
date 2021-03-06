import React from "react";

// components
import "./styles/Section.css";

const Section = ({ id, title, children }) => {
  return (
    <div id={id} className="section">
      <div className="section__header">
        <h2>{title}</h2>
      </div>
      <div className="section__container">{children}</div>
    </div>
  );
};

export default Section;
