// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';
// import Header from './components/header';
// import Home from './components/home';
// import About from "./components/aboutSection";
// import MyWork from "./components/myWork";
// import Conatct from "./components/Conatct";
// import Footer from "./components/footer";
// import MyServices from "./components/myServices";


// function App() {
//   return (
//     <Router>
//       {/* <div> */}
//         <Header />
//         <Home/>
//         <About/>
//         <MyServices/>
//         <MyWork/>
//         <Conatct/>
//         <Footer/>
//       {/* </div> */}
//     </Router>
//   );
// }

// export default App;
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
