import React from "react";
import { Routes , Route } from "react-router-dom";
import Home from "./Components/Home"
import About from "./Components/About"
import Navbar from "./Components/Navbar"
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Foot from "./Components/Footer";




function App() {
  return (
    <>
      <Navbar/>
      <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/About" element={<About/>}></Route>
                <Route path="/Services" element={<Services/>}></Route>
                <Route path="/Testimonials" element={<Testimonials/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
      <Foot/>
      


    </>
  );
}

export default App