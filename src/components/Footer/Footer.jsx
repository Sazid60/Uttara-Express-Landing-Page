import React from 'react';
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0C2438] text-white pt-10 pb-6 px-9 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Logo & Contact */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <img src="/assets/u-ex-logo-transparent.png" alt="Experia Logo" className="w-20 h-15" />
                    </div>
                    <p className="text-sm"><strong>Location:</strong> 123, Brooklyn Street, New York</p>
                    <p className="text-sm"><strong>Phone:</strong> +99 268 827 2500</p>
                    <p className="text-sm"><strong>E-mail:</strong> info@experia.com</p>
                    <p className="text-sm"><strong>Opening Hour:</strong> 08.00 AM - 09.00 PM</p>
                </div>

                {/* Company */}
                <div>
                    <h2 className="text-base md:text-lg font-semibold mb-4 text-blue-700 uppercase">Company</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Meet Our Team</a></li>
                        <li><a href="#" className="hover:underline">News & Media</a></li>
                        <li><a href="#" className="hover:underline">Our Project</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h2 className="text-base md:text-lg font-semibold mb-4 text-blue-700 uppercase">Services</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Standard Courier</a></li>
                        <li><a href="#" className="hover:underline">Express Courier</a></li>
                        <li><a href="#" className="hover:underline">Over Night Courier</a></li>
                        <li><a href="#" className="hover:underline">Pallet Courier</a></li>
                        <li><a href="#" className="hover:underline">International Courier</a></li>
                    </ul>
                </div>

                {/* Courier Info */}
                <div>
                    <h2 className="text-base md:text-lg font-semibold mb-4 text-blue-700 uppercase">Courier Info</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Track Your Package</a></li>
                        <li><a href="#" className="hover:underline">Shipping Calculator</a></li>
                        <li><a href="#" className="hover:underline">Partner With Us</a></li>
                        <li><a href="#" className="hover:underline">Career Opportunities</a></li>
                        <li><a href="#" className="hover:underline">Help & FAQ</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400 space-y-3 md:space-y-0">
                <p>&copy; 2024 Uttara Express. All rights reserved.</p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#" className="hover:underline">Terms & Conditions</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Delivery Tips</a>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4 text-white text-base">
                    <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                    <a href="#" aria-label="YouTube"><FaYoutube /></a>
                    <a href="#" aria-label="Twitter"><FaTwitter /></a>
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
