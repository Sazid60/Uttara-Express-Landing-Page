
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';



import Banner from '../components/Banner/Banner';

const MainLayout = () => {

    return (
        <div>

            <div>
                <Navbar />
                <Banner />
                <div className='pt-24 min-h-[calc(100vh-68px)]'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
