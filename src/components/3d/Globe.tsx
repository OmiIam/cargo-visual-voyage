
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";

const GlobeMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a spring animation for smooth rotation
  const { rotation } = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, Math.PI * 2, 0] },
    config: { duration: 20000, reset: false, loop: true },
    loop: true
  });

  // Additional subtle rotation on frame update
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001; // Slower, smoother rotation
    }
  });

  // Create enhanced shimmering material
  const material = new THREE.MeshStandardMaterial({
    color: "#9b87f5",
    metalness: 0.4,
    roughness: 0.5,
    envMapIntensity: 0.9,
    transparent: true,
    opacity: 0.9,
  });

  // Create wireframe material for overlay effect
  const wireframeMaterial = new THREE.MeshStandardMaterial({
    color: "#9b87f5",
    wireframe: true,
    transparent: true,
    opacity: 0.1,
  });

  return (
    <>
      {/* Enhanced lighting setup */}
      <ambientLight intensity={0.4} />
      
      {/* Main directional light with warm tone */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        color="#ffffff"
      />
      
      {/* Accent lights for depth and color variation */}
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#7E69AB" />
      <pointLight position={[5, -5, 5]} intensity={0.4} color="#6E59A5" />
      
      {/* Subtle rim light for edge definition */}
      <pointLight position={[0, 5, -10]} intensity={0.2} color="#b4a7f5" />

      {/* Main sphere with enhanced material */}
      <animated.mesh ref={meshRef}>
        <Sphere args={[1, 64, 64]} material={material} />
      </animated.mesh>
      
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
