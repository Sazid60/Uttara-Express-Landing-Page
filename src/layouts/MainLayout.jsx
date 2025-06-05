
import Footer from '../components/footer';
import Navbar from '../components/Navbar';



const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-24 min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;


