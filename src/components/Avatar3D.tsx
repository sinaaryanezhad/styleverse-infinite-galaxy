import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface Avatar3DProps {
  selectedOutfit: any;
  currentColor: string;
}

const Avatar3D = ({ selectedOutfit, currentColor }: Avatar3DProps) => {
  const meshRef = useRef<Mesh>(null);
  const outfitRef = useRef<Mesh>(null);

  // Gentle rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group>
      {/* Base Avatar/Mannequin */}
      <mesh ref={meshRef} position={[0, -1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.3, 3]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#001122"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.8, 0]} castShadow>
        <sphereGeometry args={[0.25]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.6} 
          roughness={0.3}
          emissive="#001122"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.6, 0.5, 0]} rotation={[0, 0, -0.3]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 1.2]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#001122"
          emissiveIntensity={0.1}
        />
      </mesh>
      <mesh position={[0.6, 0.5, 0]} rotation={[0, 0, 0.3]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 1.2]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#001122"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Outfit Visualization */}
      {selectedOutfit && (
        <group>
          {selectedOutfit.type === 'jacket' && (
            <mesh ref={outfitRef} position={[0, 0.5, 0]} castShadow>
              <boxGeometry args={[1.2, 1.5, 0.6]} />
              <meshStandardMaterial 
                color={currentColor}
                metalness={0.3}
                roughness={0.7}
                emissive={currentColor}
                emissiveIntensity={0.1}
              />
            </mesh>
          )}
          
          {selectedOutfit.type === 'dress' && (
            <mesh ref={outfitRef} position={[0, 0, 0]} castShadow>
              <coneGeometry args={[0.8, 2.5, 8]} />
              <meshStandardMaterial 
                color={currentColor}
                metalness={0.2}
                roughness={0.8}
                emissive={currentColor}
                emissiveIntensity={0.1}
              />
            </mesh>
          )}
          
          {selectedOutfit.type === 'pants' && (
            <group>
              <mesh position={[-0.2, -0.5, 0]} castShadow>
                <cylinderGeometry args={[0.15, 0.15, 1.5]} />
                <meshStandardMaterial 
                  color={currentColor}
                  metalness={0.3}
                  roughness={0.7}
                  emissive={currentColor}
                  emissiveIntensity={0.1}
                />
              </mesh>
              <mesh position={[0.2, -0.5, 0]} castShadow>
                <cylinderGeometry args={[0.15, 0.15, 1.5]} />
                <meshStandardMaterial 
                  color={currentColor}
                  metalness={0.3}
                  roughness={0.7}
                  emissive={currentColor}
                  emissiveIntensity={0.1}
                />
              </mesh>
            </group>
          )}
          
          {selectedOutfit.type === 'shoes' && (
            <group>
              <mesh position={[-0.2, -2.2, 0.1]} castShadow>
                <boxGeometry args={[0.3, 0.2, 0.6]} />
                <meshStandardMaterial 
                  color={currentColor}
                  metalness={0.8}
                  roughness={0.2}
                  emissive={currentColor}
                  emissiveIntensity={0.2}
                />
              </mesh>
              <mesh position={[0.2, -2.2, 0.1]} castShadow>
                <boxGeometry args={[0.3, 0.2, 0.6]} />
                <meshStandardMaterial 
                  color={currentColor}
                  metalness={0.8}
                  roughness={0.2}
                  emissive={currentColor}
                  emissiveIntensity={0.2}
                />
              </mesh>
            </group>
          )}
          
          {/* NFT Glow Effect */}
          {selectedOutfit.nft && (
            <mesh position={[0, 0, 0]} scale={[1.2, 1.2, 1.2]}>
              <torusGeometry args={[1.5, 0.05, 8, 32]} />
              <meshStandardMaterial 
                color="#00ffff"
                emissive="#00ffff"
                emissiveIntensity={0.5}
                transparent
                opacity={0.6}
              />
            </mesh>
          )}
        </group>
      )}

      {/* Holographic Platform */}
      <mesh position={[0, -2.5, 0]} receiveShadow>
        <cylinderGeometry args={[2, 2, 0.1]} />
        <meshStandardMaterial 
          color="#001133"
          metalness={0.9}
          roughness={0.1}
          emissive="#0066ff"
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Platform Ring */}
      <mesh position={[0, -2.45, 0]}>
        <torusGeometry args={[2, 0.05, 8, 32]} />
        <meshStandardMaterial 
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
};

export default Avatar3D;