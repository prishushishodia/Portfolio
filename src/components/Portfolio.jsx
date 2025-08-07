import React from "react";
import uber from "../assets/uber.jpg";
import chatapp from "../assets/chatapp.jpg";
import oversocs from "../assets/socks1.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chatapp,
      title: "Chat-App",
      description: "A real time chatting application using socket-IO",
      details: [
        "Utilized Socket.io to enable real-time one-on-one and group messaging with instant message delivery and active user sync.",
        "Built a responsive and scalable UI supporting 100+ concurrent users with secure group creation and member management.",
        "Implemented file sharing functionality allowing users to send images and documents seamlessly within conversations.",
      ],
      demoLink: "https://chat-app-client-five-zeta.vercel.app/",
      codeLink: "https://github.com/prishushishodia/ChatAPP-Client",
    },
    {
      id: 2,
      src: uber,
      title: "Uber",
      description: "A full-stack Uber clone with passenger and driver apps.",
      details: [
        "Built a real-time ride-booking platform supporting 2 user roles for User and Captain with live trip updates via WebSockets.",
        "Integrated Google Maps API for location search, time/distance, fare calculation, auto-complete suggestions, and live tracking with marker updates.",
        "Achieved 100% route protection using JWT auth and role-based middleware.",
        "Optimized frontend responsiveness and live map interaction using React and state hooks.",
      ],
      demoLink: "https://uber-zeta-woad.vercel.app/",
      codeLink: "https://github.com/prishushishodia/UBER",
    },
    {
      id: 3,
      src: oversocs,
      title: "Oversocs",
      description: "An e-commerce website to shop exclusive socks with a modern UI.",
      details: [
        "Developed a scalable, full-stack e-commerce website for branded socks with product listings, filtering, and smooth animations, handling 500+ daily visitors.",
        "Integrated secure user authentication, product management, and cart functionality using React and Node.js for a seamless checkout experience.",
        "Leveraged Framer Motion and GSAP for engaging micro-interactions, improving user engagement by 40% during testing.",
      ],
      demoLink: "https://oversocs-d86z.vercel.app/",
      codeLink: "https://github.com/prishushishodia/OVERSOCS",
    },
  ];

  return (
    <section
      id="portfolio"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-12"
    >
      <div className="max-w-screen-xl mx-auto w-full h-full flex flex-col">
        {/* Title */}
        <div className="pb-8 text-center group transition-colors duration-300">
     <h2 className="text-4xl md:text-5xl bg-black bg-opacity-80 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-bold font-nike tracking-wider  inline-block px-4 py-1">
  PORTFOLIO
</h2>


          <p className="text-gray-300 font-thin text-lg sm:text-xl">
            Check out some of my work right here
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch md:gap-4 lg:gap-6">
          {portfolios.map(
            ({ id, src, title, description, details, demoLink, codeLink }) => (
              <div
                key={id}
                className="
                  group relative w-full md:w-1/3 flex-shrink-0 flex flex-col
                  bg-white/10 backdrop-blur-md shadow-lg rounded-2xl
                  overflow-hidden cursor-pointer mb-8 md:mb-0
                  h-[350px] transition-all duration-500 ease-in-out
                  hover:h-[550px] hover:md:h-[600px]
                "
              >
                {/* Image */}
                <div className="relative h-2/3 overflow-hidden">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex-grow flex flex-col justify-between text-center">
                  {/* Title + short description */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-300 text-sm">{description}</p>
                  </div>

                  {/* Details list (on hover expand) */}
                  <div
                    className="
                      overflow-hidden max-h-0
                      transition-all duration-500 ease-in-out
                      group-hover:max-h-full group-hover:mt-4
                    "
                  >
                    <ul className="text-left text-gray-300 text-xs list-disc list-inside mb-4 max-h-40 overflow-y-auto pr-2">
                      {details.map((detail, index) => (
                        <li key={index} className="mb-1">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-center gap-4 mt-auto pt-4">
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        px-4 py-2 flex-1 text-center
                        bg-gradient-to-r from-cyan-500 to-blue-500
                        rounded-md hover:scale-105 transition
                      "
                    >
                      Demo
                    </a>
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        px-4 py-2 flex-1 text-center
                        bg-gray-700 rounded-md
                        hover:scale-105 transition
                      "
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
