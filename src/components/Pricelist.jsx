import React from "react";
import CountUp from "react-countup";

const Pricelist = () => {
  const pricingData = [
    {
      plan: "Aplikasi Dasar",
      price: 5000000,
      features: [
        "Satu Platform (Android atau iOS)",
        "Desain UI/UX Sederhana",
        "Maksimal 5 Halaman",
        "Fitur Sederhana (misalnya halaman statis)",
        "2 Revisi",
        "Dukungan Dasar (via email)",
      ],
    },
    {
      plan: "Aplikasi Standar",
      price: 15000000,
      features: [
        "Cross-Platform (Android & iOS)",
        "Desain UI/UX Kustom",
        "Maksimal 10 Halaman",
        "Fitur Standar (misalnya login, integrasi database)",
        "Integrasi API",
        "3 Revisi",
        "Dukungan Standar (via email & chat)",
      ],
    },
    {
      plan: "Aplikasi Premium",
      price: 30000000,
      features: [
        "Cross-Platform (Android & iOS)",
        "Desain UI/UX Lanjutan",
        "Halaman Tanpa Batas",
        "Fitur Lanjutan (misalnya chat real-time, notifikasi push)",
        "Integrasi API & Pihak Ketiga Lengkap",
        "5 Revisi",
        "Dukungan Prioritas (24/7 support & maintenance)",
      ],
    },
  ];

  return (
    <div id="pricelist" className="bg-gray-100 pt-10 font-montserrat">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center">Paket Harga</h2>

        {/* Horizontal scrolling for mobile view only */}
        <div className="overflow-x-auto md:hidden pt-8 scroll-smooth snap-x snap-mandatory">
          <div className="flex space-x-4 pb-4">
            {pricingData.map((plan, index) => (
              <div
                key={index}
                className="snap-center bg-white border rounded-3xl p-6 shadow-md transition-transform transform hover:scale-105 flex-shrink-0 w-80 flex flex-col"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-center">
                    {plan.plan}
                  </h3>
                  <div className="text-center">
                    <span className="text-3xl font-bold">
                      <CountUp
                        start={0}
                        end={plan.price}
                        duration={1}
                        separator="."
                        prefix="Rp "
                      />
                    </span>
                  </div>
                  <p className="text-lg font-normal mb-6 text-center">
                    /proyek
                  </p>
                  <ul className="space-y-2 px-2 mb-2 text-center">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors w-full mt-4">
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:gap-8 md:pt-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border rounded-3xl p-6 shadow-md transition-transform transform hover:scale-105"
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {plan.plan}
                </h3>
                <div className="text-center mb-2">
                  <span className="text-3xl font-bold">
                    <CountUp
                      start={0}
                      end={plan.price}
                      duration={1}
                      separator="."
                      prefix="Rp "
                    />
                  </span>
                </div>
                <p className="text-lg font-normal text-center mb-6">/proyek</p>
                <ul className="space-y-2 mb-6 px-2 text-center">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors w-full">
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricelist;