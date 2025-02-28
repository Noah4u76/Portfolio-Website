import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../Assets/Coding-Home3.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, MY NAME IS NOAH SANDERSON.</p>
        <h1>Cybersecurity</h1>
        <p>
          I am a Cybersecurity student at California State University, Fullerton
          and a Cybersecurity Intern at the County of Orange.
        </p>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
