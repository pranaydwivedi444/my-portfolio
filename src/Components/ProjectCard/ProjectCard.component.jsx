import React from "react";
import "./ProjectCard.styles.css";

const ProjectCard = ({ title, description, image, codeLink, liveLink }) => {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
        <div className="project-details">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <div className="project-links">
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
