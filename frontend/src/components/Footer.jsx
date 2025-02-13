import React from "react";
import { FaInstagram,  FaLinkedin, FaTelegram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#002D62] text-white py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6 gap-6 md:gap-0">
          {/* Logo */}
          <div >
            <a href="/"
            className="text-xl font-bold text-center md:text-left">
            UN-ET UOG Charter
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-,md">
            <a href="/About" className="hover:text-gray-400">About Us</a>
            <a href="/teams" className="hover:text-gray-400">Our Teams</a>
            <a href="/Events" className="hover:text-gray-400">Events</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdk15_qIaFj-MXxpxd3h5VIRFJ2dYjMHSTaX7W3C_00lJqY0A/viewform" className="hover:text-gray-400">Join Us</a>
            <a href="/contact" className="hover:text-gray-400">Contact Us</a>
            <a href="#" className="hover:text-gray-400">Resources</a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://www.instagram.com/una.et.uog?utm_source=qr&igsh=MTh4Y202eDE0NnJn" className="bg-white text-[#002D62] p-2 rounded-full transition-transform hover:scale-110">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="" className="bg-white text-[#002D62] p-2 rounded-full transition-transform hover:scale-110">
              <FaTiktok className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/united-nation-association-of-ethiopia-university-of-gondar-chapter/ " className="bg-white text-[#002D62] p-2 rounded-full transition-transform hover:scale-110">
              <FaLinkedin className="w-5 h-5"/>
            </a>
            <a href="https://t.me/UNAETUoG" className="bg-white text-[#002D62] p-2 rounded-full transition-transform hover:scale-110">
              <FaTelegram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-300">
          © copyright unet-uogcharter.com 2025. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
