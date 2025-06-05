
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import TopNav from '../components/Navbar/TopNav';

import { useEffect, useRef, useState } from "react";

const MainLayout = () => {
    const [showTopNav, setShowTopNav] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY <= 0) {
                setShowTopNav(true);
            } else if (currentScrollY > lastScrollY.current) {
                setShowTopNav(false);
            } else {
                setShowTopNav(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <div
                style={{
                    transition: "transform 0.3s ease",
                    transform: showTopNav ? "translateY(0)" : "translateY(-100%)",
                    zIndex: 60,
                    position: "fixed",
                    width: "100%",
                    top: 0,
                    left: 0,
                }}
            >
                <TopNav />
            </div>
            <div style={{ paddingTop: "48px" }}>
                <Navbar />
                <div className='pt-24 min-h-[calc(100vh-68px)]'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
