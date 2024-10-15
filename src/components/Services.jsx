import React from "react";
import { FaMobileAlt, FaCode, FaTools, FaChartLine } from "react-icons/fa";

const featuresData = [
  {
    icon: <FaMobileAlt size={48} className="text-blue-600 mb-4" />,
    title: "Aplikasi Mobile",
    description: "Pembuatan aplikasi mobile kebutuhan.",
  },
  {
    icon: <FaCode size={48} className="text-blue-600 mb-4" />,
    title: "Backend",
    description: "Solusi backend yang kuat dan scalable.",
  },
  {
    icon: <FaTools size={48} className="text-blue-600 mb-4" />,
    title: "Pemeliharaan",
    description: "Layanan pemeliharaan aplikasi berkelanjutan.",
  },
  {
    icon: <FaChartLine size={48} className="text-blue-600 mb-4" />,
    title: "Analitik",
    description: "Integrasi analitik untuk optimasi bisnis.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 font-montserrat">
          Layanan Kami
        </h2>
        {/* Flex scroll for mobile, grid for larger screens */}
        <div className="pb-4 p-4 flex flex-nowrap overflow-x-auto space-x-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="snap-center transition-transform transform hover:scale-105 flex-none w-72 lg:w-auto bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mt-2 mb-2 text-center font-montserrat">
                {feature.title}
              </h3>
              <p className="text-center text-sm md:text-base font-montserrat">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
