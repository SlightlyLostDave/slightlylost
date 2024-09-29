import { Canvas } from '@react-three/fiber';
import { Scroll, ScrollControls } from '@react-three/drei';

export const ThreeCanvas = ({ children }: any) => {
  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={['#ececec']} />
        <ScrollControls pages={5} damping={0.1}>
          <Scroll html>{children}</Scroll>
          {/* Experience */}
          {/* <OrbitControls /> */}
          <mesh>
            <boxGeometry />
            <meshNormalMaterial />
          </mesh>
          {/* end Experience */}
        </ScrollControls>
      </Canvas>
    </>
  );
};
