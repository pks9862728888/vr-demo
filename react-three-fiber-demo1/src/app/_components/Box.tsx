import { useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

const Box = (props: any) => {
  const ref = useRef<any>(undefined)
  const [hovered, setHovered] = useState(false)
  const [rotate, setRotate] = useState(false)
  const [count, setCount] = useState(0)
  const geometry = useMemo(
    () => [
      new THREE.BoxGeometry(),
      new THREE.SphereGeometry(0.785398)
    ],
    []
  )
  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.geometry.uuid)
    }
  })
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * (rotate ? 1 : 0)
      ref.current.rotation.y += 0.5 * delta * (rotate ? 1 : 0)
      // ref.current.rotation.z += delta * (rotate ? 1 : 0)
      // ref.current.position.y = Math.sin(_.clock.getElapsedTime() * 2) / 4
    }
  })
  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerDown={(e: any) => {
        setRotate(!rotate)
        setCount((c) => (c + 1) % 2)
      }}
      // onUpdate={(self: any) => console.log('props onUpdate', self)}
      onPointerOver={(e: any) => setHovered(true)}
      onPointerOut={(e: any) => setHovered(false)}
      geometry={geometry[count]}>
      {/* <boxGeometry /> */}
      <meshBasicMaterial
        color={hovered ? 0xff0000 : 0x00ff00}
        wireframe
      />
    </mesh>
  )
}

export default Box
