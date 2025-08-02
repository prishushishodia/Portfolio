import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%", // Start animation when the top of the section is 70% from the top of the viewport
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    ).fromTo(
      formRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.4" // Start this animation 0.4 seconds before the previous one ends
    );
  }, []);

  return (
    <div
      name="contact"
      ref={containerRef}
      className="w-full min-h-screen flex items-center justify-center bg-[#000000] px-4 py-12"
    >
      <div className="max-w-screen-xl w-full p-6 mx-auto">
        <div ref={textRef} className="text-center mb-12">
          <p className="text-5xl font-nike hover:text-blue-500 text-white mb-4 tracking-wider">
            CONTACT
          </p>
          <p className="text-gray-300 font-thin text-lg sm:text-xl font-light">
            Submit the form below to get in touch with me.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Contact Info (for larger screens) */}
          <div className="hidden md:flex flex-col items-start w-full md:w-1/2 p-6 rounded-lg">
            <h3 className="text-3xl hover:text-blue-500  font-Montserrat  text-white mb-4">LET'S CONNECT!</h3>
            <p className="text-gray-400 font-thin text-lg mb-6">
              I am always open to new opportunities and collaborations. Feel free to reach out to me directly or connect with me on social media.
            </p>
            <div className="flex items-center text-white mb-4">
              <HiOutlineMail size={30} className="mr-3 text-cyan-400" />
              <span className="text-lg font-semibold">priyanshushishodia008@gmail.com</span>
            </div>
            {/* You can add more social links here if you want */}
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="w-full md:w-1/2">
            <form
              action="https://getform.io/f/bgdplwda"
              method="POST"
              className="bg-[#1a1a1a] p-8 rounded-2xl shadow-2xl space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  className="w-full p-3 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                ></textarea>
              </div>

              <button className="w-full text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 rounded-md hover:scale-105 transform duration-300 shadow-lg">
                Let's Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;