import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Left: Large Logo */}
        <div className="flex justify-center md:justify-start md:w-1/3">
          <img
            src="/src/assets/logo.png" // Replace with your logo URL
            alt="DevApps Solutions Logo"
            className="h-40 md:h-60"
          />
        </div>

        {/* Center: PT Info & Social Media */}
        <div className="text-center md:text-left md:w-1/3 mt-6 md:mt-0">
          {/* PT Info */}
          <h2 className="text-2xl md:text-3xl font-semibold font-montserrat">
            DevApps Solutions
          </h2>
          <p className="mt-1 text-sm md:text-lg font-montserrat">
            Jl. Rusunawa Dabag<br />
            Condongcatur, Depok, Sleman<br />
            Daerah Istimewa Yogyakarta 55283
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <FaInstagram className="h-8 w-8 bg-white rounded-full p-2 shadow-md hover:bg-blue-50" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <FaFacebookF className="h-8 w-8 bg-white rounded-full p-2 shadow-md hover:bg-blue-50" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <FaYoutube className="h-8 w-8 bg-white rounded-full p-2 shadow-md hover:bg-blue-50" />
            </a>
          </div>
        </div>

        {/* Right: Copyright Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-end mt-8 md:mt-0 text-center md:text-right">
          <p className="font-montserrat">© Copyright 2024</p>
          <a
            href="https://tebardigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 mt-2 font-montserrat"
          >
            DevApps Solutions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
