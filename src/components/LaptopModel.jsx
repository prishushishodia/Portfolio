// src/components/LaptopModel.jsx
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function LaptopModel(props) {
  // We use the path relative to the public folder
  // The useGLTF hook will automatically find and load it
  const { nodes, materials } = useGLTF("/laptop.glb");
  const meshRef = useRef();

  // This hook is executed on every frame for animations
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Adjust the rotation speed
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        geometry={nodes.Cube001.geometry}
        material={materials.Material001}
        position={[0, 0, 0]} // Position of the model in the scene
        scale={1.5} // You might need to adjust the scale
      />
    </group>
  );
}

// Preload the model to improve performance
useGLTF.preload("/laptop.glb");
