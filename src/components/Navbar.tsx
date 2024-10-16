import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-5lx font-bold uppercase">Izwi Reruponeso</div>
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About Us</a>
          <a href="/ministries" className="hover:text-gray-300">Ministries</a>
          <a href="/events" className="hover:text-gray-300">Events</a>
          <a href="/sermons" className="hover:text-gray-300">Sermons</a>
          <a href="/contact" className="hover:text-gray-300">Contact Us</a>
        </div>
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-4 p-2 bg-gray-700 text-center">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About Us</a>
          <a href="/ministries" className="hover:text-gray-300">Ministries</a>
          <a href="/events" className="hover:text-gray-300">Events</a>
          <a href="/sermons" className="hover:text-gray-300">Sermons</a>
          <a href="/contact" className="hover:text-gray-300">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
