
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";

const GlobeMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002; // Slower, smoother rotation
    }
  });

  // Create shimmering material
  const material = new THREE.MeshStandardMaterial({
    color: "#9b87f5",
    metalness: 0.2,
    roughness: 0.6,
    envMapIntensity: 0.8,
    transparent: true,
    opacity: 0.9,
  });

  const wireframeMaterial = new THREE.MeshStandardMaterial({
    color: "#9b87f5",
    wireframe: true,
    transparent: true,
    opacity: 0.1,
  });

  return (
    <>
      {/* Ambient light for base illumination */}
      <ambientLight intensity={0.3} />
      
      {/* Main directional light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        color="#ffffff"
      />
      
      {/* Accent lights for depth */}
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#7E69AB" />
      <pointLight position={[5, -5, 5]} intensity={0.4} color="#6E59A5" />

      {/* Main sphere with material */}
      <Sphere ref={meshRef} args={[1, 64, 64]} material={material} />
      
      {/* Wireframe overlay sphere */}
      <Sphere args={[1.01, 32, 32]} material={wireframeMaterial} />
    </>
  );
};

interface Props {
  className?: string;
}

const Globe = ({ className = "" }: Props) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <GlobeMesh />
      </Canvas>
    </div>
  );
};

export default Globe;
