import React from "react";
import { Model } from "./models/logo";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Logo = () => {
  return (
    <Canvas
      camera={{ position: [0, 40, 10] }}
      style={{ width: "300px", height: "300px" }}
      className="border-2 border-red-500"
    >
      <OrbitControls />
      <group position={[0, 0, 0]} scale={0.1}>
        <Model />
      </group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} intensity={1} />
    </Canvas>
  );
};

export default Logo;
