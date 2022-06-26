import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import About1 from "../Assets/About1.webp";
import About2 from "../Assets/About2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I am a 20 year old self taught coder with the goal to create software
          and develop new ideas. I have always had intrest with the tech field
          and have been involving myself every way I can.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={About1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={About2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
