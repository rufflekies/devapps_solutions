import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Pricelist = () => {
  const pricingData = [
    {
      plan: "Aplikasi Dasar",
      price: 2500000,
      features: [
        "Desain UI/UX Sederhana",
        "Maksimal 5 Halaman",
        "Fitur Sederhana (misalnya halaman statis)",
        "2 Revisi",
        "Dukungan Dasar (via email)",
      ],
      waLink: "https://api.whatsapp.com/send?phone=62895330271587&text=Silahkan%20Lengkapi%20Detail%20Pembelian%3A%0A%0A*Jenis*%20%3A%20%201.%20*Aplikasi%20Dasar*%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%202.%20~Aplikasi%20Standar~%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%203.%20~Aplikasi%20Premium~%0A*Email*%20%3A%20%0A*Pembayaran*%20%3A%20%0A*Note%20Tambahan*%20%3A", // Link WhatsApp untuk paket ini
    },
    {
      plan: "Aplikasi Standar",
      price: 5000000,
      features: [
        "Desain UI/UX Kustom",
        "Maksimal 10 Halaman",
        "Fitur Standar (misalnya login, integrasi database)",
        "Integrasi API",
        "3 Revisi",
        "Dukungan Standar (via email & chat)",
      ],
      waLink: "https://api.whatsapp.com/send?phone=62895330271587&text=Silahkan%20Lengkapi%20Detail%20Pembelian%3A%0A%0A*Jenis*%20%3A%20%201.%20~Aplikasi%20Dasar~%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%202.%20*Aplikasi%20Standar*%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%203.%20~Aplikasi%20Premium~%0A*Email*%20%3A%20%0A*Pembayaran*%20%3A%20%0A*Note%20Tambahan*%20%3A", // Link WhatsApp untuk paket ini
    },
    {
      plan: "Aplikasi Premium",
      price: 7500000,
      features: [
        "Desain UI/UX Lanjutan",
        "Halaman Tanpa Batas",
        "Fitur Lanjutan (misalnya chat real-time, notifikasi push)",
        "Integrasi API & Pihak Ketiga",
        "5 Revisi",
        "Dukungan Prioritas (24/7 support & maintenance)",
      ],
      waLink: "https://api.whatsapp.com/send?phone=62895330271587&text=Silahkan%20Lengkapi%20Detail%20Pembelian%3A%0A%0A*Jenis*%20%3A%20%201.%20~Aplikasi%20Dasar~%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%202.%20~Aplikasi%20Standar~%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%203.%20*Aplikasi%20Premium*%0A*Email*%20%3A%20%0A*Pembayaran*%20%3A%20%0A*Note%20Tambahan*%20%3A", // Link WhatsApp untuk paket ini
    },
  ];

  const [startCount, setStartCount] = useState(false);
  const pricingRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setStartCount(true);
        } else {
          setStartCount(false);
        }
      });
    });

    if (pricingRef.current) {
      sectionObserver.observe(pricingRef.current);
    }

    return () => {
      if (pricingRef.current) {
        sectionObserver.unobserve(pricingRef.current);
      }
    };
  }, []);

  return (
    <div id="pricelist" ref={pricingRef} className="bg-gray-100 pt-10 font-montserrat">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="pt-14 text-4xl font-bold text-center">Paket Harga</h2>

        {/* Horizontal scrolling for mobile view only */}
        <div className="overflow-x-auto md:hidden pt-8 scroll-smooth snap-x snap-mandatory">
          <div className="flex space-x-4 pb-4">
            {pricingData.map((plan, index) => (
              <div
                key={index}
                className="snap-center bg-white rounded-3xl p-6 shadow-md transition-transform transform hover:scale-105 flex-shrink-0 w-80 flex flex-col"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-center">
                    {plan.plan}
                  </h3>
                  <div className="text-center">
                    <span className="text-3xl font-bold">
                      {startCount ? (
                        <CountUp
                          start={0}
                          end={plan.price}
                          duration={2}
                          separator="."
                          prefix="Rp "
                        />
                      ) : (
                        "Rp 0"
                      )}
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
                <a
                  href={plan.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800 transition-colors w-full mt-4 text-center"
                  aria-label={`Pilih paket ${plan.plan}`}
                >
                  Pilih Paket
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:gap-8 md:pt-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-3xl p-6 shadow-md transition-transform transform hover:scale-105"
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {plan.plan}
                </h3>
                <div className="text-center mb-2">
                  <span className="text-3xl font-bold">
                    {startCount ? (
                      <CountUp
                        start={0}
                        end={plan.price}
                        duration={2}
                        separator="."
                        prefix="Rp "
                      />
                    ) : (
                      "Rp 0"
                    )}
                  </span>
                </div>
                <p className="text-lg font-normal text-center mb-6">/proyek</p>
                <ul className="space-y-2 mb-6 px-2 text-center">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <a
                href={plan.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800 transition-colors w-full text-center"
                aria-label={`Pilih paket ${plan.plan}`}
              >
                Pilih Paket
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricelist;
