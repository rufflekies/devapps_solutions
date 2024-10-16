import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  const clientLogos = [
    { id: 1, src: "/logo.webp", alt: "Client 1" },
    { id: 2, src: "/logo.webp", alt: "Client 2" },
    { id: 3, src: "/logo.webp", alt: "Client 3" },
    { id: 4, src: "/logo.webp", alt: "Client 4" },
    { id: 5, src: "/logo.webp", alt: "Client 5" },
    { id: 6, src: "/logo.webp", alt: "Client 6" },
  ];

  // Duplicate logos to create a smoother infinite effect
  const logosForSlider = [...clientLogos, ...clientLogos];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous movement
    cssEase: "linear",
    pauseOnHover: false, // Don't pause on hover for continuous effect
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="clients" className="bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold">Klien kami</h1>
        <p className="px-2 text-xl">Kami memiliki klien yang terpercaya.</p>
      </div>

      {/* Infinite Moving Logo Slider */}
      <div className="w-full">
        <Slider {...settings}>
          {logosForSlider.map((logo) => (
            <div key={logo.id} className="px-2">
              {" "}
              {/* Adjusted padding for tighter spacing */}
              <img
                key={logo.id} // Pastikan untuk menambahkan key yang unik
                src={logo.src}
                alt={logo.alt}
                className="h-36 w-auto mx-auto"
                loading="lazy" // Menambahkan lazy loading di sini
                width="144" // Ganti dengan ukuran yang sesuai
                height="144" // Ganti dengan ukuran yang sesuai
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
