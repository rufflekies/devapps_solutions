import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineAppstore, AiOutlineFile, AiOutlineMail, AiOutlineArrowUp } from 'react-icons/ai'; 
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      setShowScrollToTop(scrollTop > 300); // Menampilkan tombol jika scroll lebih dari 300px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="relative">
      {/* Desktop View: Bubble Navigation at the Top */}
      <div
        className={`border border-white hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 w-auto z-50 transition-all duration-300 ease-in-out
          ${isScrolled ? 'bg-white shadow-lg rounded-full py-3 px-6' : 'bg-white py-3 px-6 rounded-full'}`}
        style={{ marginTop: '1rem', fontFamily: 'Montserrat, sans-serif' }}
      >
        {/* Navigation Links for Desktop */}
        <a href="#home" className={`hover:text-blue-500 ${isScrolled || isDarkMode ? 'text-blue-500' : 'text-black'} mx-4 font-semibold`}>
          Home
        </a>
        <a href="#about" className={`hover:text-blue-500 ${isScrolled || isDarkMode ? 'text-blue-500' : 'text-black'} mx-4 font-semibold`}>
          About
        </a>
        <a href="#services" className={`hover:text-blue-500 ${isScrolled || isDarkMode ? 'text-blue-500' : 'text-black'} mx-4 font-semibold`}>
          Services
        </a>
        <a href="#pricelist" className={`hover:text-blue-500 ${isScrolled || isDarkMode ? 'text-blue-500' : 'text-black'} mx-4 font-semibold`}>
          PriceList
        </a>
        <a href="#contact" className={`hover:text-blue-500 ${isScrolled || isDarkMode ? 'text-blue-500' : 'text-black'} mx-4 font-semibold`}>
          Contact
        </a>

        {/* Dark Mode Toggle Button for Desktop */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 bg-white rounded-full flex items-center justify-center"
        >
          {isDarkMode ? (
            <BsFillSunFill />
          ) : (
            <BsFillMoonFill />
          )}
        </button>
      </div>

      {/* Mobile View: Bubble Navigation at the Bottom */}
      <div
        className={`flex md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 w-auto z-50 bg-white shadow-lg rounded-full p-4 justify-around space-x-6`}
        style={{ marginBottom: '1rem', fontFamily: 'Montserrat, sans-serif' }}
      >
        {/* Navigation Icons for Mobile */}
        <a href="#home" className={`flex flex-col items-center hover:text-blue-500 ${isScrolled ? 'text-blue-500' : 'text-black'}`}>
          <AiOutlineHome className="text-2xl" />
        </a>
        <a href="#about" className={`flex flex-col items-center hover:text-blue-500 ${isScrolled ? 'text-blue-500' : 'text-black'}`}>
          <AiOutlineInfoCircle className="text-2xl" />
        </a>
        <a href="#services" className={`flex flex-col items-center hover:text-blue-500 ${isScrolled ? 'text-blue-500' : 'text-black'}`}>
          <AiOutlineAppstore className="text-2xl" />
        </a>
        <a href="#pricelist" className={`flex flex-col items-center hover:text-blue-500 ${isScrolled ? 'text-blue-500' : 'text-black'}`}>
          <AiOutlineFile className="text-2xl" />
        </a>
        <a href="#contact" className={`flex flex-col items-center hover:text-blue-500 ${isScrolled ? 'text-blue-500' : 'text-black'}`}>
          <AiOutlineMail className="text-2xl" />
        </a>
      </div>

      {/* Floating Dark Mode Toggle Button for Mobile (Top Right) */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 md:hidden bg-white shadow-lg rounded-full p-3 flex items-center justify-center text-2xl z-50"
      >
        {isDarkMode ? (
          <BsFillSunFill />
        ) : (
          <BsFillMoonFill />
        )}
      </button>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 md:right-10 bg-white shadow-lg rounded-full p-3 flex items-center justify-center text-3xl z-50"
        >
          <AiOutlineArrowUp />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
