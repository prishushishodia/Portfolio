import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import javascript from "../assets/JavaScript.png";
import react from "../assets/React.png";
import nextjs from "../assets/next-light.svg";
import nodejs from "../assets/Node.js.png";
import mongoDB from "../assets/MongoDB.png";
import tailwind from "../assets/Tailwind.png";
import express from "../assets/express-light.svg";
import TS from "../assets/TypeScript.png";
import SQL from "../assets/SQL.png";
import redis from "../assets/redis.svg";
import postgres from "../assets/PostgresSQL.png";
import aws from "../assets/aws.svg";
import nestjs from "../assets/nestjs.svg";
import cms from "../assets/strapi.svg";

const Skills = () => {
  const techs = [
    { id: 1, src: javascript, title: "JavaScript", category: "Frontend" },
    { id: 2, src: tailwind, title: "Tailwind CSS", category: "Frontend" },
    { id: 3, src: react, title: "React", category: "Frontend" },
    { id: 4, src: nodejs, title: "Node.js", category: "Backend" },
    { id: 5, src: mongoDB, title: "MongoDB", category: "Backend" },
    { id: 6, src: express, title: "Express.js", category: "Backend" },
    { id: 7, src: nextjs, title: "Next.js", category: "Fullstack" },
    { id: 8, src: TS, title: "TypeScript", category: "Language" },
    { id: 9, src: SQL, title: "SQL", category: "Database" },
    { id: 10, src: redis, title: "Redis", category: "Database" },
    { id: 11, src: postgres, title: "PostgreSQL", category: "Database" },
    { id: 12, src: aws, title: "AWS", category: "Cloud" },
    { id: 13, src: nestjs, title: "NestJS", category: "Backend" },
    { id: 14, src: cms, title: "CMS", category: "CMS" },
  ];

  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".tech-box",
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.07,
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
      ref={skillsRef}
      className="w-full min-h-screen bg-[#06060b] flex items-center justify-center px-6 py-24 relative"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-screen-lg mx-auto w-full text-white relative z-10">

        {/* Section Label + Heading */}
        <div className="mb-14">
          <p className="text-xs font-Montserrat tracking-[0.35em] text-cyan-400 uppercase mb-3">
            02 — Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-nike tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 inline-block">
            SKILLS
          </h2>
          <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
          <p className="mt-5 text-gray-400 font-light text-base md:text-lg font-Montserrat tracking-wide">
            Technologies I've worked with
          </p>
        </div>

        {/* Tech Grid — flex-wrap + center so an incomplete last row stays centered */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {techs.map(({ id, src, title, category }) => (
            <div
              key={id}
              className="tech-box group relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 flex flex-col items-center justify-center
                         basis-[calc((100%-2rem)/3)] sm:basis-[calc((100%-3rem)/4)] md:basis-[calc((100%-6.25rem)/6)]
                         hover:bg-white/[0.06] hover:border-cyan-400/25 transition-all duration-350 cursor-default"
            >
              {/* Hover glow background */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.06) 0%, transparent 70%)" }} />

              <img
                src={src}
                alt={title}
                className="w-10 md:w-12 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10"
              />
              <p className="mt-3 text-xs md:text-sm font-medium text-gray-300 group-hover:text-cyan-300 transition-colors duration-300 text-center relative z-10 font-Montserrat tracking-wide">
                {title}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-12 flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/10" />
          <p className="text-xs font-Montserrat tracking-[0.2em] text-gray-500 uppercase px-4">
            & always learning more
          </p>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
