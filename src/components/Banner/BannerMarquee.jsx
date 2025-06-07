
import Marquee from 'react-fast-marquee';

const BannerMarquee = () => {

    return (
        <div className="bg-black text-white py-1 md:py-4 px-4 text-base font-medium">
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

export default BannerMarquee;
