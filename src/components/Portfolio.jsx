import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import uber from "../assets/uber.jpg";
import chatapp from "../assets/chatapp.jpg";
import oversocs from "../assets/socks1.jpg";
import autocrawler from "../assets/batman.jpg";

const Portfolio = () => {
  const sectionRef = useRef(null);

  const portfolios = [
    {
      id: 1,
      src: chatapp,
      title: "Chat-App",
      description: "A real-time chat application powered by Socket.io",
      tags: ["Socket.io", "React", "Node.js"],
      details: [
        "Real-time one-on-one and group messaging with instant delivery",
        "Scalable UI supporting 100+ concurrent users",
        "File sharing for images and documents within conversations",
      ],
      demoLink: "https://chat-app-client-two-gamma.vercel.app/",
      codeLink: "https://github.com/prishushishodia/ChatAPP-Client",
    },
    {
      id: 2,
      src: uber,
      title: "Uber Clone",
      description: "A full-stack ride-booking platform with live tracking",
      tags: ["React", "Maps API", "WebSockets", "JWT"],
      details: [
        "Live trip updates via WebSockets for 2 user roles",
        "Google Maps integration with route & fare calculation",
        "100% route protection using JWT auth middleware",
      ],
      demoLink: "https://uber-zeta-woad.vercel.app/",
      codeLink: "https://github.com/prishushishodia/UBER",
    },
    {
      id: 3,
      src: oversocs,
      title: "Oversocs",
      description: "Full-stack e-commerce for exclusive socks with modern UI",
      tags: ["React", "Node.js", "Framer Motion", "GSAP"],
      details: [
        "Scalable product listings with filtering, handling 500+ daily visitors",
        "Secure authentication, cart & checkout functionality",
        "GSAP & Framer Motion micro-interactions improving engagement by 40%",
      ],
      demoLink: "https://oversocs-d86z.vercel.app/",
      codeLink: "https://github.com/prishushishodia/OVERSOCS",
    },
    {
      id: 4,
      src: autocrawler,
      title: "AutoCrawler",
      description: "A highly efficient web scraping and automation tool",
      tags: ["Node.js", "Puppeteer", "REST API"],
      details: [
        "Robust web crawler capable of extracting structured data at scale",
        "Error handling, rate limiting, and automatic request retries",
        "User-friendly interface to configure crawl settings and view data",
      ],
      demoLink: "https://auto-crawler.vercel.app",
      codeLink: "https://github.com/prishushishodia/AutoCrawler",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-[#0a0a0f] dot-grid text-white px-6 py-24 relative"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-screen-xl mx-auto w-full relative z-10">

        {/* Section Label + Heading */}
        <div className="mb-14">
          <p className="text-xs font-Montserrat tracking-[0.35em] text-cyan-400 uppercase mb-3">
            03 — Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-nike tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 inline-block">
            PORTFOLIO
          </h2>
          <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
          <p className="mt-5 text-gray-400 font-light text-base md:text-lg font-Montserrat tracking-wide">
            A selection of projects I've built
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {portfolios.map(({ id, src, title, description, tags, details, demoLink, codeLink }) => (
            <div
              key={id}
              className="project-card group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden
                         hover:border-cyan-400/20 transition-all duration-500 card-glow"
            >
              {/* Image area */}
              <div className="relative h-52 md:h-56 overflow-hidden">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Action buttons — appear on hover */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-200"
                    title="Live Demo"
                  >
                    <FiExternalLink size={16} />
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200"
                    title="Source Code"
                  >
                    <FiGithub size={16} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title & Description */}
                <h3 className="text-xl font-nike tracking-wide text-white mb-1.5">{title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-Montserrat font-medium tracking-wider text-cyan-300 bg-cyan-400/8 border border-cyan-400/15 rounded-full uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Details — visible on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                  <ul className="custom-scroll space-y-1.5 mb-4 overflow-y-auto max-h-36">
                    {details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400/70 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-1">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-Montserrat font-medium tracking-wider
                               bg-gradient-to-r from-cyan-500/90 to-blue-600/90 hover:from-cyan-400 hover:to-blue-500
                               rounded-xl text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02]"
                  >
                    <FiExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-Montserrat font-medium tracking-wider
                               bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20
                               rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-[1.02]"
                  >
                    <FiGithub size={14} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
