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
        I am passionate about cybersecurity, and I am always eager to learn new technologies and tools that can help me improve my craft. I look forward to connecting with like-minded professionals and contributing to innovative projects that advance the technology field. Feel free to reach out to me to discuss any potential collaborations or opportunities where I can apply my skills and make a positive impact. Thank you for your attention and interest.
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
