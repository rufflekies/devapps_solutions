import React from "react";
import { scroller } from "react-scroll"; // Gunakan scroller dari react-scroll

const Hero = () => {
  // Fungsi untuk menangani smooth scroll
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <section
      id="hero"
      className="bg-gray-100 relative overflow-hidden flex flex-col lg:flex-row"
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center p-6 lg:p-24">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl font-montserrat lg:pb-0 text-center lg:text-left">
          “DevApps Solutions: Ubah Idemu Jadi Kenyataan"
        </h1>

        {/* Image above buttons in mobile view */}
        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 lg:hidden">
          <div className="flex justify-center pt-2">
            <img
              src="/hero.webp"
              alt="Mobile Mockup"
              className="w-full max-w-xs h-auto object-contain animate-floating"
              width="400"
              height="500"
            />
          </div>

          <p className="mt-6 text-lg max-w-md font-montserrat text-center">
            Kami adalah mitra terpercaya dalam mengembangkan aplikasi mobile
            menggunakan Android Studio, untuk solusi bisnis Anda.
          </p>

          <div className="flex flex-col space-y-4 mt-4">
            <div className="flex flex-row space-x-4">
              <a
                href="#pricelist" // Tambahkan href yang valid untuk SEO
                onClick={(e) => {
                  e.preventDefault(); // Mencegah aksi default anchor
                  scrollToSection("pricelist"); // Fungsi smooth scroll
                }}
                className="transition-transform transform hover:scale-105 font-montserrat flex-1 px-6 py-3 bg-indigo-600 text-center text-white rounded-md font-semibold hover:bg-indigo-700"
              >
                Penawaran
              </a>
              <a
                href="#contact" // Tambahkan href yang valid untuk SEO
                onClick={(e) => {
                  e.preventDefault(); // Mencegah aksi default anchor
                  scrollToSection("contact"); // Fungsi smooth scroll
                }}
                className="transition-transform transform hover:scale-105 bg-white shadow-lg font-montserrat text-center flex-1 px-6 py-3 rounded-md font-semibold hover:bg-indigo-700"
              >
                Hubungi
              </a>
            </div>
          </div>
        </div>

        {/* Deskripsi untuk desktop */}
        <p className="mt-6 text-lg max-w-md font-montserrat hidden lg:block">
          Kami adalah mitra terpercaya dalam mengembangkan aplikasi mobile
          menggunakan Android Studio, untuk solusi bisnis Anda.
        </p>

        {/* Tombol untuk Desktop */}
        <div className="mt-8 flex-col sm:flex-row sm:space-x-4 hidden lg:flex">
          <a
            href="#pricelist" // Tambahkan href yang valid untuk SEO
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("pricelist");
            }}
            className="transition-transform transform hover:scale-105 font-montserrat px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700"
          >
            Penawaran
          </a>
          <a
            href="#contact" // Tambahkan href yang valid untuk SEO
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="transition-transform transform hover:scale-105 font-montserrat text-center bg-white px-6 py-3 shadow-lg rounded-md font-semibold hover:bg-white"
          >
            Hubungi
          </a>
        </div>
      </div>

      {/* Right Image for Desktop */}
      <div className="pt-20 flex-1 items-center justify-center hidden lg:flex lg:order-last">
        <img
          src="/hero.webp"
          alt="Mobile Mockup"
          className="w-3/4 h-auto object-contain animate-floating lg:max-w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
