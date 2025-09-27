import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logoutUser } = useContext(AuthContext) || {};
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ handle logout with sweetalert
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged out!",
          text: "You have been successfully logged out.",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: error.message,
        });
      });
  };

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

        {/* Right: Profile or Login */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-2">
              <FiUser className="text-2xl text-gray-700" />
              <span className="text-gray-700 font-medium">
                {user.displayName || "User"}
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
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
            <div className="flex items-center space-x-2">
              <FiUser className="text-2xl text-gray-700" />
              <span className="text-gray-700">{user.displayName || "User"}</span>
              <button
                onClick={handleLogout}
                className="ml-2 px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
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
