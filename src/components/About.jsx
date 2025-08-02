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
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
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
      name="about"
      ref={sectionRef}
      className="w-full min-h-screen bg-black flex items-center justify-center px-4 py-12 scroll-mt-20"
    >
      <div className="max-w-screen-lg mx-auto w-full text-white space-y-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-nike tracking-wider inline-block hover:text-blue-400 transition duration-300">
            ABOUT
          </h2>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="bg-white/5 backdrop-blur-lg p-6 md:p-10 rounded-2xl shadow-2xl text-gray-200 text-center md:text-left space-y-6 border border-white/10 transition-all duration-300"
        >
          <p className="text-base md:text-lg leading-relaxed">
            As a{" "}
            <span className="text-blue-400 font-semibold">
              full-stack developer
            </span>
            , I specialize in building complete, end-to-end web applications. My
            expertise spans both frontend and backend technologies, enabling me
            to design robust solutions with seamless user experiences and
            scalable server-side architectures.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            My projects reflect a strong command of modern stacks like{" "}
            <span className="text-blue-400 font-semibold">React</span>,{" "}
            <span className="text-blue-400 font-semibold">Web Sockets</span>,{" "}
            <span className="text-blue-400 font-semibold">Node.js</span>, and{" "}
            <span className="text-blue-400 font-semibold">REST APIs</span>. I
            focus on clean, efficient code and love solving complex problems
            with high-impact results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
