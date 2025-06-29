import CountUp from "react-countup";
import { AiOutlineDash } from "react-icons/ai";
import { TfiPackage } from "react-icons/tfi";
import { CiDeliveryTruck } from "react-icons/ci";
import { LiaPeopleCarrySolid } from "react-icons/lia";

export default function CourierDetails() {
    const stats = [
        {
            title: "Delivered Packages",
            count: 6457,
            description: "Once your parcel has been carefully packaged and labelled, it must be handed over to your chosen courier.",
        },
        {
            title: "Expert Employees",
            count: 2354,
            description: "Delivery drivers are given specific routes based on the destination addresses of the packages they are assigned.",
        },
        {
            title: "Total Warehouse",
            count: 684,
            description: "Your parcel is back on the move, on its way to the next depot, where it will be sorted once more. The second depot will be local.",
        },
    ];

    return (
        <section className="bg-[#0C2438] text-white py-20 px-9 mb-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 xl:gap-28 items-start">

                {/* Left Content */}
                <div>
                    <p className="text-sm text-blue-700 font-semibold mb-2">
                        Dependable Courier & Delivery Service!
                    </p>
                    <h2 className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                        Simple Processing To Deliver<br />
                        Courier & Parcel Service
                    </h2>
                    <p className="mb-4 text-base text-wrap">
                        The process of courier delivery depends on the company, contract,
                        location and a variety of other factors. Either a company provides
                        its own fulfilment.
                    </p>
                    <p className="mb-10 text-base">
                        We offer delivery, solutions, and services across the entire parcel
                        value chain. We support our customers on their way to a more
                        sustainable future.
                    </p>

                    {/* Steps */}
                    <div className="flex flex-row gap-8 items-center justify-between">
                        <div className="flex flex-col items-center text-center">
                            <TfiPackage className="text-4xl text-white mb-2" />
                            <p className="font-semibold text-base">Order Received</p>
                        </div>
                        <AiOutlineDash className="text-blue-700 text-4xl hidden sm:flex" />
                        <div className="flex flex-col items-center text-center">
                            <CiDeliveryTruck className="text-5xl text-white mb-2" />
                            <p className="font-semibold text-base">Packaging Process</p>
                        </div>
                        <AiOutlineDash className="text-blue-700 text-4xl hidden sm:flex" />
                        <div className="flex flex-col items-center text-center">
                            <LiaPeopleCarrySolid className="text-5xl text-white mb-2" />
                            <p className="font-semibold text-base">Package Delivered</p>
                        </div>
                    </div>
                </div>

                {/* Right Content - Stats */}
                <div className="space-y-10">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <h3 className="text-4xl font-bold text-blue-700 mb-2">
                                <CountUp end={stat.count} duration={3} separator="," />
                            </h3>
                            <p className="text-2xl italic text-white mb-3 font-bold">{stat.title}</p>
                            <p className="text-base">{stat.description}</p>
                            {index < stats.length - 1 && <hr className="border-gray-700 mt-6" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
