import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Banner = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative bg-[url('/assets/Banner.jpg')] bg-cover bg-center w-full min-h-[600px] md:min-h-[800px] lg:min-h-[900px] xl:lg:min-h-[700px] flex justify-center items-center">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
                <div className="text-white text-center px-4 relative z-10 mt-20 md:mt-0">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-3xl md:text-6xl font-bold mb-8 leading-tight uppercase">
                            Reliable Delivery<br />
                            <span>Timely Parcels <br />
                                Stress-Free Service
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Professionally strategize stand-alone functionalities and cooperative total
                            linkage. Objectively predominate virtual quality vectors orthogonal.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <button className="bg-[#4A90E2] text-white px-8 py-4 rounded-md flex items-center justify-center group hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto">
                                <span className="text-base md:text-lg">Explore The Services</span>
                                <FiArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </button>

                            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md flex justify-center items-center group hover:text-blue-500 hover:bg-opacity-10 transition-colors duration-300 w-full sm:w-auto">
                                <span className="text-base md:text-lg">Contact Us</span>
                                <FiArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Banner;
