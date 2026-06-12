import { useState, useEffect } from "react";
import { HiMiniBars2, HiXMark } from "react-icons/hi2";
import { Link } from "react-scroll";

const links = [
  { id: 1, link: "about", label: "About" },
  { id: 2, link: "skills", label: "Stack" },
  { id: 3, link: "experience", label: "Experience" },
  { id: 4, link: "portfolio", label: "Work" },
  { id: 5, link: "contact", label: "Contact" },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[72px] px-6 md:px-12 z-50 flex items-center justify-between text-ink transition-all duration-500 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-b border-line"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link to="home" smooth duration={600} className="cursor-pointer group">
        <span className="font-grotesk font-semibold text-lg tracking-tight">
          Priyanshu
          <span className="text-accent transition-colors duration-300 group-hover:text-ink">
            .
          </span>
        </span>
      </Link>

      {/* Desktop menu */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map(({ id, link, label }) => (
          <Link
            key={id}
            to={link}
            smooth
            duration={600}
            spy
            offset={-70}
            activeClass="is-active text-ink"
            className="u-link cursor-pointer font-mono text-[11px] tracking-[0.2em] uppercase text-muted hover:text-ink transition-colors duration-300"
          >
            <span className="text-accent/80 mr-1.5">0{id}</span>
            {label}
          </Link>
        ))}
        <a
          href="/Resume.pdf"
          download="Priyanshu-Shishodia-Resume.pdf"
          className="ml-2 px-5 py-2 font-mono text-[11px] tracking-[0.2em] uppercase border border-ink/20 rounded-full hover:border-accent hover:text-accent transition-all duration-300"
        >
          Resume
        </a>
      </nav>

      {/* Mobile menu toggle */}
      <button
        onClick={() => setNav(!nav)}
        aria-label={nav ? "Close menu" : "Open menu"}
        className="cursor-pointer z-[60] text-ink md:hidden p-2 -mr-2"
      >
        {nav ? <HiXMark size={26} /> : <HiMiniBars2 size={26} />}
      </button>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 h-[100dvh] bg-bg flex flex-col justify-center px-8 transform transition-all duration-500 ease-in-out z-50 md:hidden ${
          nav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="space-y-2">
          {links.map(({ id, link, label }) => (
            <li key={id} className="overflow-hidden border-b border-line">
              <Link
                to={link}
                smooth
                duration={600}
                offset={-70}
                onClick={() => setNav(false)}
                className="group flex items-baseline gap-4 py-4 cursor-pointer"
              >
                <span className="font-mono text-xs text-accent">0{id}</span>
                <span className="font-fraunces italic font-light text-4xl text-ink group-hover:text-accent group-hover:translate-x-2 transition-all duration-300 inline-block">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/Resume.pdf"
          download="Priyanshu-Shishodia-Resume.pdf"
          className="mt-10 inline-flex w-fit px-6 py-3 font-mono text-xs tracking-[0.2em] uppercase border border-ink/20 rounded-full text-ink"
        >
          Download resume
        </a>
      </div>
    </header>
  );
};

export default NavBar;
