import React, { useState, useEffect } from "react";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineAppstore,
  AiOutlineFile,
  AiOutlineMail,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      setShowScrollToTop(scrollTop > 300);

      const sections = ["#home", "#about", "#services", "#pricelist", "#contact"];
      const sectionOffsets = sections.map((section) => {
        const element = document.querySelector(section);
        return element ? element.offsetTop - 50 : 0;
      });

      const currentIndex = sectionOffsets.findIndex(
        (offset, index) =>
          scrollTop >= offset && scrollTop < (sectionOffsets[index + 1] || Infinity)
      );

      setActiveSection(sections[currentIndex]);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isActive = (section) => activeSection === section;

  return (
    <nav className="relative">
      {/* Desktop View: Bubble Navigation at the Top */}
      <div
        className={`border border-white hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 w-auto z-1000 transition-all duration-300 ease-in-out
          ${isScrolled ? "bg-white shadow-lg rounded-full py-3 px-6" : "bg-white py-3 px-6 rounded-full"
          }`}
        style={{ marginTop: "1rem", fontFamily: "Montserrat, sans-serif", zIndex: 1000 }}
      >
        <a
          href="#home"
          className={`hover:text-blue-500 ${isScrolled || isDarkMode ? "text-blue-500" : "text-black"
            } mx-4 font-semibold`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`hover:text-blue-500 ${isScrolled || isDarkMode ? "text-blue-500" : "text-black"
            } mx-4 font-semibold`}
        >
          About
        </a>
        <a
          href="#services"
          className={`hover:text-blue-500 ${isScrolled || isDarkMode ? "text-blue-500" : "text-black"
            } mx-4 font-semibold`}
        >
          Services
        </a>
        <a
          href="#pricelist"
          className={`hover:text-blue-500 ${isScrolled || isDarkMode ? "text-blue-500" : "text-black"
            } mx-4 font-semibold`}
        >
          PriceList
        </a>
        <a
          href="#contact"
          className={`hover:text-blue-500 ${isScrolled || isDarkMode ? "text-blue-500" : "text-black"
            } mx-4 font-semibold`}
        >
          Contact
        </a>

        {/* Dark Mode Toggle Button for Desktop */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 bg-white rounded-full flex items-center justify-center"
        >
          {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
      </div>

      {/* Mobile View: Instagram-style Bottom Navigation Bar without text labels */}
      <div
  className="fixed bottom-0 left-0 w-full rounded-3xl bg-white shadow-top py-3 flex justify-around items-center lg:hidden transition-all duration-300 ease-in-out"
  style={{     
    zIndex: 1000,
    height: "60px", // Adjust this value as needed
    paddingBottom: "30px", // Adjust padding if necessary
  }}  
>
  {/* Navigation with active/hover effect and pop-out semi-circular shapes */}
  <a
  href="#home"
  className={`flex flex-col items-center group transition-all duration-300 relative ${isActive("#home") ? "text-blue-500" : "text-gray-500"}`}
>
  {isActive("#home") && (
    <div className="rounded-full bg-white p-2 w-16 h-16 flex items-center justify-center absolute -top-5 transform scale-110">
      <AiOutlineHome className="text-2xl transition-transform duration-300" />
    </div>
  )}
  <AiOutlineHome
    className={`text-2xl ${isActive("#home") ? "text-blue-500" : "text-gray-500"} ${isActive("#home") ? "" : "mt-2"} group-hover:border-4 group-hover:border-blue-500 group-hover:opacity-50 transition-all duration-300`}
  />
</a>

<a
  href="#about"
  className={`flex flex-col items-center group transition-all duration-300 relative ${isActive("#about") ? "text-blue-500" : "text-gray-500"}`}
>
  {isActive("#about") && (
    <div className="rounded-full bg-white p-2 w-16 h-16 flex items-center justify-center absolute -top-5 transform scale-110">
      <AiOutlineInfoCircle className="text-2xl transition-transform duration-300" />
    </div>
  )}
  <AiOutlineInfoCircle
    className={`text-2xl ${isActive("#about") ? "text-blue-500" : "text-gray-500"} ${isActive("#about") ? "" : "mt-2"} group-hover:border-4 group-hover:border-blue-500 group-hover:opacity-50 transition-all duration-300`}
  />
</a>

<a
  href="#services"
  className={`flex flex-col items-center group transition-all duration-300 relative ${isActive("#services") ? "text-blue-500" : "text-gray-500"}`}
>
  {isActive("#services") && (
    <div className="rounded-full bg-white p-2 w-16 h-16 flex items-center justify-center absolute -top-5 transform scale-110">
      <AiOutlineAppstore className="text-2xl transition-transform duration-300" />
    </div>
  )}
  <AiOutlineAppstore
    className={`text-2xl ${isActive("#services") ? "text-blue-500" : "text-gray-500"} ${isActive("#services") ? "" : "mt-2"} group-hover:border-4 group-hover:border-blue-500 group-hover:opacity-50 transition-all duration-300`}
  />
</a>

<a
  href="#pricelist"
  className={`flex flex-col items-center group transition-all duration-300 relative ${isActive("#pricelist") ? "text-blue-500" : "text-gray-500"}`}
>
  {isActive("#pricelist") && (
    <div className="rounded-full bg-white p-2 w-16 h-16 flex items-center justify-center absolute -top-5 transform scale-110">
      <AiOutlineFile className="text-2xl transition-transform duration-300" />
    </div>
  )}
  <AiOutlineFile
    className={`text-2xl ${isActive("#pricelist") ? "text-blue-500" : "text-gray-500"} ${isActive("#pricelist") ? "" : "mt-2"} group-hover:border-4 group-hover:border-blue-500 group-hover:opacity-50 transition-all duration-300`}
  />
</a>

<a
  href="#contact"
  className={`flex flex-col items-center group transition-all duration-300 relative ${isActive("#contact") ? "text-blue-500" : "text-gray-500"}`}
>
  {isActive("#contact") && (
    <div className="rounded-full bg-white p-2 w-16 h-16 flex items-center justify-center absolute -top-5 transform scale-110">
      <AiOutlineMail className="text-2xl transition-transform duration-300" />
    </div>
  )}
  <AiOutlineMail
    className={`text-2xl ${isActive("#contact") ? "text-blue-500" : "text-gray-500"} ${isActive("#contact") ? "" : "mt-2"} group-hover:border-4 group-hover:border-blue-500 group-hover:opacity-50 transition-all duration-300`}
  />
</a>

</div>

      {/* Floating Dark Mode Toggle Button for Mobile */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-20 left-4 md:hidden bg-white shadow-lg rounded-full p-3 flex items-center justify-center text-3xl z-50"
      >
        {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg z-50"
        >
          <AiOutlineArrowUp />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
