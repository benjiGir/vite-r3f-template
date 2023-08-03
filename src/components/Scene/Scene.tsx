import { Box } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Scene = () => {
  return (
    <Canvas
      style={{ height: '100vh', width: '100vw' }}
      camera={{ position: [0, 0, 5], rotation: [0, 0, 0] }}
    >
      <ambientLight intensity={1.5} />
      <Box args={[1, 1, 1]} material-color="red" />
    </Canvas>
  );
};

export default Scene;
