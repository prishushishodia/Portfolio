import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Assets
import html from "../assets/HTML5.png";
import css from "../assets/css.png";
import javascript from "../assets/JavaScript.png";
import react from "../assets/React.png";
import nextjs from "../assets/Next.js.png";
import nodejs from "../assets/Node.js.png";
import mongoDB from "../assets/MongoDB.png";
import tailwind from "../assets/Tailwind.png";
import express from "../assets/Express.png";
import TS from "../assets/TypeScript.png";
import PostgresSQL from "../assets/PostgresSQL.png";
import Wordpress from "../assets/Wordpress.png";
import SQL from "../assets/SQL.png";

const Skills = () => {
  const techs = [
    { id: 1, src: html, title: "HTML" },
    { id: 2, src: css, title: "CSS" },
    { id: 3, src: javascript, title: "JavaScript" },
    { id: 4, src: tailwind, title: "Tailwind CSS" },
    { id: 5, src: react, title: "React" },
    { id: 6, src: nodejs, title: "Node.js" },
    { id: 7, src: mongoDB, title: "MongoDB" },
    { id: 8, src: express, title: "Express.js" },
    { id: 9, src: nextjs, title: "Next.js" },
    { id: 10, src: TS, title: "TypeScript" },
    { id: 11, src: SQL, title: "SQL" },
    { id: 12, src: Wordpress, title: "WordPress" },
  ];

  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".tech-box",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      // Changed background to match the dark theme of the home page
      className="w-full min-h-screen bg-black flex items-center justify-center px-4 py-12"
    >
      <div className="max-w-screen-lg mx-auto w-full text-white">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl bg-black bg-opacity-80 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-bold font-nike tracking-wider  inline-block ">
            SKILLS
          </h2>
          <p className="mt-4 text-white font-thin text-lg md:text-xl">Technologies I’ve worked with:</p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 font-thin sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 px-2">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className={`tech-box group bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg shadow-gray-950/50 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-[1.03] transition-transform duration-300 cursor-pointer`}
            >
              <img src={src} alt={title} className="w-14 md:w-16 object-contain" />
              {/* Text color now changes on hover to match the gradient on the home page */}
              <p className="mt-4 text-md md:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
