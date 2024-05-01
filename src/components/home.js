import React from "react";
import '../App.css'
import Image from '../Assets/3d-portrait-people.jpg'
// import Header from "./header";

const Home=()=>{
    return(
        <>
        <div className="homeSection">
            
            <div className="home-left-div">
                <h1>Welcome to My<br></br>Design Portfolio</h1>
                <p>I'am Akash Thakur a Full stack Developer and Programmer. </p>
                <button className="home-btn" style={{ fontFamily: '"Dosis", sans-serif' }}>let's Work Together</button>
            </div>
            
            <div className="home-right-div">
                <img src={Image} alt=""></img>
            </div>
        </div>

        <div className="res-homeSection">
            
            <div className="res-home-left-div">
                <h1>Welcome to My<br></br>Design Portfolio</h1>
                <p>I'am Akash Thakur a Full stack Developer and Programmer. </p>
                <button className="res-home-btn" style={{ fontFamily: '"Dosis", sans-serif' }}>let's Work Together</button>
            </div>
            
        </div>
        <svg className="homeBorder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="" fill-opacity="1" d="M0,0L80,21.3C160,43,320,85,480,96C640,107,800,85,960,106.7C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        </>
    );
}

export default Home;