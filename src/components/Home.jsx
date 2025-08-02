import React, { useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RotatingText from "./RotatingText";

const Home = () => {
  const homeRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: homeRef.current,
        start: "top center",
        toggleActions: "play none none none",
      },
    });

    timeline
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.4"
      );
  }, []);

  return (
    <div
      name="home"
      ref={homeRef}
      className="relative pt-20 min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Image Layer with z-index */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(http://googleusercontent.com/image_generation_content/0)` }}
      ></div>
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
      
      {/* Content Container - now with a higher z-index */}
      <div className="relative z-20 max-w-screen-xl mx-auto flex flex-col items-center justify-center px-4 md:px-8 text-center py-24">
        {/* Title Section */}
        <div ref={titleRef}>
          <h1 className="text-5xl sm:text-7xl font-nike tracking-wide text-white mb-4 leading-tight">
            I'm a{" "}
            <RotatingText
              texts={["FULL STACK DEVELOPER", "FRONTEND DESIGNER", "FOOTBALLER"]}
              mainClassName="bg-gradient-to-r from-cyan-300 to-blue-700 text-black px-4 py-2 rounded-xl inline-block"
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
        </div>

        {/* Description Text */}
        <p ref={textRef} className="text-gray-300 font-light max-w-2xl text-lg sm:text-xl mb-8 mt-4">
          Full Stack Developer passionate about building impactful, user-centric web applications. Skilled in modern tech stacks with a focus on clean, scalable solutions. Eager to embrace growth, innovation, and new opportunities.
        </p>

        {/* Projects Button */}
        <div ref={buttonRef}>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group text-white w-fit px-8 py-4 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-colors duration-300 transform hover:scale-105"
          >
            Projects
            <span className="group-hover:rotate-90 duration-300 ml-2">
              <MdOutlineKeyboardArrowRight size={25} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;