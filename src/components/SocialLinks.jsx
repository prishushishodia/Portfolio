import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      label: "LinkedIn",
      icon: <FaLinkedin size={25} />,
      href: "https://www.linkedin.com/in/priyanshu-shishodia",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      label: "GitHub",
      icon: <FaGithub size={25} />,
      href: "https://github.com/prishushishodia",
    },
    {
      id: 3,
      label: "Mail",
      icon: <HiOutlineMail size={25} />,
      href: "mailto:priyanshushishodia008@gmail.com",
    },
    {
      id: 4,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={25} />,
      href: "/Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="fixed flex flex-col top-[35%] left-0 z-50">
      <ul>
        {links.map(({ id, label, icon, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center bg-opacity-30 w-44 h-14 px-4 ml-[-120px] hover:ml-[-5px] 
            hover:bg-blue-500 hover:scale-105 hover:shadow-lg hove:opacity-70 hover:rounded-md duration-300 text-white bg-gray-400 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-sm font-semibold">{label}</span>
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;