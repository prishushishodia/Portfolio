
import React from "react";
import currency from "../assets/currency.jpg";
import todo from "../assets/todo.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: todo,
      title: "To-Do App",
      description: "A simple yet efficient task management app.",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      src: currency,
      title: "Currency Converter",
      description: "Real-time exchange rates for multiple currencies.",
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <div name="portfolio" className="w-full md:h-screen flex flex-col items-center">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Title Section */}
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0 place-items-center">
          {portfolios.map(({ id, src, title, description, demoLink, codeLink }) => (
            <div key={id} className="w-80 h-full flex flex-col shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              {/* Image */}
              <img
                src={src}
                alt={title}
                className="h-48 w-full object-cover rounded-t-lg duration-300 hover:scale-105"
              />
              
              {/* Content */}
              <div className="p-4 flex-grow flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{description}</p>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-center gap-4 mt-4 pb-4">
                  <a
                    href={demoLink}
                    className="w-1/2 px-4 py-2 text-center bg-cyan-500 text-white rounded-md hover:scale-105 transition duration-300"
                  >
                    Demo
                  </a>
                  <a
                    href={codeLink}
                    className="w-1/2 px-4 py-2 text-center bg-gray-700 text-white rounded-md hover:scale-105 transition duration-300"
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
