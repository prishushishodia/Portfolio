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
      className={`fixed w-full h-20 px-8 z-50 transition-all duration-300 ${
        scroll ? "bg-[#120E0E]" : "bg-transparent"
      } text-white flex items-center`}
    >
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
      <h1 className="text-5xl font-signature ml-4 mt-1 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text leading-normal overflow-visible">
  PS
</h1>


        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200">
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
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-white md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#120E0E] text-white">
            {links.map(({ id, link }) => (
              <li key={id} className="px-4 cursor-pointer capitalize py-3 text-2xl">
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
        )}
      </div>
    </div>
  );
};

export default NavBar;
