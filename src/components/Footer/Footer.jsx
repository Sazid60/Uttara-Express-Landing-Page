import React from 'react';
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const contactInfo = [
    { label: 'Location', value: 'H#16, R#3/C, S#9 Uttara Dhaka-1230' },
    { label: 'Phone', value: '+8801171022377' },
    { label: 'E-mail', value: 'info@uttaraexpress.com' },
    { label: 'Opening Hour', value: '08.00 AM - 09.00 PM' },
];

const footerSections = [
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: '#' },
            { label: 'Meet Our Team', href: '#' },
            { label: 'News & Media', href: '#' },
            { label: 'Our Project', href: '#' },
            { label: 'Contact', href: '#' },
        ],
    },
    {
        title: 'Services',
        links: [
            { label: 'Standard Courier', href: '#' },
            { label: 'Express Courier', href: '#' },
            { label: 'Over Night Courier', href: '#' },
            { label: 'Pallet Courier', href: '#' },
            { label: 'International Courier', href: '#' },
        ],
    },
    {
        title: 'Courier Info',
        links: [
            { label: 'Track Your Package', href: '#' },
            { label: 'Shipping Calculator', href: '#' },
            { label: 'Partner With Us', href: '#' },
            { label: 'Career Opportunities', href: '#' },
            { label: 'Help & FAQ', href: '#' },
        ],
    },
];

const bottomLinks = [
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Delivery Tips', href: '#' },
];

const socialLinks = [
    { icon: <FaFacebookF />, label: 'Facebook', href: '#' },
    { icon: <FaYoutube />, label: 'YouTube', href: '#' },
    { icon: <FaTwitter />, label: 'Twitter', href: '#' },
    { icon: <FaInstagram />, label: 'Instagram', href: '#' },
    { icon: <FaLinkedinIn />, label: 'LinkedIn', href: '#' },
];

const Footer = () => {
    return (
        <footer className="bg-[#0C2438] text-white pt-10 pb-6 px-9 md:px-12 lg:px-20">
            <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Logo & Contact */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <img src="/assets/u-ex-logo-transparent.png" alt="Uttara Express Logo" className="w-20 h-15" />
                    </div>
                    {contactInfo.map((item, idx) => (
                        <p className="text-base mb-2" key={idx}>
                            <strong>{item.label}:</strong> {item.value}
                        </p>
                    ))}
                </div>
                {/* Dynamic Sections */}
                {footerSections.map((section) => (
                    <div key={section.title}>
                        <h2 className="text-base md:text-lg font-semibold mb-4 text-blue-700 uppercase">{section.title}</h2>
                        <ul className="space-y-2 text-base">
                            {section.links.map((link, i) => (
                                <li key={i}><a href={link.href} className="hover:underline">{link.label}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row md:justify-between items-center text-base text-gray-400 space-y-3 md:space-y-0">
                <p>&copy; 2024 Uttara Express. All rights reserved.</p>
                <div className="flex flex-wrap justify-center gap-4">
                    {bottomLinks.map((link, idx) => (
                        <a key={idx} href={link.href} className="hover:underline">{link.label}</a>
                    ))}
                </div>
                {/* Social Icons */}
                <div className="flex space-x-4 text-white text-base">
                    {socialLinks.map((social, idx) => (
                        <a key={idx} href={social.href} aria-label={social.label}>{social.icon}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
