import React from 'react';
import CourierDetails from '../components/Courier-Details-Banner/CourierDetails';
import OurFeatures from '../components/Our-Features/OurFeatures';
import Reviews from '../components/Reviews/Reviews';
import HappyClients from '../components/HappyClients/HappyClients';


const Home = () => {
    return (
        < >
            <OurFeatures />
            <Reviews />
            <CourierDetails />
            <HappyClients />

        </>
    );
};

export default Home;