import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";

const About = () => {
  const imgRef = useRef(null); // Reference untuk gambar

  useEffect(() => {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // Memuat gambar saat terlihat
          img.onload = () => img.classList.remove('hidden'); // Menghapus kelas hidden setelah gambar dimuat
          imgObserver.unobserve(img); // Menghentikan pengamatan pada gambar
        }
      });
    });

    if (imgRef.current) {
      imgObserver.observe(imgRef.current); // Memulai pengamatan gambar
    }

    return () => {
      if (imgRef.current) {
        imgObserver.unobserve(imgRef.current); // Menghentikan pengamatan saat komponen dibongkar
      }
    };
  }, []);

  return (
    <section id="about" className="bg-gray-100 font-montserrat">
      <div className="max-w-6xl mx-auto p-4 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col md:flex-row items-center md:items-start">
          {/* Left side with image */}
          <div className="hidden md:flex justify-center items-center p-6 lg:p-12 w-full md:w-1/2">
            <img
              ref={imgRef}
              data-src="/hero.webp" // Menggunakan data-src untuk lazy load
              alt="Tim DevApps Solutions"
              className="w-3/4 h-auto object-contain lg:max-w-full animate-floating"
              loading="lazy" // Menandakan pemuatan lambat
            />
          </div>

          {/* Right side with content */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mt-8">
              Siapa Kami
            </h2>
            <p className="text-base md:text-lg mb-6">
              "DevApps Solutions berdiri untuk mewujudkan ide inovatif Anda
              menjadi aplikasi mobile. Dengan fokus pada pengembangan melalui
              Android Studio, tim kami yang berpengalaman siap memberikan solusi
              terbaik untuk kebutuhan Anda."
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
