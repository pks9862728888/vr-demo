'use client'
import { Canvas } from '@react-three/fiber'
import { StrictMode } from 'react'

export default function Home() {
  return (
    <StrictMode>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color={0x00ff00} wireframe />
        </mesh>
      </Canvas>
    </StrictMode>
  )
}
