
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/footer";

const Header = lazy(() => import('./components/header'));
const Home = lazy(() => import('./components/home'));
const About = lazy(() => import("./components/aboutSection"));
const MyWork = lazy(() => import("./components/myWork"));
const Contact = lazy(() => import("./components/Conatct"));
const MyServices = lazy(() => import("./components/myServices"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Home/>
        <About/>
        <MyServices/>
        <MyWork/>
        <Contact/>
        <Footer/>
      </Suspense>
    </Router>
  );
}

export default App;
