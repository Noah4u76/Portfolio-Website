import "./WorkCardStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Workcard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={props.view} className="btn">
            View
          </a>
          <a href="https://github.com/Noah4u76" className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default Workcard;
