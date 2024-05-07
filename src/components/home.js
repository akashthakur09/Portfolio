import React from "react";
import "../App.css";
import { IoMdMail } from "react-icons/io";
import HomeIcons from './homeicons';


const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="homeSection" id="home">
        <div className="home-left-div">
          <h1>
            I'm Akash Thakur
          </h1>
          <h4>Software Developer & Programmer</h4>
          <p>Building digital experiences that matter.</p>
          <button
            className="home-btn"
            style={{ fontFamily: '"Dosis", sans-serif' }}
            onClick={() => scrollToSection("contact")}
          >
            let's Work Together
          </button>
        </div>

        <div className="home-right-div">
          {/* <img src={Image} alt=""></img> */}
          <div className="social-icons">
          <HomeIcons/>
          </div>
          <h2 style={{marginBottom:"10px",fontSize:"20px"}}>Check out my GitHub Account</h2>
          <button className="github-home-btn" onClick={() => window.open("https://github.com/akashthakur09")}>
            
            <span>My GitHub</span>
          </button>
        </div>
      </div>

      <div className="res-homeSection">
        <div className="res-home-left-div">
        <h1>
            I'm Akash Thakur
          </h1>
          <h4>Software Developer & Programmer</h4>
          <p>Building digital experiences that matter.</p>
          <button
            className="res-home-btn"
            style={{ fontFamily: '"Dosis", sans-serif' }}
            onClick={() => scrollToSection("contact")}
          >
            let's Work Together
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
