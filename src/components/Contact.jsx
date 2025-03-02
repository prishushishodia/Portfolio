import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen flex items-center justify-center bg-[#1D1616]">
      <div className="max-w-screen-lg w-full p-6 md:p-8 mx-auto">
        <div className="text-center mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-4 text-gray-300">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center">
          <form
            action="https://getform.io/f/bgdplwda"
            method="POST"
            className="w-full md:w-1/2 bg-[#262020] p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name."
                className="w-full p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email."
                className="w-full p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Enter your message."
                rows="6"
                className="w-full p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              ></textarea>
            </div>

            <button className="w-full text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-105 transform duration-300 shadow-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
