const happyClients = [
    {
        name: "PRAN-RFL Group",
        logo: "/assets/happyClients/RFL.png",
    },
    {
        name: "Square Pharmaceuticals",
        logo: "/assets/happyClients/SQUARE.png",
    },
    {
        name: "Aarong",
        logo: "/assets/happyClients/ARONG.png",
    },
    {
        name: "Beximco",
        logo: "/assets/happyClients/BEXIMCO.png",
    },
    {
        name: "Olympic Industries",
        logo: "/assets/happyClients/OLYMPIC.png",
    },
    {
        name: "Singer Bangladesh",
        logo: "/assets/happyClients/SINGER.png",
    },
    {
        name: "Unilever Bangladesh",
        logo: "/assets/happyClients/UNILIVER.png",
    },
];

const HappyClients = () => {
    return (
        <section className="w-full py-12 px-4 sm:px-8 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 uppercase ">
                    Trusted by Industry-Leading Clients
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
                    We take pride in offering reliable courier services that ensure your packages reach their destination on time, every time.
                </p>

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
                    {happyClients.map((client, index) => (
                        <div
                            key={index}
                            className="w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 flex items-center justify-center"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HappyClients;
