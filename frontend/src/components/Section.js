import React from "react";

// components
import "./styles/Section.css";
import Item from "./Item";

const Section = ({ id, title }) => {
  return (
    <div id={id} className="section">
      <div className="section__header">
        <h2>{title}</h2>
      </div>
      <div className="section__container">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Section;
