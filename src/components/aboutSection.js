// About.js
import React from "react";
import '../App.css'
import Image from "../Assets/16569.jpg"
import AboutHeader from "./aboutHeader";
import { Route, Routes } from "react-router-dom";
import SkillSection from "./skillSection";
import EducationSection from "./educationSection";
import ExperianceSection from "./ExperianceSection";

const About = () => {
    return (
        <>
        <div id="aboutSection">
            <div className="leftAbout">
                <div className="imageBox"><img src={Image} alt=""></img></div>
            </div>
            <div className="rightAbout">
                <div className="upperRight">
                    <h1 className="upperHeading">About Me</h1>
                    <p>I'm a diligent MCA student with a robust proficiency in MERN stack, C++, and various other technologies, alongside a solid foundation in Data Structures and Algorithms.</p>
                </div>
                <div className="lowerRight">
                    <AboutHeader />
                    <div className="content">
                        <Routes>
                            <Route path="/skills" element={<SkillSection />} />
                            <Route path="/education" element={<EducationSection />} />
                            <Route path="/experience" element={<ExperianceSection />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
        {/* <svg className="aboutSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0ea9f1" fill-opacity="1" d="M0,160L40,181.3C80,203,160,245,240,250.7C320,256,400,224,480,213.3C560,203,640,213,720,218.7C800,224,880,224,960,229.3C1040,235,1120,245,1200,240C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg> */}
        </>
    );
}

export default About;
