

import React from "react";
import HeroImage from "../assets/profile.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full pt-20 " // Removed h-screen and added pt-20 for spacing
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-screen px-4 md:flex-row md:gap-8">
        <div className="flex flex-col justify-center mb-4 md:pr-8">
          <h2 className="text-4xl sm:text-7xl font-bold">
            Full Stack Developer
          </h2>
          <p className="py-4 max-w-md">
            Hi there! I’m Priyanshu Shishodia, a passionate web developer with a knack for quickly learning and adapting to new technologies. My curiosity and commitment to staying ahead in the ever-evolving world of web development have helped me build expertise in modern frameworks, tools, and best practices.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-8">
  <img
    src={HeroImage}
    alt="my profile"
    className="rounded-2xl mx-auto w-1/2 md:w-3/4"
  />
</div>

      </div>
    </div>
  );
};

export default Home;
