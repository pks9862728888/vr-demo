import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const Polyhedron: React.FC<{
  position: [number, number, number]
  rotation: [number, number, number]
  geometry: THREE.BufferGeometry[]
  name: string
  color: string
  visible: boolean
}> = ({ position, rotation, geometry, name, color, visible }) => {
  const ref = useRef<any>(undefined)
  const [hovered, setHovered] = useState(false)
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.geometry.uuid)
    }
  })
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x = rotation[0]
      ref.current.rotation.y = rotation[1]
      ref.current.rotation.z = rotation[2]
      // ref.current.rotation.z += delta * (rotate ? 1 : 0)
      // ref.current.position.y = Math.sin(_.clock.getElapsedTime() * 2) / 4
    }
  })
  return (
    <mesh
      position={position}
      name={name}
      ref={ref}
      visible={visible}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerDown={(e: any) => {
        setCount((c) => (c + 1) % geometry.length)
      }}
      // onUpdate={(self: any) => console.log('props onUpdate', self)}
      onPointerOver={(e: any) => setHovered(true)}
      onPointerOut={(e: any) => setHovered(false)}
      geometry={geometry[count]}>
      {/* <boxGeometry /> */}
      <meshBasicMaterial color={color} wireframe />
      {/* <axesHelper /> */}
    </mesh>
  )
}

export default Polyhedron
