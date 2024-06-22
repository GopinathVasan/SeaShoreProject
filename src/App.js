import './App.css';
import Navbar from "./routers/Navbar.js";
import Home from "./routers/Home";
import Service from "./routers/Service.js";
import About from "./routers/About.js";
import React from 'react';
import Footer from './routers/Footer.js';
import Contact from './routers/Contact.js';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <>
      <Home/>
      <Service/>
      <About/>
      <Contact/>
      </>
      <Footer/>
    </div>
  );
}

export default App;
