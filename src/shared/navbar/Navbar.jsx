import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const links = navLinks.map((link) => (
    <Link
      key={link.path}
      to={link.path}
      className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 
        ${
          location.pathname === link.path
            ? "text-white bg-blue-600"
            : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
        }`}
    >
      {link.label}
    </Link>
  ));

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center h-16">
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyLogo
        </Link>

        {/* Center: Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">{links}</div>

        {/* Right: Login Button or User */}
        <div className="hidden md:flex">
          {user ? (
            <span className="text-gray-700 font-medium">
              Welcome, {user.name}
            </span>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-700">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col p-4 space-y-2">{links}</div>
        <div className="px-4 py-2">
          {user ? (
            <span className="text-gray-700">Welcome, {user.name}</span>
          ) : (
            <Link
              to="/login"
              className="block px-4 py-2 rounded-md bg-blue-600 text-white text-center hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
