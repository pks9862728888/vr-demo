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
  const polyhedronControls = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI, step: 0.01 },
      visible: true,
      color: { value: 'lime' }
    }
  }, [])
  const pA = useControls('Polyhedron A', polyhedronControls)
  const pB = useControls('Polyhedron B', polyhedronControls)
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      {/* <color attach="background" args={[color.value]} /> */}
      <Polyhedron
        position={[-1, 1, 0]}
        rotation={[pA.x, pA.y, pA.z]}
        visible={pA.visible}
        color={pA.color}
        name="A"
        geometry={geometry}
      />
      <Polyhedron
        position={[1, 1, 0]}
        rotation={[pB.x, pB.y, pB.z]}
        visible={pB.visible}
        color={pB.color}
        name="B"
        geometry={geometry}
      />
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
