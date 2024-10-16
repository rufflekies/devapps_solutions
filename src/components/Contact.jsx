import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex items-center bg-gray-100 justify-center p-4 md:p-16"
    >
      <div className="pt-10 items-center justify-center flex">
      <div className="p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-lg w-full max-w-6xl mx-4 text-center">
        <h1 className="text-3xl md:text-4xl text-white mb-4 font-montserrat font-bold">
          Bangun Aplikasi Impian Anda Bersama DevApps Solution!
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-4 font-montserrat">
          Solusi aplikasi inovatif untuk membawa bisnis Anda ke level
          selanjutnya.
        </p>

        <span className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-10 font-montserrat">
          #DevAppsSolution
        </span>

        <div>
          <a
            href="https://api.whatsapp.com/send?phone=62895330271587&text=Min%2C%20bisa%20tanya%3F"
            className="transition-transform transform hover:scale-105 inline-block px-6 py-3 text-lg font-semibold text-white bg-green-800 rounded-full shadow-lg hover:bg-green-900 font-montserrat"
          >
            Hubungi ↗
          </a>
        </div>
      </div>
      
      </div>
    </section>
  );
};

export default Contact;
