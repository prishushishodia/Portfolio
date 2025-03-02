import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Events, scrollSpy } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
      scrollSpy.update(); // Fix issue with detecting active section
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    Events.scrollEvent.register("begin", (to) => setActiveLink(to));
    Events.scrollEvent.register("end", (to) => setActiveLink(to));
    
    scrollSpy.update(); // Ensure scroll tracking updates

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" }, // Must be lowercase to match section ID
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
        <h1 className="text-5xl font-signature ml-4 mt-1 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text leading-tight">
          PS
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 ${
                activeLink === link ? "text-blue-400" : "text-white"
              }`}
            >
              <Link
                to={link}
                smooth
                duration={500}
                spy={true} // Ensures the active class works
                exact="true"
                offset={-70} // Prevents navbar from covering sections
                activeClass="text-blue-400"
                onClick={() => setActiveLink(link)}
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
              <li
                key={id}
                className={`px-4 cursor-pointer capitalize py-3 text-2xl ${
                  activeLink === link ? "text-blue-400" : "text-white"
                }`}
              >
                <Link
                  onClick={() => {
                    setNav(false);
                    setActiveLink(link);
                  }}
                  to={link}
                  smooth
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-70}
                  activeClass="text-blue-400"
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
