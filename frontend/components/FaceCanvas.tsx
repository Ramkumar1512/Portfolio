"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Slow continuous rotation
    meshRef.current.rotation.y = time * 0.1;
    meshRef.current.rotation.x = time * 0.05;
    
    // Mouse tracking parallax
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 0.5, 0.1);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 0.5, 0.1);
    
    // Subtle pulsing scale
    const s = 1 + Math.sin(time * 2) * 0.05;
    meshRef.current.scale.set(s, s, s);
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#00ff9d"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0}
        metalness={1}
        wireframe={true}
        emissive="#00ff9d"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ff9d" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#0066cc" />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <AnimatedSphere />
      </Float>
    </>
  );
}

export default function FaceCanvas() {
  return (
    <div className="w-full h-[500px] md:h-[800px] relative">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
        <Scene />
      </Canvas>
      {/* Subtle overlay Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,157,0.1),transparent_70%)]" />
    </div>
  );
}
