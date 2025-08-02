import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "portfolio" },
    { id: 5, link: "contact" },
  ];

  return (
    <div
      className={`fixed w-full h-20 px-8 z-50 transition-all duration-300 flex items-center justify-between ${
        scroll ? "bg-[#000009] shadow-lg" : "bg-transparent"
      } text-white`}
    >
      {/* Logo */}
      <h1 className="text-5xl font-nike tracking-widest bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text leading-normal">
        PS
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-Montserrat tracking-wider text-lg capitalize font-medium relative 
                       group"
          >
            <Link
              to={link}
              smooth
              duration={500}
              spy={true}
              offset={-70}
              activeClass="text-blue-400"
            >
              {link}
            </Link>
            {/* Animated underline */}
            <span
              className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 
                         group-hover:w-full group-hover:left-0"
            ></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-20 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#120E0E] flex flex-col justify-center items-center 
                    transform transition-transform duration-500 ease-in-out z-10 ${
          nav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="text-center">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-4 text-3xl font-medium">
              <Link
                to={link}
                smooth
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-blue-400"
                onClick={() => setNav(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;