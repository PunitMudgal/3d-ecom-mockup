"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, Center, Loader } from "@react-three/drei";
import Backdrop from "@/canvas/Backdrop";
import CameraRig from "@/canvas/CameraRig";
import Shirt from "@/canvas/Shirt";
import { Suspense, useEffect, useState } from "react";

const CanvasComp = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading 3D Model...</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        <CameraRig>
          <Backdrop />
          <Center>
            <Suspense fallback={null}>
              <Shirt />
            </Suspense>
          </Center>
        </CameraRig>
      </Canvas>
      <Loader />
    </>
  );
};

export default CanvasComp;
