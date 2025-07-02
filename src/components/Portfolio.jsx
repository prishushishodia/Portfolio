import React from "react";
import currency from "../assets/currency.jpg";
import todo from "../assets/chatapp.jpg";
import oversocs from "../assets/sock1.png"; // Make sure to have an image for Oversocs project

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: todo,
      title: "Chat-App",
      description: "A real time chatting application using socket-IO",
      demoLink: "https://connected-gamma.vercel.app/",
      codeLink: "#",
    },
  

    {
      id: 3,
      src: oversocs,
      title: "Oversocs",
      description: "A bold, e-commerce website to shop exclusive socks with a modern UI.",
      demoLink: "https://oversocs-d86z.vercel.app/",
      codeLink: "https://github.com/prishushishodia/OVERSOCS",
    },
  ];

  return (
    <div name="portfolio" className="w-full min-h-screen flex flex-col items-center bg-[#1D1616] text-white px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full py-12">
        
        {/* Title */}
        <div className="pb-8 text-center">
          <h2 className="text-5xl font-extrabold text-transparent text-white mb-4">
            Portfolio
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl">
            Check out some of my work right here
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {portfolios.map(({ id, src, title, description, demoLink, codeLink }) => (
            <div
              key={id}
              className="w-80 h-full flex flex-col bg-white/10 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Image */}
              <img
                src={src}
                alt={title}
                className="h-48 w-full object-cover duration-300 hover:scale-110"
              />

              {/* Content */}
              <div className="p-4 flex-grow flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-300 text-sm">{description}</p>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-center gap-4 mt-4">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 w-1/2 text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:scale-105 transition duration-300"
                  >
                    Demo
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 w-1/2 text-center bg-gray-700 text-white rounded-md hover:scale-105 transition duration-300"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
