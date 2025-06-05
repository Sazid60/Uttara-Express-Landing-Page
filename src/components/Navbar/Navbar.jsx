"use client"

import {
    FaBars,
    FaTimes,
} from "react-icons/fa"
import { useState } from "react"
import TopNav from "./TopNav"

const navLinks = [
    { label: "Home", href: "#", active: true },
    { label: "Track Parcel", href: "#" },
    { label: "Services", href: "#" },
    { label: "Find Us", href: "#" },
]

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFCF5]/40 backdrop-blur-2xl shadow-md rounded-b-xl max-w-7xl mx-auto">
                {/* <TopNav /> */}
                <div className=" px-4 lg:px-6">
                    <div className="flex items-center justify-between h-20 w-full">
                        {/* Left: Logo */}
                        <div className="flex items-center min-w-[180px]">
                            <img src="/assets/u-ex-logo-transparent.png" alt="Uttara Express Logo" className="h-14 w-auto object-contain" />
                        </div>
                        {/* Spacer */}
                        <div className="flex-1" />
                        {/* Right: Nav Links */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`text-base md:text-lg font-medium transition-colors uppercase ${link.active ? "text-blue-700" : "text-gray-800 hover:text-blue-700"}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        {/* Far Right: Merchant Login/Signup Button */}
                        <div className="hidden lg:flex items-center min-w-[220px] justify-end ml-6">
                            <button className="bg-blue-700 hover:bg-blue-600 text-white text-base md:text-lg px-6 py-2 rounded focus:outline-none uppercase transition-all">
                                Merchant Login / Signup
                            </button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden space-y-4 py-4 border-t border-gray-100 flex flex-col items-center ">

                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`block font-medium ${link.active ? "text-blue-700" : "text-gray-800 hover:text-blue-500"}`}
                                >
                                    {link.label}
                                </a>
                            ))}

                            <button className="bg-blue-700 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded focus:outline-none transition-all w-full uppercase">
                                Merchant Login / Signup
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}
