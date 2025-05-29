"use client";
import React, { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
// import type { AccumulativeShadowsApi } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { TheStore } from "@/store";
import { easing } from "maath";

const Backdrop = () => {
  // const shadows = useRef<AccumulativeShadowsApi>(null);
  const shadows = useRef<React.ElementRef<typeof AccumulativeShadows>>(null);

  const { color } = TheStore();

  useFrame((state, delta) => {
    if (shadows.current && color !== undefined) {
      easing.dampC(
        shadows.current.getMesh().material.color,
        color,
        0.25,
        delta
      );
    }
  });

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={2.1}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
