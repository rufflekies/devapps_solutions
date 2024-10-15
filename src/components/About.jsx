import React from 'react';
import CountUp from 'react-countup';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 font-montserrat">
      <div className="max-w-6xl mx-auto p-4 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col md:flex-row items-center md:items-start">
          {/* Left side with image */}
          <div className="hidden md:block w-full md:w-1/2 justify-center items-center p-6 lg:p-12">
            <img
              src="/hero.png" // Ganti dengan URL gambar yang relevan
              alt="Tim DevApps Solutions"
              className="hidden md:block w-3/4 h-auto object-contain lg:max-w-full animate-floating" // Hide on mobile
            />
          </div>

          {/* Right side with content */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mt-8">Siapa Kami</h2>
            <p className="text-base md:text-lg mb-6">
            "DevApps Solutions berdiri untuk mewujudkan ide inovatif Anda menjadi aplikasi mobile. Dengan fokus pada pengembangan melalui Android Studio, tim kami yang berpengalaman siap memberikan solusi terbaik untuk kebutuhan Anda."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl md:text-3xl font-bold">
                  <CountUp end={3} duration={1} />+
                </h3>
                <p className="text-xs md:text-sm">Tahun Beroperasi</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-2xl md:text-3xl font-bold">
                  <CountUp end={10} duration={1} />+
                </h3>
                <p className="text-xs md:text-sm">Klien Puas</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-2xl md:text-3xl font-bold">
                  <CountUp end={30} duration={1} />+
                </h3>
                <p className="text-xs md:text-sm">Proyek</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-2xl md:text-3xl font-bold">
                  <CountUp end={20} duration={1} />+
                </h3>
                <p className="text-xs md:text-sm">Ahli</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
