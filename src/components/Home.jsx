import React, { useEffect, useRef } from "react";
import HeroImage from "../assets/profile.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RotatingText from "./RotatingText";

const Home = () => {
  const homeRef = useRef(null);
  const textRef = useRef(null);
  const imgContainerRef = useRef(null);




  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: homeRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      imgContainerRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: homeRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <div
      name="home"
      ref={homeRef}
      className="w-full pt-20 bg-[#1D1616] min-h-screen flex items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-12">
        
        {/* Text Section */}
        <div ref={textRef} className="flex flex-col justify-center md:items-start items-center text-center md:text-left">
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight flex flex-wrap gap-2">
            I'm a{" "}
            <RotatingText
              texts={["Full Stack Developer", "Frontend Designer", "Footballer"]}
              mainClassName="px-2 bg-cyan-400 text-black overflow-hidden rounded-md"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={1500}
            />
          </h1>

          <p className="text-gray-300 max-w-md mb-6 mt-4">
            Full Stack Developer passionate about building impactful, user-centric web applications. Skilled in modern tech stacks with a focus on clean, scalable solutions. Eager to embrace growth, innovation, and new opportunities.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

       <div ref={imgContainerRef} className="mt-8 md:mt-0 flex justify-center items-center">
  <img
    src={HeroImage}
    alt="profile"
    className="rounded-2xl hover:scale-105 translate-x-[-100]  transition-transform duration-300 max-w-[400px] md:max-w-[400px] w-full h-auto"
  />
</div>

      </div>
    </div>
  );
};

export default Home;
