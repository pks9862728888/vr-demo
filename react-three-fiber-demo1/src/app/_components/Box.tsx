import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

const Box = (props: any) => {
  const ref = useRef<any>(undefined)
  const [hovered, setHovered] = useState(false)
  const [rotate, setRotate] = useState(false)
  useFrame((_, delta) => {
    if (ref.current && rotate) {
      ref.current.rotation.x += 1 * delta
      ref.current.rotation.y += 0.5 * delta
      // ref.current.position.y = Math.sin(_.clock.getElapsedTime() * 2) / 4
    }
  })
  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerDown={(e: any) => setRotate(!rotate)}
      onUpdate={(self: any) => console.log('props onUpdate', self)}
      onPointerOver={(e: any) => setHovered(true)}
      onPointerOut={(e: any) => setHovered(false)}>
      <boxGeometry />
      <meshBasicMaterial
        color={hovered ? 0xff0000 : 0x00ff00}
        wireframe
      />
    </mesh>
  )
}

export default Box
