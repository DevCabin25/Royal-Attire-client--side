
import React, { useState } from "react";
import logo from '../assets/logo.png'
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const links =<>
  <NavLink className={'text-black hover:text-gray-600 font-medium'} to={'/'}>Home</NavLink>
  <NavLink className={'text-black hover:text-gray-600 font-medium'} to={'/store'}>Store</NavLink>
  <NavLink className={'text-black hover:text-gray-600 font-medium'} to={'/'}> Fashion Guide</NavLink>

  <NavLink className={'text-black hover:text-gray-600 font-medium'} to={'/aboutUs'}>About Us</NavLink>
 
  <NavLink className={'text-black hover:text-gray-600 font-medium'} to={'/contact'}>Contact</NavLink>
  </>
  return (
    <nav className="bg-white shadow-sm fixed z-20 w-full ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-black"><img className="w-20" src={logo} alt="" /></div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            
              {links}
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
          
          {links}
          <Link
            to="/sign-up"
            className="block mt-2 px-4 py-2 text-center rounded-md bg-black text-white hover:bg-gray-800 transition"
          >
            Buy Now
          </Link>
        </div>
      )}
    </nav>

  );
};

export default Navbar;