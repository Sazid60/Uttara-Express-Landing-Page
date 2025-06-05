import React, { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

const TopNav = () => {
    const [show, setShow] = useState(true);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    if (currentScrollY < 10) {
                        if (!show) setShow(true);
                    } else if (currentScrollY > lastScrollY.current) {
                        if (show) setShow(false); // scrolling down
                    } else if (currentScrollY < lastScrollY.current) {
                        if (!show) setShow(true); // scrolling up
                    }
                    lastScrollY.current = currentScrollY;
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [show]);

    return (
        <div className={`bg-black text-white py-2 px-4 text-sm font-medium transition-transform duration-300 fixed top-0 left-0 right-0 z-50 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
            <Marquee pauseOnHover={true} gradient={false} speed={45}>
                <span className="mr-10">🚚 Same-Day Delivery Available in Dhaka City!</span>
                <span className="mr-10">📦 20% OFF on Your First Parcel – Use Code: <strong>FIRST20</strong></span>
                <span className="mr-10">🎁 Get Tk. 50 OFF on Next Delivery – Use Coupon: <strong>FAST50</strong></span>
                <span className="mr-10">🌍 Nationwide Courier Service – Reliable & Affordable</span>
                <span className="mr-10">📱 Track Parcels Live via Our Mobile App</span>
                <span className="mr-10">⏰ Book Before 12 PM for Express Same-Day Dispatch</span>
            </Marquee>
        </div>
    );
};

export default TopNav;
