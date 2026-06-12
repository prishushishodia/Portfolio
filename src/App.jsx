import { lazy } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import LazySection from "./components/LazySection";

// Below-the-fold sections are code-split and mounted only when scrolled near.
// Home stays eager — it's the above-the-fold hero.
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      {/* Film grain over everything */}
      <div className="grain" aria-hidden="true" />

      <NavBar />
      <SocialLinks />
      <Home />
      <LazySection anchorId="about">
        <About />
      </LazySection>
      <LazySection anchorId="services">
        <Services />
      </LazySection>
      <LazySection anchorId="skills">
        <Skills />
      </LazySection>
      <LazySection anchorId="experience">
        <Experience />
      </LazySection>
      <LazySection anchorId="portfolio">
        <Portfolio />
      </LazySection>
      <LazySection anchorId="contact">
        <Contact />
      </LazySection>
    </>
  );
}

export default App;
