import React from 'react'
import Card from './card';

const MyServices = () => {
  return (
    <div className='myServices' id="myServices">
        <div className='upperService'><h1>My Services</h1></div>
        <div className='lowerService'>
            <Card title="Frontend Development" content="As a frontend developer with expertise in React and other leading libraries, I excel in creating stunning user interfaces that elevate websites to their fullest potential."/>
            <Card title="Full stack Development" content="As a fullstack developer proficient in the MERN stack (MongoDB, Express.js, React, Node.js), along with technologies like GraphQL and Redux, I specialize in building dynamic and scalable web applications."/>
            <Card title="Open-Source Contribution" content="Proficient in Git for version control and collaboration, with experience contributing to diverse open-source projects. Skilled in various programming languages including JavaScript, Python, and Java, enabling effective participation in different project environments."/>
        </div>
      
    </div>
  )
}

export default MyServices;
