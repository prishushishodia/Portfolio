import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
  {
    company: "Techkrate",
    role: "Full Stack Developer Intern",
    summary:
      "Architected and delivered backend modules for a production e-commerce platform using Node.js, Express.js, and MongoDB.",
    points: [
      "Built secure REST APIs for product management, cart, and order processing with JWT authentication and role-based access control.",
      "Contributed to the React.js frontend — implemented responsive product listings and checkout flows integrated with backend business logic.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT"],
  },
  {
    company: "Hypeliv",
    role: "Full Stack Developer Intern",
    summary:
      "Engineered and delivered a production website for a US-based client using React.js with a headless CMS backend.",
    points: [
      "Built backend services for an AI-powered creator analytics platform using NestJS, BullMQ for async job queuing, and PostgreSQL via TypeORM; integrated AWS S3, Rekognition, and SES for media storage, content moderation, and transactional email.",
      "Participated in code reviews, debugging sessions, and sprint planning to drive iterative feature delivery.",
    ],
    stack: ["React.js", "NestJS", "BullMQ", "PostgreSQL", "TypeORM", "AWS"],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".exp-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Fill the timeline bar from top to bottom as the user scrolls through it.
    const fillTween = gsap.fromTo(
      fillRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top 65%",
          end: "bottom 75%",
          scrub: true,
        },
      }
    );

    return () => {
      fillTween.scrollTrigger?.kill();
      fillTween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-[#0a0a0f] dot-grid flex items-center justify-center px-6 py-24 scroll-mt-20 relative"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-blue-600/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-screen-lg mx-auto w-full text-white relative z-10">

        {/* Section Label + Heading */}
        <div className="mb-14">
          <p className="text-xs font-Montserrat tracking-[0.35em] text-cyan-400 uppercase mb-3">
            03 — Where I've Worked
          </p>
          <h2 className="text-4xl md:text-5xl font-nike tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 inline-block">
            EXPERIENCE
          </h2>
          <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — dark track that fills with cyan on scroll */}
          <div
            ref={trackRef}
            className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-[1.5px] bg-white/[0.06] overflow-hidden"
          >
            <div
              ref={fillRef}
              className="absolute inset-0 origin-top bg-gradient-to-b from-cyan-300 via-cyan-400 to-blue-500"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <div className="flex flex-col gap-8">
            {experiences.map(({ company, role, summary, points, stack }) => (
              <div key={company} className="exp-card relative pl-10 md:pl-14">
                {/* Timeline dot */}
                <span className="absolute left-0 top-7 w-4 h-4 rounded-full bg-[#0a0a0f] border-2 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.5)]">
                  <span className="absolute inset-[3px] rounded-full bg-cyan-400 animate-pulse" />
                </span>

                <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] rounded-2xl p-7 md:p-9 card-glow hover:border-cyan-400/25 transition-all duration-500">
                  {/* Company + role */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h3 className="text-2xl md:text-3xl font-nike tracking-wider text-white">
                      {company}
                    </h3>
                    <span className="text-xs font-Montserrat tracking-[0.15em] text-cyan-300 uppercase font-light">
                      {role}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-300 text-base md:text-[1.05rem] leading-[1.8] font-light mb-5">
                    {summary}
                  </p>

                  <div className="w-full h-[1px] bg-gradient-to-r from-white/10 via-cyan-400/20 to-transparent mb-5" />

                  {/* Bullet points */}
                  <ul className="space-y-3">
                    {points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-gray-300 text-sm md:text-base leading-[1.75] font-light">
                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-Montserrat tracking-wide text-cyan-300 bg-cyan-400/[0.06] border border-cyan-400/15 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
