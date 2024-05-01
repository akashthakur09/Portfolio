import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgUrl} alt={props.alt || 'Image'} />
      <div className="project-card-content">
        <h1>{props.title}</h1>
        <p>{props.tech}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
