import React from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
import roomease from '../Assets/roomease.jpg'
import domconnect from '../Assets/Dom.png'
import freshfeast from '../Assets/freshfeast.jpeg'

const Projects = () => {
  const cardsData = [
    { id: 1, title: 'RoomEase-Room Rental Web App', tech: 'MERN Stack | JWT', imgUrl: roomease , githubLink:'https://github.com/akashthakur09/RoomEase---website-for-room-service.git',liveLink:'https://roomease-website-for-room-service.onrender.com/'},
    { id: 2, title: 'DomConnect-A Social Media Web App', tech: 'MERN Stack | Reedux | JWT', imgUrl: domconnect ,githubLink:'https://github.com/akashthakur09/DomConnect--Social-Media-Platform.git',liveLink:'https://domconnect-social-media-platform.onrender.com/'},
    { id: 3, title: 'FreshCart-Grocery Web App', tech: 'MERN Stack | Redux | JWT', imgUrl: freshfeast ,githubLink:'https://github.com/akashthakur09/FreashFeast--Online-Grocery-Website-.git',liveLink:'https://github.com/akashthakur09/FreashFeast--Online-Grocery-Website-.git'},
    
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
            githubLink={card.githubLink}
            liveLink={card.liveLink}
            imgUrl={card.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
