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
      className={`fixed w-full h-[70px] px-8 z-50 transition-all duration-500 flex items-center justify-between ${
        scroll
          ? "bg-[#050508]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      } text-white`}
    >
      {/* Logo */}
      <Link to="home" smooth duration={500} className="cursor-pointer">
        <h1 className="text-4xl font-nike tracking-[0.2em] bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 text-transparent bg-clip-text leading-normal hover:tracking-[0.3em] transition-all duration-500">
          PS
        </h1>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-1">
        {links.map(({ id, link }) => (
          <li key={id} className="cursor-pointer relative group">
            <Link
              to={link}
              smooth
              duration={500}
              spy={true}
              offset={-70}
              activeClass="active-link"
              className="px-4 py-2 text-sm font-Montserrat font-medium tracking-[0.12em] uppercase text-gray-300 hover:text-white transition-colors duration-300 block"
            >
              {link}
            </Link>
            {/* Animated underline */}
            <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%] rounded-full"></span>
          </li>
        ))}
        {/* CTA Button */}
        <li className="ml-3">
          <Link
            to="contact"
            smooth
            duration={500}
            className="cursor-pointer px-5 py-2 text-sm font-Montserrat font-semibold tracking-wider text-white border border-cyan-400/50 rounded-full hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
          >
            Hire Me
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-[60] text-white md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
      >
        {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#050508]/98 backdrop-blur-2xl flex flex-col justify-center items-center
                    transform transition-all duration-500 ease-in-out z-50 ${
          nav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Decorative element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />

        <ul className="text-center relative z-10">
          {links.map(({ id, link }) => (
            <li key={id} className="cursor-pointer py-4">
              <Link
                to={link}
                smooth
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-cyan-400"
                onClick={() => setNav(false)}
                className="text-3xl font-nike tracking-[0.15em] uppercase text-gray-200 hover:text-white hover:tracking-[0.25em] transition-all duration-300 block"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 w-24 h-[1px] bg-gradient-to-r from-cyan-400/0 via-cyan-400/60 to-cyan-400/0" />
      </div>
    </div>
  );
};

export default NavBar;
