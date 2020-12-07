import React from "react";

// components
import "./styles/About.css";

// other
import axios from "axios";

const About = () => {
  return (
    <div id="about" className="about">
      <h1>About</h1>
      <div className="about__container">
        <div className="about__text">
          <h2>opening times</h2>
        </div>
        <div className="about__text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
