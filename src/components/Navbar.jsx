import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll"; // Import dari react-scroll
import {
  AiOutlineInfoCircle,
  AiOutlineAppstore,
  AiOutlineFile,
  AiOutlineMail,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { GoHomeFill} from "react-icons/go";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { PiAndroidLogoFill } from "react-icons/pi";
import { IoIosPricetag } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TiArrowUpThick } from "react-icons/ti";
import { PiMoonFill } from "react-icons/pi";
import { HiSun } from "react-icons/hi";



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
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  const isActive = (section) => activeSection === section;

  return (
    <nav className="relative">
      {/* Desktop View: Bubble Navigation at the Top */}
      <div
        className={`hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 w-auto z-1000 transition-all duration-300 ease-in-out
    ${
      isScrolled
        ? "bg-white shadow-lg rounded-full py-3 px-6"
        : "bg-white py-3 px-6 rounded-full"
    } `} // Tambahkan ini
        style={{
          marginTop: "1rem",
          fontFamily: "Montserrat, sans-serif",
          zIndex: 1000,
        }}
      >
        {[
          { section: "#hero", label: "Home" },
          { section: "#about", label: "About" },
          { section: "#services", label: "Services" },
          { section: "#pricelist", label: "PriceList" },
          { section: "#contact", label: "Contact" },
        ].map(({ section, label }) => (
          <Link
            key={label}
            to={section.slice(1)} // Menghilangkan '#' agar id benar
            smooth={true}
            duration={500}
            className={`mx-4 font-semibold transition-all duration-300 ${
              isActive(section)
                ? isDarkMode
                  ? "text-white"
                  : "text-blue-500" // Teks aktif: putih di gelap, biru di terang
                : isDarkMode
                ? "text-gray-400"
                : "text-black" // Teks tidak aktif: abu-abu di gelap, hitam di terang
            }`}
            aria-label={`Navigasi ke bagian ${label}`} // Menambahkan teks alternatif untuk aksesibilitas
          >
            {label}
          </Link>
        ))}

        {/* Dark Mode Toggle Button for Desktop */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 bg-white rounded-full flex items-center justify-center"
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
      </div>

      {/* Mobile View: Instagram-style Bottom Navigation Bar */}
      <div
        className={`fixed bottom-0 left-0 w-full rounded-3xl bg-white shadow-top py-3 flex justify-around items-center lg:hidden transition-all duration-300 ease-in-out ${
          isDarkMode ? "shadow-white" : ""
        }`}
        style={{
          zIndex: 1000,
          height: "60px",
          paddingBottom: "30px",
        }}
      >
        {[
          { section: "#hero", icon: <GoHomeFill />, label: "Beranda" },
          {
            section: "#about",
            icon: <TbInfoSquareRoundedFilled  />,
            label: "Tentang Kami",
          },
          {
            section: "#services",
            icon: <PiAndroidLogoFill />,
            label: "Layanan",
          },
          { section: "#pricelist", icon: <IoIosPricetag   />, label: "Harga" },
          { section: "#contact", icon: <BsFillTelephoneFill   />, label: "Kontak" },
        ].map(({ section, icon, label }) => (
          <Link
            key={section}
            to={section.slice(1)} // Menghilangkan '#' untuk id yang benar
            smooth={true}
            duration={500}
            className={`flex flex-col items-center group transition-all duration-300 relative ${
              isActive(section) ? "text-blue-500" : "text-gray-500"
            }`}
            aria-label={label} // Tambahkan teks alternatif untuk aksesibilitas
          >
            {isActive(section) && (
              <div className="rounded-full bg-white p-2 w-16 h-16 flex items-center justify-center absolute -top-5 transform scale-110">
                {React.cloneElement(icon, {
                  className: "text-2xl transition-transform duration-300",
                })}
              </div>
            )}
            {React.cloneElement(icon, {
              className: `text-2xl ${
                isActive(section) ? "text-blue-500" : "text-gray-500"
              }`,
            })}
          </Link>
        ))}
      </div>

      {/* Floating Dark Mode Toggle Button for Mobile */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 md:hidden bg-white shadow-lg rounded-full p-3 flex items-center justify-center text-3xl z-50"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <HiSun /> : <PiMoonFill />}
      </button>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-white shadow-lg rounded-full p-3 flex items-center justify-center text-3xl z-50 transition-all duration-300 ease-in-out"
          aria-label="Scroll to top"
        >
          <TiArrowUpThick  />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
