import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
  const { logo, title, description, linkText, link } = props;

  return (
    <div className="project">
      <Link to={link}>
        {/* 
          Use the logo as a background image. 
          Inline style is used here for demonstration so that it's dynamic, 
          but you could also pass a className that sets the background in CSS. 
        */}
        <div
          className="project-container"
          style={{ backgroundImage: `url(${logo})` }}
        >
          {/* Overlay to dim the background and make text readable */}
          <div className="overlay">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-link">
              <FontAwesomeIcon icon={faLink} className="project-link-icon" />
              <span className="project-link-text">{linkText}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Project;
