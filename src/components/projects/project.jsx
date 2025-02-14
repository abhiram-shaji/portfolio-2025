import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
  const { logo, title, description, linkText, link } = props;

  return (
    <div className="project">
      <div
        className="project-container"
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className="overlay">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          {/* Wrap only the project link in <Link> */}
          <Link to={link} className="project-link">
            <FontAwesomeIcon icon={faLink} className="project-link-icon" />
            <span className="project-link-text">{linkText}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
