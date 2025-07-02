import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <div
      name="about"
      ref={sectionRef}
      className="w-full min-h-screen bg-[#1D1616] flex items-center justify-center px-4"
    >
      <div className="max-w-screen-lg p-6 md:p-8 mx-auto flex flex-col justify-center w-full h-full text-white">
        
        {/* Heading */}
        <div className="pb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="bg-[#262020] p-6 md:p-8 rounded-xl shadow-lg text-gray-300 text-center md:text-left space-y-6"
        >
          <p className="text-lg md:text-xl leading-relaxed">
            I’ve successfully designed and developed projects ranging from responsive websites to dynamic web applications. These experiences have sharpened my skills in HTML, CSS, JavaScript, React, Tailwind CSS, and more. I thrive on solving complex problems and crafting seamless web experiences.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            What sets me apart is my commitment to continuous learning. Whether it’s exploring cutting-edge technologies like Next.js, Node.js, or enhancing performance optimization strategies, I’m always eager to expand my skill set and deliver high-quality solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
