import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1D1616] flex items-center justify-center">
      <div className="max-w-screen-lg p-6 md:p-8 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <div className="bg-[#262020] p-6 md:p-8 rounded-lg shadow-lg">
          <p className="text-lg md:text-xl leading-relaxed">
          I’ve successfully designed and developed several projects ranging from responsive websites to dynamic web applications. These experiences have sharpened my skills in HTML, CSS, JavaScript, React, Tailwind CSS, and more. I thrive on solving complex problems, crafting user-friendly interfaces, and building seamless web experiences.
          </p>

          <br />

          <p className="text-lg md:text-xl leading-relaxed">
          What sets me apart is my commitment to continuous learning. Whether it’s exploring cutting-edge technologies like Next.js, Node.js, or enhancing performance optimization strategies, I’m always eager to expand my skill set and deliver high-quality solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
