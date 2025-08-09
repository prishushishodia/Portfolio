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
     <h2 className="text-4xl md:text-5xl bg-black bg-opacity-80 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-bold font-nike tracking-wider inline-block px-4 py-1">
  ABOUT
</h2>


        </div>

        {/* Content */}
       <div
  ref={contentRef}
  className="bg-white/5 backdrop-blur-lg p-6 md:p-10 rounded-2xl shadow-2xl text-gray-400 text-center md:text-left space-y-6 border border-white/10 transition-all duration-300"
>
  <p className="text-base md:text-lg leading-relaxed">
    As a dedicated <span className="text-white font-semibold">full-stack developer</span>, I architect and deploy complete, end-to-end web applications. My expertise seamlessly bridges <span className="text-blue-400 font-semibold">frontend and backend technologies</span>, allowing me to build robust, scalable solutions with an unwavering focus on both intuitive user experiences and efficient server-side performance.
  </p>
  <p className="text-base md:text-lg leading-relaxed">
    I have successfully delivered **over five complete full-stack projects**, demonstrating hands-on knowledge and a strong command of modern technology stacks. My portfolio showcases proficiency in frameworks and libraries such as <span className="text-blue-400 font-semibold">React</span> and <span className="text-blue-400 font-semibold">Node.js</span>, alongside a deep understanding of core concepts like <span className="text-blue-400 font-semibold">WebSockets</span> and <span className="text-blue-400 font-semibold">RESTful API design</span>. My approach is rooted in writing clean, maintainable code to solve complex challenges, resulting in high-impact applications that are both functional and performant.
  </p>
</div>
      </div>
    </section>
  );
};

export default About;
