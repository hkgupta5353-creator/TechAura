import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">
          TechAura
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/events" className="hover:text-blue-400 transition">
            Events
          </Link>
          <Link to="/workshops" className="hover:text-blue-400 transition">
          Workshops
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;