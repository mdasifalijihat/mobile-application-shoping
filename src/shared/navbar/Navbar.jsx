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
    { path: "/login", label: "Login" },
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
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyLogo
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">{links}</div>

        {/* User Info */}
        {user && (
          <span className="hidden md:block text-gray-600">
            Welcome, {user.name}
          </span>
        )}

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
        {user && (
          <span className="block px-4 py-2 text-gray-600">
            Welcome, {user.name}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
