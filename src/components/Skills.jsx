
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div id="skills" ref={skillsRef} className="w-full h-auto min-h-screen bg-[#1D1616] flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto p-6 md:p-8 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Skills</p>
          <p className="py-6 text-lg">Technologies I’ve worked with:</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 sm:gap-8 text-center py-8">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`tech-box bg-[#262020] shadow-md hover:scale-105 transition-transform duration-300 p-6 rounded-xl ${style}`}
            >
              <img src={src} alt={title} className="w-16 md:w-20 mx-auto" />
              <p className="mt-4 text-lg font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
