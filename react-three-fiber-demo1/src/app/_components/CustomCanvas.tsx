import { Canvas } from '@react-three/fiber'
import Polyhedron from './Polyhedron'

const CustomCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Polyhedron position={[-0.75, 0, 0]} name="A" />
      <Polyhedron position={[0.75, 0, 0]} name="B" />
    </Canvas>
  )
}

export default CustomCanvas
