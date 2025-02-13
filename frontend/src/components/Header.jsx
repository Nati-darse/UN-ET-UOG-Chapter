import React, { useState } from 'react';
import logo from '../assets/images-removebg-preview.png';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black p-4 flex justify-between items-center shadow-sm w-full z-10 relative">
      {/* Logo and Title */}
      <div className="flex items-center">
        <img src={logo} alt="UN Logo" className="h-24 " />
        <a href='/'
        className="text-2xl font-bold text-blue-500">UN-ET UOG Chapter
        </a>
      </div>

      {/* Hamburger Icon (Always Visible) */}
      <div className="md:hidden relative">
        <button onClick={toggleMenu} className="focus:outline-none z-20 relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-6 mr-10 text-blue-900">
          <li><a href="/about" className="hover:text-blue-500 font-bold">About Us</a></li>
          <li><a href="/teams" className="hover:text-blue-500 font-bold">Teams</a></li>
          <li><a href="/events" className="hover:text-blue-500 font-bold">Events</a></li>
          <li>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center hover:text-blue-500 font-bold focus:outline-none"
              >
                News & Resources
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
                <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
                  <li><a href="#news" className="block px-4 py-2 hover:bg-blue-100">News</a></li>
                  <li><a href="#resources" className="block px-4 py-2 hover:bg-blue-100">Resources</a></li>
                </ul>
              )}
            </div>
          </li>
          <li><a href="/contact" className="hover:text-blue-500 font-bold">Contact Us</a></li>
        </ul>
      </nav>

      {/* Mobile Menu (Sliding from Side) */}
      <div className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-20`}>
        <button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="flex flex-col space-y-2 p-6 text-center">
          <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
          <li><a href="/teams" className="hover:text-blue-500">Teams</a></li>
          <li><a href="/events" className="hover:text-blue-500">Events</a></li>
          <li>
            <button onClick={toggleDropdown} className="hover:text-blue-500 focus:outline-none">
              News & Resources
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
              <ul className="mt-2 bg-white border border-gray-300 rounded shadow-lg">
                <li><a href="#news" className="block px-4 py-2 hover:bg-blue-100">News</a></li>
                <li><a href="#resources" className="block px-4 py-2 hover:bg-blue-100">Resources</a></li>
              </ul>
            )}
          </li>
          <li><a href="#getInvolved" className="hover:text-blue-500">Get Involved</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;