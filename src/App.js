import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Home from './components/home';
import About from "./components/aboutSection";
import MyWork from "./components/myWork";
import Conatct from "./components/Conatct";
import Footer from "./components/footer";
import MyServices from "./components/myServices";


function App() {
  return (
    <Router>
      {/* <div> */}
        <Header />
        <Home/>
        <About/>
        <MyServices/>
        <MyWork/>
        <Conatct/>
        <Footer/>
      {/* </div> */}
    </Router>
  );
}

export default App;
