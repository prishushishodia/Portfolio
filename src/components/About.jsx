import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: "05+", label: "Projects shipped" },
  { value: "02", label: "Internships" },
  { value: "10+", label: "Technologies" },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-bg text-ink px-6 md:px-12 py-28 md:py-40 overflow-hidden"
    >
      <span className="section-watermark font-grotesk">01</span>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section label */}
        <div className="about-reveal flex items-center gap-4 mb-14 md:mb-20">
          <span className="font-mono text-xs text-accent tracking-[0.2em]">(01)</span>
          <span className="font-mono text-xs text-muted tracking-[0.3em] uppercase">
            About
          </span>
          <div className="flex-1 h-px bg-line" />
        </div>

        {/* Statement */}
        <h2
          className="about-reveal font-grotesk font-light leading-[1.15] tracking-tight max-w-5xl"
          style={{ fontSize: "clamp(1.75rem, 4.2vw, 3.5rem)" }}
        >
          I take web products from{" "}
          <em className="font-fraunces italic text-accent">idea</em> to{" "}
          <em className="font-fraunces italic text-accent">deployment</em> —
          interface, API, and the infrastructure underneath.
        </h2>

        {/* Body copy + stats */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5 md:col-start-2 about-reveal">
            <p className="text-muted text-base md:text-lg leading-[1.9] font-light">
              I&apos;m a full-stack developer working across the entire stack —{" "}
              <span className="text-ink">React</span> and{" "}
              <span className="text-ink">Next.js</span> on the front,{" "}
              <span className="text-ink">Node.js</span>,{" "}
              <span className="text-ink">NestJS</span> and{" "}
              <span className="text-ink">PostgreSQL</span> behind. I care as
              much about the last 5% of interaction polish as the architecture
              underneath it.
            </p>
          </div>
          <div className="md:col-span-5 about-reveal">
            <p className="text-muted text-base md:text-lg leading-[1.9] font-light">
              I&apos;ve shipped five-plus end-to-end projects and production
              work for real clients — realtime apps over{" "}
              <span className="text-ink">WebSockets</span>, REST APIs with
              proper auth, job queues, and cloud infrastructure on{" "}
              <span className="text-ink">AWS</span>. Clean, maintainable code
              is the default, not the goal.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 md:mt-28 grid grid-cols-3 border-t border-line">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={`about-reveal py-8 md:py-12 ${
                i > 0 ? "border-l border-line pl-6 md:pl-12" : ""
              }`}
            >
              <span
                className="block font-grotesk font-medium text-accent tracking-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                {value}
              </span>
              <span className="mt-2 block font-mono text-[10px] md:text-xs tracking-[0.2em] text-muted uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
