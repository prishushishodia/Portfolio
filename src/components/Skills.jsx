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
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: tailwind, title: "Tailwind CSS", style: "shadow-blue-400" },
    { id: 5, src: react, title: "React", style: "shadow-sky-400" },
    { id: 6, src: nodejs, title: "Node.js", style: "shadow-green-300" },
    { id: 7, src: mongoDB, title: "MongoDB", style: "shadow-green-500" },
    { id: 8, src: express, title: "Express.js", style: "shadow-gray-700" },
    { id: 9, src: nextjs, title: "Next.js", style: "shadow-gray-800" },
    { id: 10, src: TS, title: "TypeScript", style: "shadow-blue-700" },
    { id: 11, src: SQL, title: "SQL", style: "shadow-blue-500" },
    { id: 12, src: Wordpress, title: "WordPress", style: "shadow-blue-600" },
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
      className="w-full min-h-screen bg-black flex items-center justify-center px-4 py-12"
    >
      <div className="max-w-screen-lg mx-auto w-full text-white">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-nike tracking-wider border-b-4 border-blue-500 inline-block hover:text-blue-400 transition duration-300">
            SKILLS
          </h2>
          <p className="mt-4 text-gray-400 font-thin text-lg md:text-xl">Technologies I’ve worked with:</p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 font-thin sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 px-2">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`tech-box group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 ${style}`}
            >
              <img src={src} alt={title} className="w-14 md:w-16 object-contain" />
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
