import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      label: "LinkedIn",
      icon: <FaLinkedin size={18} />,
      href: "https://www.linkedin.com/in/priyanshu-shishodia",
    },
    {
      id: 2,
      label: "GitHub",
      icon: <FaGithub size={18} />,
      href: "https://github.com/prishushishodia",
    },
    {
      id: 3,
      label: "Email",
      icon: <HiOutlineMail size={18} />,
      href: "mailto:priyanshushishodia008@gmail.com",
    },
    {
      id: 4,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={18} />,
      href: "/Resume.pdf",
      download: "Resume.pdf",
    },
  ];

  return (
    <div className="fixed hidden md:flex flex-col top-[38%] left-0 z-50">
      {/* Vertical line above */}
      <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-white/10 mx-auto mb-2" />

      <ul className="flex flex-col gap-1.5">
        {links.map(({ id, label, icon, href, download }) => (
          <li key={id}>
            <a
              href={href}
              download={download}
              target={download ? "_self" : "_blank"}
              rel="noreferrer"
              className="group flex justify-between items-center w-36 px-3 py-2.5
                         bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm
                         ml-[-100px] hover:ml-0 transition-all duration-300 ease-out
                         hover:bg-white/[0.08] hover:border-cyan-400/30
                         rounded-r-xl text-gray-400 hover:text-white"
            >
              {/* Label on left — hidden when shifted off-screen */}
              <span className="text-xs font-Montserrat font-semibold tracking-[0.1em] uppercase">
                {label}
              </span>
              {/* Icon on right — the visible "tab" when shifted */}
              <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200 shrink-0 ml-2">
                {icon}
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Vertical line below */}
      <div className="w-[1px] h-10 bg-gradient-to-b from-white/10 to-transparent mx-auto mt-2" />
    </div>
  );
};

export default SocialLinks;
