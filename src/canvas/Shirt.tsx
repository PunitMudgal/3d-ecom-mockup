"use client";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { TheStore } from "@/store";
import type { GLTF } from "three-stdlib";
import type * as THREE from "three";

interface ShirtGLTF extends GLTF {
  nodes: {
    T_Shirt_male: THREE.Mesh;
  };
  materials: {
    lambert1: THREE.MeshLambertMaterial;
  };
}

useGLTF.preload("/shirt_baked.glb");

const Shirt = () => {
  const { color, isLogo, logoDecal } = TheStore();
  const { nodes, materials } = useGLTF("/shirt_baked.glb") as ShirtGLTF;

  const logoTexture = useTexture(logoDecal);

  useFrame((state, delta) => {
    if (materials?.lambert1?.color) {
      easing.dampC(materials.lambert1.color, color, 0.25, delta);
    }
  });

  const stateString = JSON.stringify({ color, isLogo, logoDecal });

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes?.T_Shirt_male?.geometry}
        material={materials?.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {isLogo && logoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
