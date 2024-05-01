import React from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component

const Projects = () => {
  const cardsData = [
    { id: 1, title: 'RoomEase-Room Rental Web App', tech: 'MERN Stack | JWT', imgUrl: 'https://unsplash.it/200/200' },
    { id: 2, title: 'DomConnect-A Social Media Web App', tech: 'MERN Stack | Reedux | JWT', imgUrl: 'https://unsplash.it/201/200' },
    { id: 3, title: 'FreshCart-Grocery Web App', tech: 'MERN Stack | Redux | JWT', imgUrl: 'https://unsplash.it/200/201' },
    
  ];

  return (
    <div className="projectcontainer">
      {/* <h1 style={{ textAlign: 'center' }}>React Card Slider</h1> */}
      <div className="project-cards-container">
        {cardsData.map((card) => (
          <ProjectCard
            key={card.id}
            title={card.title}
            tech={card.tech}
            imgUrl={card.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
