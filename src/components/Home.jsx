import React, { useEffect, useRef, Suspense } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stars } from "@react-three/drei"; // Added Stars here
import RotatingText from "./RotatingText";
import laptopModel from "../assets/laptop.glb";
import sittingModel from "../assets/sitting.glb";
import * as THREE from "three";

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
  const buttonRef = useRef(null);
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
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.4"
      );
  }, []);

  return (
    <div
      name="home"
      ref={homeRef}
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* The background with stars */}
      <div ref={canvasRef} className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0.5, 5], fov: 50 }}>
          <Suspense fallback={null}>
            {/* Starfield Universe Background */}
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
      <div
        className="relative z-10 max-w-screen-xl mx-auto flex flex-col items-center justify-center px-40 md:px-100 text-center py-24"
      >
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-7xl font-nike text-white mb-6 leading-snug"
        >
          Hi, I'm Priyanshu{" "}
          <span className="block sm:inline">
            a{" "}
            <span className="relative inline-block h-[3.5rem] sm:h-[4.5rem] align-middle overflow-hidden">
              <RotatingText
                texts={[
                  "FULL STACK DEVELOPER",
                  "FRONTEND DESIGNER",
                  "BACKEND ENGINEER",
                ]}
                mainClassName="bg-clip-text font-nike text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 px-2 sm:px-4 py-1 rounded-md shadow-md transition-all duration-300 ease-in-out"
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
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
