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
          Hello! My name is Noah Sanderson. A 21 year-old aspiring software
          engineer who is currently pursing a bachelors degree in computer
          science. I have experience with C++, Javascript, HTML, CSS, React.js.
          Some hobbies of mine are playing video games, building PC's, and
          working on cars. My goals is to finish my computer science degree and
          build valuable skills to pursue a career as a software engineer.
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
