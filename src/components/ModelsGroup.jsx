import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

export default function ModelsGroup(props) {
  const groupRef = useRef<Group>(null);

  // Load your models (replace paths with your actual .glb/.gltf files)
  const laptop = useGLTF("/models/laptop.glb");
  const person = useGLTF("/models/person_sitting.glb");

  return (
    <group ref={groupRef} {...props}>
      {/* Laptop Model */}
      <primitive
        object={laptop.scene}
        position={[0, -1, 0]}
        scale={1.2}
      />

      {/* Sitting Person Model */}
      <primitive
        object={person.scene}
        position={[0.5, -1, 0]}
        scale={1}
      />
    </group>
  );
}

// Preload models so they appear instantly
useGLTF.preload("/models/laptop.glb");
useGLTF.preload("/models/person_sitting.glb");
