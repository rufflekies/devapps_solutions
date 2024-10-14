// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients'; 
import Pricelist from './components/Pricelist';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients /> 
      <Pricelist />{/* Tambahkan Clients di sini */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
