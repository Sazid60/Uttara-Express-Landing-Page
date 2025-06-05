import React, { useRef, useState } from "react";
import { BiDollar } from "react-icons/bi";
import { FaRegClock, FaTruck, FaShieldAlt, FaArrowRight, FaPlay, FaPause } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import 'animate.css';

const features = [
    {
        icon: <FaRegClock className="text-blue-700 w-8 h-8" />,
        title: "24/7 Services",
        description: "Shipments can stay at time, cost to warehouses and buildings.",
    },
    {
        icon: <BiDollar className="text-blue-700 w-8 h-8" />,
        title: "Flat Rate Fees",
        description: "Parcel charges depend on speedy delivery and flexible price range.",
    },
    {
        icon: <FaTruck className="text-blue-700 w-8 h-8" />,
        title: "Fast Delivery",
        description: "Specially couriers are able to deliver ten times faster than other services.",
    },
    {
        icon: <FaShieldAlt className="text-blue-700 w-8 h-8" />,
        title: "Secured Service",
        description: "Dedicated to providing the highest level of security and tracking for packages.",
    },
];

export default function DeliveryService() {

    // video custom play pause handling functionalities
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <section
            className="relative bg-[#0C2438] text-white py-20 px-9 mb-20 overflow-hidden"
            style={{
                backgroundImage: "url('/assets/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0C2438] opacity-80 pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10">
                    {/* Header */}
                    <p className="text-blue-700 text-left mb-4 text-base ">
                        Secured, Fastest & Reliable Delivery Service!
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div>
                            <h2 className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
                                Since during our launch, to deliver high value package.
                            </h2>
                        </div>
                        <div className="space-y-4  ">
                            <p className="text-base">
                                Company providing its own fulfillment to a domestic depot, which is then picked up by the courier and
                                distributed to customers, or couriers pick up packages directly from the vendor.
                            </p>
                            <p className="text-base">
                                The process of courier or parcel delivery depends on the company, contract, location and a variety of
                                other factors.
                            </p>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {features.map((feature, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md border-none p-6 rounded-lg flex flex-col items-center text-center shadow-xl hover:scale-105 hover:shadow-2xl">
                                <div className="w-16 h-16 rounded-full border-2 border-blue-700 flex items-center justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                <p className="text-sm  mb-6">{feature.description}</p>

                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <p className="mb-4 max-w-md">
                                If you have any delivery queries, don't hesitate to contact our team, or you can also phone call us
                                anytime.
                            </p>
                            <p className="text-blue-400 mb-6 text-lg">(800) 0117 1022377</p>
                            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md flex justify-center items-center group hover:text-blue-600 hover:bg-opacity-10 transition-colors duration-300 w-full sm:w-auto">
                                <span className="text-base ">Get A Quote</span>
                                <FiArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                        <div className="relative w-full  aspect-video rounded-lg overflow-hidden">
                            <video
                                ref={videoRef}
                                src="/assets/courier-service.mp4"
                                className="object-cover w-full h-full"
                                autoPlay={false}
                                loop
                                muted
                                playsInline
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                            />
                            {!isPlaying && (
                                <button
                                    onClick={handlePlay}
                                    className="absolute inset-0 flex items-center justify-center z-20 focus:outline-none"
                                    aria-label="Play Video"
                                >
                                    <span className="relative flex items-center justify-center">
                                        <span className="absolute w-20 h-20 rounded-full bg-white/30 animate-pulse" style={{ filter: 'blur(2px)' }}></span>
                                        <span className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-lg  ">
                                            <FaPlay className="text-blue-700 w-7 h-7 ml-1" />
                                        </span>
                                    </span>
                                </button>
                            )}
                            {isPlaying && (
                                <button
                                    onClick={handlePause}
                                    className="absolute top-4 left-4 flex items-center justify-center z-20 focus:outline-none"
                                    aria-label="Pause Video"
                                >
                                    <span className="relative flex items-center justify-center">
                                        <span className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-lg animate__animated animate__heartBeat animate__infinite custom-heartbeat">
                                            <FaPause className="text-blue-700 w-6 h-6" />
                                        </span>
                                    </span>
                                </button>
                            )}
                            <div className="absolute bottom-4 right-4 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded z-10">
                                Watch Our Process
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
