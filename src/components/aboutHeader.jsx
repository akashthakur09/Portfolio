import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import EducationSection from "./educationSection";
import SkillSection from "./skillSection";
import ExperianceSection from "./ExperianceSection";

const AboutHeader =()=>{
    return(
        <div className="aboutHeader">
            <ul>
                <li>
                    <Link to="/skills" style={{textDecoration:'none'}}>Skills</Link>
                </li>
                <li>
                    <Link to="/education" style={{textDecoration:'none'}}>Education</Link>
                </li>
                <li>
                    <Link to="/experience" style={{textDecoration:'none'}}>Experience</Link>
                </li>
            </ul>
        </div>
    )
}

export default AboutHeader;