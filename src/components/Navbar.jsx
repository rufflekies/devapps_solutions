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
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      setShowScrollToTop(scrollTop > 300);

      const sections = [
        "#hero",
        "#about",
        "#services",
        "#pricelist",
        "#contact",
      ];
      const sectionOffsets = sections.map((section) => {
        const element = document.querySelector(section);
        return element ? element.offsetTop - 50 : 0;
      });

      const currentIndex = sectionOffsets.findIndex(
        (offset, index) =>
          scrollTop >= offset &&
          scrollTop < (sectionOffsets[index + 1] || Infinity)
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
          ${isScrolled ? "bg-white shadow-lg rounded-full py-3 px-6" : "bg-white py-3 px-6 rounded-full"}`}
        style={{
          marginTop: "1rem",
          fontFamily: "Montserrat, sans-serif",
          zIndex: 1000,
        }}
      >
        {["Hero", "About", "Services", "PriceList", "Contact"].map((text, index) => {
          const section = text === "Hero" ? "#hero" : `#${text.toLowerCase()}`;
          return (
            <a
              key={text}
              href={section}
              className={`hover:text-blue-500 ${isActive(section) ? "text-blue-500" : "text-black"} mx-4 font-semibold`}
              aria-label={`Navigasi ke bagian ${text}`} // Menambahkan teks alternatif untuk aksesibilitas
            >
              {text}
            </a>
          );
        })}

        {/* Dark Mode Toggle Button for Desktop */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 bg-white rounded-full flex items-center justify-center"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
      </div>

      {/* Mobile View: Instagram-style Bottom Navigation Bar without text labels */}
      <div
        className="fixed bottom-0 left-0 w-full rounded-3xl bg-white shadow-top py-3 flex justify-around items-center lg:hidden transition-all duration-300 ease-in-out"
        style={{
          zIndex: 1000,
          height: "60px",
          paddingBottom: "30px",
        }}
      >
        {[
          { section: "#hero", icon: <AiOutlineHome />, label: "Beranda" },
          { section: "#about", icon: <AiOutlineInfoCircle />, label: "Tentang Kami" },
          { section: "#services", icon: <AiOutlineAppstore />, label: "Layanan" },
          { section: "#pricelist", icon: <AiOutlineFile />, label: "Harga" },
          { section: "#contact", icon: <AiOutlineMail />, label: "Kontak" },
        ].map(({ section, icon, label }) => (
          <a
            key={section}
            href={section}
            className={`flex flex-col items-center group transition-all duration-300 relative ${isActive(section) ? "text-blue-500" : "text-gray-500"}`}
            aria-label={label} // Tambahkan teks alternatif untuk aksesibilitas
          >
            {isActive(section) && (
              <div className="rounded-full bg-white p-2 w-16 h-16 flex items-center justify-center absolute -top-5 transform scale-110">
                {React.cloneElement(icon, { className: "text-2xl transition-transform duration-300" })}
              </div>
            )}
            {React.cloneElement(icon, {
              className: `text-2xl ${isActive(section) ? "text-blue-500" : "text-gray-500"}`,
            })}
          </a>
        ))}
      </div>

      {/* Floating Dark Mode Toggle Button for Mobile */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 md:hidden bg-white shadow-lg rounded-full p-3 flex items-center justify-center text-3xl z-50"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-white shadow-lg rounded-full p-3 flex items-center justify-center text-3xl z-50 transition-all duration-300 ease-in-out"
          aria-label="Scroll to top"
        >
          <AiOutlineArrowUp />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
