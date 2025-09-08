'use client'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const Polyhedron: React.FC<{
  position: [number, number, number]
  geometry: THREE.BufferGeometry[]
  name: string
  material: THREE.Material
}> = ({ geometry, name, material, position }) => {
  const ref = useRef<any>(undefined)
  const [hovered, setHovered] = useState(false)
  const [count, setCount] = useState(0)
  const controls = useControls(name, {
    visible: true,
    color: {
      value: 'lime',
      onChange: (v: string) => {
        ref.current.material.color = new THREE.Color(v)
      }
    },
    wireframe: {
      value: false,
      onChange: (v: boolean) => {
        ref.current.material.wireframe = v
      }
    },
    flatShading: {
      value: true,
      onChange: (v: boolean) => {
        ref.current.material.flatShading = v
        ref.current.material.needsUpdate = true
      }
    }
  })
  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.geometry.uuid)
    }
  })
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.2 * delta
      ref.current.rotation.y += 0.05 * delta
      // ref.current.rotation.z = controls.z
      // ref.current.rotation.z += delta * (rotate ? 1 : 0)
      // ref.current.position.y = Math.sin(_.clock.getElapsedTime() * 2) / 4
    }
  })
  return (
    <mesh
      position={[position[0], position[1], position[2]]}
      name={name}
      ref={ref}
      visible={controls.visible}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerDown={(e: any) => {
        setCount((c) => (c + 1) % geometry.length)
      }}
      // onUpdate={(self: any) => console.log('props onUpdate', self)}
      onPointerOver={(e: any) => setHovered(true)}
      onPointerOut={(e: any) => setHovered(false)}
      geometry={geometry[count]}
      material={material}>
      {/* <boxGeometry /> */}
      {/* <meshBasicMaterial color={color} wireframe /> */}
      {/* <axesHelper /> */}
    </mesh>
  )
}

export default Polyhedron
