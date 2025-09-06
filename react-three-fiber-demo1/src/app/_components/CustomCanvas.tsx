import { Canvas } from '@react-three/fiber'
import Box from './Box'

const CustomCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Box />
    </Canvas>
  )
}

export default CustomCanvas
