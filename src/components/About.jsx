import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "2+", label: "Years Coding" },
  { value: "10+", label: "Technologies" },
];

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    )
      .fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        ".stat-card",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.12 },
        "-=0.5"
      );
  }, []);

  return (
    <section
      name="about"
      ref={sectionRef}
      className="w-full min-h-screen bg-[#0a0a0f] dot-grid flex items-center justify-center px-6 py-24 scroll-mt-20 relative"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-screen-lg mx-auto w-full text-white relative z-10">

        {/* Section Label + Heading */}
        <div ref={headingRef} className="mb-14">
          <p className="text-xs font-Montserrat tracking-[0.35em] text-cyan-400 uppercase mb-3">
            01 — About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-nike tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 inline-block">
            ABOUT
          </h2>
          <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
        </div>

        {/* Content Grid */}
        <div ref={contentRef} className="grid md:grid-cols-3 gap-8 items-start">

          {/* Text Block */}
          <div className="md:col-span-2 space-y-5">
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] rounded-2xl p-7 md:p-9 space-y-5 card-glow transition-all duration-500">
              <p className="text-gray-300 text-base md:text-[1.05rem] leading-[1.85] font-light">
                As a dedicated{" "}
                <span className="text-white font-semibold">
                  full-stack developer
                </span>
                , I architect and deploy complete, end-to-end web applications.
                My expertise seamlessly bridges{" "}
                <span className="text-cyan-400 font-medium">
                  frontend and backend technologies
                </span>
                , allowing me to build robust, scalable solutions with an unwavering
                focus on both intuitive user experiences and efficient server-side
                performance.
              </p>
              <div className="w-full h-[1px] bg-gradient-to-r from-white/10 via-cyan-400/20 to-transparent" />
              <p className="text-gray-300 text-base md:text-[1.05rem] leading-[1.85] font-light">
                I have successfully delivered{" "}
                <span className="text-white font-semibold">
                  over five complete full-stack projects
                </span>
                , demonstrating hands-on knowledge of modern technology stacks.
                My portfolio showcases proficiency in{" "}
                <span className="text-cyan-400 font-medium">React</span> and{" "}
                <span className="text-cyan-400 font-medium">Node.js</span>,
                alongside a deep understanding of{" "}
                <span className="text-cyan-400 font-medium">WebSockets</span> and{" "}
                <span className="text-cyan-400 font-medium">RESTful API design</span>.
                My approach is rooted in writing clean, maintainable code to solve
                complex challenges.
              </p>
            </div>
          </div>

          {/* Stats Column */}
          <div className="flex flex-col gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="stat-card bg-white/[0.03] border border-white/[0.07] rounded-xl p-6 text-center hover:border-cyan-400/25 hover:bg-white/[0.05] transition-all duration-400 group"
              >
                <span className="block text-4xl font-nike bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text tracking-wider group-hover:from-cyan-200 group-hover:to-blue-300 transition-all duration-300">
                  {value}
                </span>
                <span className="mt-1 block text-xs font-Montserrat tracking-[0.15em] text-gray-400 uppercase font-light">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
