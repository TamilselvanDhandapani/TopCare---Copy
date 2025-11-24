import React from 'react'

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from './Pages/Footer';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Service';
import Facility from './Pages/Facility';
import SpeechTrainingServices from './Pages/SpeechTrainingServices';

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/facilities" element={<Facility/>}/>
          <Route path="/speech-therapy" element={<SpeechTrainingServices/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App