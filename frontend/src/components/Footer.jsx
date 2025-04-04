import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTelegram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <footer className="bg-[#002D62] text-white py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6 gap-6 md:gap-0">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-xl font-bold">
              UNA-ET UOG Chapter
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row md:gap-6 items-center text-md gap-2">
            <Link to="/about" className="hover:text-gray-400">About Us</Link>
            <Link to="/teams" className="hover:text-gray-400">Our Teams</Link>
            <Link to="/events" className="hover:text-gray-400">Events</Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdk15_qIaFj-MXxpxd3h5VIRFJ2dYjMHSTaX7W3C_00lJqY0A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Join Us
            </a>
            <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>

            {/* Developers Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center hover:text-gray-400 focus:outline-none"
              >
                Developers
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 mt-2 w-48 bg-[#002D62] border border-gray-300 rounded shadow-lg z-10 text-white">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nathnael-darsema/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-blue-900"
                    >
                      Nathanael Darsema
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-blue-900"
                    >
                      Mariamawit Tesfaye
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mikias24/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-blue-900"
                    >
                      Mikias Wondafrash
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/una.et.uog?utm_source=qr&igsh=MTh4Y202eDE0NnJn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#002D62] p-2 rounded-full transition-transform hover:scale-110"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#002D62] p-2 rounded-full transition-transform hover:scale-110"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/united-nation-association-of-ethiopia-university-of-gondar-chapter/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#002D62] p-2 rounded-full transition-transform hover:scale-110"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/UNAETUoG"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#002D62] p-2 rounded-full transition-transform hover:scale-110"
            >
              <FaTelegram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-300 mt-6">
          © copyright unaet-uogcharter.com 2025. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
