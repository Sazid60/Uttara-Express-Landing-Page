import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        text: `“Experia’s service is reliable, timely and accurate delivery and the
        communication system is excellent. Also ipsum dolor sit amet
        consectetur adipisicing elit. Incidunt, consequatur.”`,
        name: 'Pat Cummins',
        company: 'Delta Logistics',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        text: `“Their prompt service and courteous staff always exceed expectations.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        necessitatibus.”`,
        name: 'Sarah Lee',
        company: 'Express Movers',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        text: `“I've tried many courier services but Experia stands out. Ipsum dolor sit
        amet consectetur adipisicing elit. Quaerat, delectus!”`,
        name: 'Michael Smith',
        company: 'FastTrack Delivery',
        image: 'https://randomuser.me/api/portraits/men/68.jpg',
    },
];

// Set your company launch year here:
const LAUNCH_YEAR = 2020;

const Reviews = () => {
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - LAUNCH_YEAR;

    return (
        <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-7">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
                {/* Experience Box */}
                <div className="w-full lg:w-1/3 text-center lg:text-left">
                    <h2 className="text-blue-700 font-bold uppercase text-5xl sm:text-6xl lg:text-7xl italic">
                        {yearsOfExperience}
                        <span className="text-black ml-2 text-xl sm:text-2xl lg:text-3xl font-bold ">
                            + Years
                        </span>
                    </h2>
                    <p className="mt-4 sm:mt-6 text-lg sm:text-xl  font-bold uppercase ">
                        Experience in Courier Services
                    </p>
                </div>

                {/* Testimonial Swiper */}
                <div className="w-full lg:w-2/3">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        loop
                        spaceBetween={0}
                        slidesPerView={1}
                    >
                        {testimonials.map((t, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-6 min-h-[250px] sm:min-h-[280px] md:min-h-[200px] flex flex-col justify-between">
                                    <p className="italic text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                                        {t.text}
                                    </p>
                                    <div className="flex items-center gap-4 mt-4">
                                        <img
                                            src={t.image}
                                            alt={t.name}
                                            className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-800 text-base sm:text-lg">
                                                {t.name}
                                            </p>
                                            <p className="text-sm text-gray-500">{t.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
