'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function RotatingBox() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.8;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#3b82f6" metalness={0.6} roughness={0.2} />
    </mesh>
  );
}

export default function CommodityViewer() {
  return (
    <div style={{ width: '100%', height: '300px', background: '#0B0F19', borderRadius: '8px', border: '1px solid #1F2937', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '10px', left: '15px', zIndex: 10, color: '#60A5FA', fontSize: '11px', fontWeight: 'bold', fontFamily: 'monospace' }}>
        📦 3D CARGO / COMMODITY INSPECTION VISUALIZER
      </div>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <RotatingBox />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
