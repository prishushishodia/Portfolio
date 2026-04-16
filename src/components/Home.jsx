import React, { useEffect, useRef, Suspense } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stars } from "@react-three/drei";
import RotatingText from "./RotatingText";
import VariableProximity from "./VariableProximity";
import laptopModel from "../assets/laptop.glb";
import sittingModel from "../assets/sitting.glb";
import * as THREE from "three";
import { HiOutlineChevronDown } from "react-icons/hi";

const LaptopModel = () => {
  const { scene } = useGLTF(laptopModel);

  const material = new THREE.MeshStandardMaterial({
    color: "#5184a4",
    metalness: 0.4,
    roughness: 0.05,
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });

  return (
    <primitive
      object={scene}
      scale={0.15}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 100, 0, 0]}
    />
  );
};

const SittingModel = () => {
  const { scene } = useGLTF(sittingModel);

  const material = new THREE.MeshStandardMaterial({
    color: "#5184a4",
    roughness: 0.1,
    metalness: 10.0,
    envMapIntensity: 2.0,
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <primitive
      object={scene}
      scale={0.002}
      position={[0, -2, 0.75]}
      rotation={[Math.PI / 2, Math.PI, 0]}
    />
  );
};

const ModelsGroup = () => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.006;
    }
  });

  return (
    <group
      ref={groupRef}
      scale={2}
      position={[2.5, -0.4, 0]}
      rotation={[0.0, 0.7, -0.0]}
    >
      <LaptopModel />
      <SittingModel />
    </group>
  );
};

const Home = () => {
  const homeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: homeRef.current,
        start: "top center",
        toggleActions: "play none none none",
      },
    });

    timeline
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" }
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );
  }, []);

  return (
    <div
      name="home"
      ref={homeRef}
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0f] text-white overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      {/* 3D Canvas background */}
      <div ref={canvasRef} className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0.5, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <Stars
              radius={100}
              depth={20}
              count={5000}
              factor={10}
              saturation={0}
              fade
              speed={1}
            />
            <ambientLight intensity={0.5} />
            <spotLight
              position={[10, 15, 10]}
              angle={0.3}
              penumbra={1}
              castShadow
            />
            <ModelsGroup />
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col items-start justify-center min-h-screen pt-20">
        {/* Greeting pill */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-Montserrat tracking-[0.2em] text-cyan-300 uppercase">Available for work</span>
        </div>

        {/* Main title */}
        <div ref={titleRef}>
          <p className="text-gray-400 font-Montserrat text-base md:text-lg tracking-[0.1em] mb-2 uppercase font-light">
            Hi, I'm Priyanshu
          </p>
          <h1
            className="font-Montserrat leading-[1.05] tracking-tight select-none"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
          >
            {/* "FULL STACK" — white, weight ripples from 600 → 900 */}
            <VariableProximity
              label="FULL STACK"
              containerRef={homeRef}
              fromFontVariationSettings='"wght" 600'
              toFontVariationSettings='"wght" 900'
              radius={180}
              falloff="exponential"
              className="block text-white"
            />

            {/* "DEVELOPER" — gradient, weight ripples from 600 → 900 */}
            <span className="block mt-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              <VariableProximity
                label="DEVELOPER"
                containerRef={homeRef}
                fromFontVariationSettings='"wght" 600'
                toFontVariationSettings='"wght" 900'
                radius={180}
                falloff="exponential"
              />
            </span>
          </h1>
        </div>

        {/* Rotating subtitle */}
        <div ref={subtitleRef} className="mt-6 flex items-center gap-3">
          <div className="w-8 h-[1px] bg-cyan-400/60" />
          <div className="h-[2.5rem] overflow-hidden">
            <RotatingText
              texts={[
                "FULL STACK DEVELOPER",
                "FRONTEND DESIGNER",
                "BACKEND ENGINEER",
              ]}
              mainClassName="font-Montserrat text-sm md:text-base tracking-[0.15em] text-gray-300 uppercase font-light"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{
                type: "spring",
                duration: 0.4,
                ease: "easeInOut",
              }}
              rotationInterval={2500}
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center gap-4">
          <Link
            to="portfolio"
            smooth
            duration={700}
            className="cursor-pointer px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-sm font-Montserrat font-semibold tracking-wider hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300"
          >
            View Work
          </Link>
          <Link
            to="contact"
            smooth
            duration={700}
            className="cursor-pointer px-7 py-3 border border-white/15 rounded-full text-white text-sm font-Montserrat font-medium tracking-wider hover:border-cyan-400/40 hover:bg-white/5 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 scroll-bounce cursor-pointer"
      >
        <Link to="about" smooth duration={700}>
          <span className="text-[10px] font-Montserrat tracking-[0.3em] text-gray-500 uppercase block text-center mb-1">Scroll</span>
          <HiOutlineChevronDown size={20} className="text-cyan-400/60 mx-auto" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
