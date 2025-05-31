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
  const {
    color,
    isLogo,
    logoDecal,
    logoPosition,
    logoScale,
    logoRotation,
    isBackSide,
    isBackLogo,
    backLogoDecal,
    backLogoPosition,
    backLogoScale,
    backLogoRotation,
  } = TheStore();

  const { nodes, materials } = useGLTF(
    "/shirt_baked.glb"
  ) as unknown as ShirtGLTF;

  const logoTexture = useTexture(logoDecal);
  const backLogoTexture = useTexture(backLogoDecal);

  logoTexture.anisotropy = 16;
  backLogoTexture.anisotropy = 16;

  useFrame((state, delta) => {
    if (materials?.lambert1?.color) {
      easing.dampC(materials.lambert1.color, color, 0.25, delta);
    }
  });

  const stateString = JSON.stringify({
    color,
    isLogo,
    logoDecal,
    logoPosition,
    logoScale,
    logoRotation,
    isBackSide,
    isBackLogo,
    backLogoDecal,
    backLogoPosition,
    backLogoScale,
    backLogoRotation,
  });

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes?.T_Shirt_male?.geometry}
        material={materials?.lambert1}
        material-roughness={1}
        dispose={null}
        rotation={isBackSide ? [0, Math.PI, 0] : [0, 0, 0]}
      >
        {/* Front Logo */}
        {isLogo && logoTexture && !isBackSide && (
          <Decal
            position={logoPosition}
            rotation={logoRotation}
            scale={logoScale}
            map={logoTexture}
            depthTest={false}
          />
        )}

        {/* Back Logo */}
        {isBackLogo && backLogoTexture && isBackSide && (
          <Decal
            position={backLogoPosition}
            rotation={backLogoRotation}
            scale={backLogoScale}
            map={backLogoTexture}
            depthTest={false}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
