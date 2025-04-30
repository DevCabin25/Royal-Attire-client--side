import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Store", "Guide", "About", "Contact"];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-black">FashionDev</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-black hover:text-gray-600 font-medium"
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="ml-4 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
            >
              Buy Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none text-xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block text-black hover:text-gray-700 font-medium"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="block mt-2 px-4 py-2 text-center rounded-md bg-black text-white hover:bg-gray-800 transition"
          >
            Buy Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
