import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gray-100 relative overflow-hidden flex flex-col lg:flex-row lg:h-screen">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center p-6 lg:p-24">
                {/* Title with mobile-specific padding */}
                <h1 className="text-4xl pt-0 font-bold sm:text-5xl md:text-6xl font-montserrat lg:pb-0">
                    “DevApps Solutions: Ubah Idemu Jadi Kenyataan"
                </h1>

                {/* Hide description in mobile view */}
                <p className="mt-6 text-lg max-w-md font-montserrat hidden lg:block">
                    Kami adalah mitra terpercaya dalam mengembangkan aplikasi mobile menggunakan Android Studio, untuk solusi bisnis Anda.
                </p>

                {/* Image above buttons in mobile view */}
                <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 pb-12 lg:hidden">
                    <div className="flex justify-center mb-4 py-10"> {/* Add padding here for mobile */}
                        <img 
                            src="/src/assets/Desain tanpa judul.png" 
                            alt="Mobile Mockup" 
                            className="w-3/4 h-auto object-contain animate-floating" 
                        />
                    </div>
                    {/* Updated button layout for mobile */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-row space-x-4">
                            <a href="#" className="transition-transform transform hover:scale-105 font-montserrat flex-1 px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700">
                                Penawaran
                            </a>
                            <a href="#" className="transition-transform transform hover:scale-105 bg-white shadow-lg font-montserrat text-center flex-1 px-6 py-3 rounded-md font-semibold hover:bg-indigo-700">
                                Hubungi
                            </a>
                        </div>
                    </div>
                </div>

                {/* Buttons for Desktop */}
                <div className="mt-8 flex-col sm:flex-row sm:space-x-4 hidden lg:flex">
                    <a href="#" className="transition-transform transform hover:scale-105 font-montserrat px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700">
                        Penawaran
                    </a>
                    <a href="#" className="transition-transform transform hover:scale-105 font-montserrat text-center bg-white px-6 py-3 border border-white shadow-lg rounded-md font-semibold hover:bg-white hover:text-black">
                        Hubungi
                    </a>
                </div>
            </div>

            {/* Right Image for Desktop */}
            <div className="pt-20 flex-1 items-center justify-center hidden lg:flex lg:order-last">
                <img 
                    src="/hero.png" 
                    alt="Mobile Mockup" 
                    className="w-3/4 h-auto object-contain animate-floating lg:max-w-full"
                />
            </div>
        </section>
    );
};

export default Hero;
