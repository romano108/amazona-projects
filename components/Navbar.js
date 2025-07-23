"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-black">
        {/* Desktop menu */}
        <ul className="hidden md:flex justify-center items-center space-x-8 h-14">
          <li className="text-white cursor-pointer hover:text-gray-400">
            WORK
          </li>
          <li className="text-white cursor-pointer hover:text-gray-400">
            ABOUT US
          </li>
          <li className="text-white cursor-pointer hover:text-gray-400">
            CONTACT
          </li>
        </ul>

        {/* Hamburger menu for tablet/mobile */}
        <div className="flex md:hidden justify-end items-center h-14 mr-4">
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col space-y-1.5 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Mobile menu with transition */}
        <ul
          className={`
            md:hidden
            bg-black
            text-white
            flex
            flex-col
            items-center
            space-y-4
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            ${open ? "max-h-60 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
          `}
        >
          <li className="cursor-pointer hover:text-gray-400">WORK</li>
          <li className="cursor-pointer hover:text-gray-400">ABOUT US</li>
          <li className="cursor-pointer hover:text-gray-400">CONTACT</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
