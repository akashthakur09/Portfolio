
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react"; // Import the hamburger icon
import resumePdf from "../Assets/AkashThakur.pdf";
import "../App.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false); // State for controlling the menu

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.setAttribute("download", "Akash_Thakur_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    <div className="navBar">
      <div className="logo">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className="logoLink"
        >
          Akash Thakur
        </Link>
      </div>
      <div>
        <ul className="nav-list">
          <li className="nav-li">
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/about" style={{ textDecoration: "none" }}>
              About Me
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/projects" style={{ textDecoration: "none"}}>
              My Work
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/contact" style={{ textDecoration: "none" }}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button
          className="navBtn"
          style={{ textDecoration: "none" }}
          onClick={downloadResume}
        >
          <span class="button__text">Resume</span>
          <span className="button__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 35 35"
              id="bdd05811-e15d-428c-bb53-8661459f9307"
              data-name="Layer 2"
              class="svg"
            >
              <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
              <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
              <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
            </svg>
          </span>
        </button>
      </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    </div>
    <div className="hamburger-menu">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />{" "}
        
        {isOpen && (
          <ul className="hamburger-list">
            
            <li className="hamburgerli">
              <Link to="/" style={{ textDecoration: "none",fontWeight:"bold" }}>
                Home
              </Link>
            </li>
            <li className="hamburgerli">
              <Link to="/about" style={{ textDecoration: "none",fontWeight:"bold" }}>
                About Me
              </Link>
            </li>
            <li className="hamburgerli">
              <Link to="/projects" style={{ textDecoration: "none",fontWeight:"bold" }}>
                My Work
              </Link>
            </li>
            <li className="hamburgerli">
              <Link to="/contact" style={{ textDecoration: "none",fontWeight:"bold"}}>
                Contact Me
              </Link>
            </li>
            <li className="hamburgerliBtn">
            <button
          className="hamburgerBtn"
          style={{ textDecoration: "none" }}
          onClick={downloadResume}
        >
          <span class="button__text">Resume</span>
          <span className="button__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 35 35"
              id="bdd05811-e15d-428c-bb53-8661459f9307"
              data-name="Layer 2"
              class="svg"
            >
              <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
              <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
              <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
            </svg>
          </span>
        </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
