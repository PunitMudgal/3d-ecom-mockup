"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import type { Group } from "three";

interface CameraRigProps {
  children: React.ReactNode;
}

const CameraRig = ({ children }: CameraRigProps) => {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    const isMobile = window.innerWidth <= 600;

    // set the initial position of the model
    let targetPosition: [number, number, number] = [-0.4, 0, 2];
    if (isMobile) targetPosition = [0, 0, 2.5];
    else targetPosition = [0, 0, 2];

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // set the model rotation smoothly
    if (group.current) {
      easing.dampE(
        group.current.rotation,
        [state.pointer.y / 10, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
