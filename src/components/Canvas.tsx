"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, Center, Loader } from "@react-three/drei";
import Backdrop from "@/canvas/Backdrop";
import CameraRig from "@/canvas/CameraRig";
import Shirt from "@/canvas/Shirt";

const CanvasComp = () => {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full transition-all  ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        <CameraRig>
          <Backdrop />
          <Center>
            <group position={[0, 0.1, 0]}>
              <Shirt />
            </group>
          </Center>
        </CameraRig>
      </Canvas>
      <Loader />
    </>
  );
};

export default CanvasComp;
