import { OrbitControls, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import { useMemo } from 'react'
import * as THREE from 'three'
import Polyhedron from './Polyhedron'

const CustomCanvas = () => {
  const geometry = useMemo(
    () => [
      new THREE.BoxGeometry(),
      new THREE.SphereGeometry(0.785398),
      new THREE.DodecahedronGeometry(0.785398)
    ],
    []
  )
  const color = useControls({
    value: 'green'
  })
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <color attach="background" args={[color.value]} />
      <Polyhedron position={[-0.75, -0.75, 0]} name="A" geometry={geometry} />
      <Polyhedron position={[0.75, -0.75, 0]} name="B" geometry={geometry} />
      <Polyhedron position={[-0.75, 0.75, 0]} name="C" geometry={geometry} />
      <Polyhedron position={[0.75, 0.75, 0]} name="D" geometry={geometry} />
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper
      // rotation-x={Math.PI / 4}
      />
      <Stats />
    </Canvas>
  )
}

export default CustomCanvas
