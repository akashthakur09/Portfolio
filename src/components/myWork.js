import React from 'react'
import Projects from './Projects';

function MyWork() {
  return (
    <>
      <svg className='myWorkSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill='#091a36' fill-opacity="1" d="M0,160L80,170.7C160,181,320,203,480,176C640,149,800,75,960,58.7C1120,43,1280,85,1360,106.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      <div className='myWork' id="projects">
        <div className='myWorkHeading'><h1>My Projects</h1></div>
        <div className='myWorkContent'>
            <Projects/>
        </div>
      </div>
  </>
  )
}

export default MyWork;
