import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sparkles, OrbitControls } from '@react-three/drei';
import { useSelector } from 'react-redux';

function MorphingMesh() {
  const meshRef = useRef();
  const { theme } = useSelector((state) => state.portfolio);

  const getMeshColor = () => {
    switch (theme) {
      case 'cyberpunk':
        return '#00f0ff'; // Neon Cyan
      case 'cosmos':
        return '#8b5cf6'; // Stellar Violet
      case 'minimal':
        return '#ffffff'; // White/Silver
      default:
        return '#00f0ff';
    }
  };

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Slow auto-rotation
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    
    // Smooth trailing towards mouse position (normalized from -1 to 1)
    const targetX = state.pointer.x * 0.7;
    const targetY = state.pointer.y * 0.7;
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <torusKnotGeometry args={[1, 0.35, 120, 16]} />
      <MeshDistortMaterial
        color={getMeshColor()}
        distort={0.35}
        speed={1.8}
        roughness={0.15}
        metalness={0.85}
      />
    </mesh>
  );
}

export default function ThreeDScene() {
  const { theme } = useSelector((state) => state.portfolio);

  const getSparklesColor = () => {
    switch (theme) {
      case 'cyberpunk':
        return '#ff007f'; // Neon Pink
      case 'cosmos':
        return '#3b82f6'; // Bright Blue
      case 'minimal':
        return '#a3a3a3'; // Muted Gray
      default:
        return '#ff007f';
    }
  };

  return (
    <div className="absolute inset-0 z-0 opacity-85 select-none pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[8, 8, 8]} intensity={1.8} />
        <directionalLight position={[-8, -8, -8]} intensity={0.4} />
        <spotLight position={[0, 8, 0]} intensity={1.5} />
        
        <MorphingMesh />
        
        <Sparkles
          count={90}
          scale={6}
          size={3.0}
          speed={0.7}
          color={getSparklesColor()}
        />
        
        {/* Disable zoom & pan so it doesn't hijack page scrolls */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
