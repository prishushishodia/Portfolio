import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  return (
    <div
      name="contact"
      ref={containerRef}
      className="w-full min-h-screen flex items-center justify-center bg-[#06060b] px-6 py-24 relative"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-screen-lg w-full mx-auto relative z-10">

        {/* Section Label + Heading */}
        <div className="mb-14">
          <p className="text-xs font-Montserrat tracking-[0.35em] text-cyan-400 uppercase mb-3">
            04 — Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-nike tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 inline-block">
            CONTACT
          </h2>
          <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
        </div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start">

          {/* Left Side — Info */}
          <div ref={textRef} className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-nike tracking-wide text-white mb-3">
                Let's work
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                  together.
                </span>
              </h3>
              <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                I'm always open to new opportunities, collaborations, and interesting
                conversations. Reach out and let's build something great.
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:priyanshushishodia008@gmail.com"
              className="flex items-start gap-3 group"
            >
              <div className="mt-0.5 p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors duration-300">
                <HiOutlineMail size={18} />
              </div>
              <div>
                <p className="text-[10px] font-Montserrat tracking-[0.2em] text-gray-500 uppercase mb-0.5">Email</p>
                <p className="text-sm text-gray-300 group-hover:text-cyan-300 transition-colors duration-300 break-all">
                  priyanshushishodia008@gmail.com
                </p>
              </div>
            </a>

            {/* Social links */}
            <div className="space-y-3">
              <p className="text-[10px] font-Montserrat tracking-[0.2em] text-gray-500 uppercase">Find me on</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/priyanshu-shishodia"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-gray-300 hover:text-white hover:border-blue-400/30 hover:bg-blue-400/8 transition-all duration-300 text-sm font-Montserrat font-medium"
                >
                  <FaLinkedin size={15} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/prishushishodia"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-gray-300 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 text-sm font-Montserrat font-medium"
                >
                  <FaGithub size={15} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Side — Form */}
          <div ref={formRef} className="md:col-span-3">
            <form
              action="https://getform.io/f/bgdplwda"
              method="POST"
              className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] p-7 md:p-9 rounded-2xl space-y-5 hover:border-white/10 transition-all duration-500"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-Montserrat tracking-[0.2em] text-gray-500 uppercase">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="input-glow w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-gray-600
                               focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all duration-300 font-light"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-Montserrat tracking-[0.2em] text-gray-500 uppercase">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="input-glow w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-gray-600
                               focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all duration-300 font-light"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-Montserrat tracking-[0.2em] text-gray-500 uppercase">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="input-glow w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-gray-600
                             focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all duration-300 resize-none font-light"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 font-Montserrat font-semibold text-sm tracking-wider
                           bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500
                           rounded-xl text-white hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.01]
                           transition-all duration-300"
              >
                Send Message
                <FiArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-Montserrat tracking-[0.15em] text-gray-600">
            © 2025 Priyanshu Shishodia. All rights reserved.
          </p>
          <p className="text-xs font-Montserrat tracking-[0.1em] text-gray-600">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
