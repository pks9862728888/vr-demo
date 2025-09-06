import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Box = (props: any) => {
  const ref = useRef<any>(undefined)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 1 * delta
      ref.current.rotation.y += 0.5 * delta
      // ref.current.position.y = Math.sin(_.clock.getElapsedTime() * 2) / 4
    }
  })
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}

export default Box
