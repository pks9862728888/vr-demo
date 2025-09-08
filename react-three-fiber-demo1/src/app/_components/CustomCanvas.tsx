import { OrbitControls, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMemo } from 'react'
import * as THREE from 'three'
import Polyhedron from './Polyhedron'

const CustomCanvas = () => {
  const geometry = useMemo(
    () => [
      new THREE.IcosahedronGeometry(1, 1),
      new THREE.SphereGeometry(0.785398),
      new THREE.DodecahedronGeometry(0.785398)
    ],
    []
  )
  return (
    <Canvas camera={{ position: [-1, 5, 2.5] }}>
      {/* <color attach="background" args={[color.value]} /> */}
      <directionalLight position={[1, 1, 1]} />
      <Polyhedron
        position={[-2, 1, 0]}
        name="meshBasicMaterial"
        geometry={geometry}
        material={new THREE.MeshBasicMaterial()}
      />
      <Polyhedron
        position={[2, 1, 0]}
        name="meshPhongMaterial"
        geometry={geometry}
        material={new THREE.MeshPhongMaterial()}
      />
      <OrbitControls target-y={1} />
      <axesHelper args={[5]} />
      <gridHelper
      // rotation-x={Math.PI / 4}
      />
      <Stats />
    </Canvas>
  )
}

export default CustomCanvas
