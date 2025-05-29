import { create } from "zustand";

interface store {
  eyeView: boolean;
  color: string;
  isLogo: boolean;
  logoDecal: string;
  automaticLogo: boolean; // to position logo automatically
  logoPosition: [number, number, number]; // to position logo manually
  logoScale: number;
  logoRotation: [number, number, number];

  setEyeView: (value: boolean) => void;
  setColor: (value: string) => void;
  setIsLogo: (value: boolean) => void;
  setLogoDecal: (logoDecal: string) => void;
  setAutomaticLogo: (value: boolean) => void;
  setLogoPosition: (position: [number, number, number]) => void;
  setLogoScale: (scale: number) => void;
  setLogoRotation: (rotation: [number, number, number]) => void;
  resetLogoTransform: () => void;
}

export const TheStore = create<store>((set) => ({
  eyeView: false,
  color: "#FF0000",
  isLogo: true,
  logoDecal: "./assets/spider.png",
  automaticLogo: false,
  logoPosition: [0, 0.04, 0.15],
  logoScale: 0.15,
  logoRotation: [0, 0, 0],
  setEyeView: (value) => set({ eyeView: value }),
  setColor: (value) => set({ color: value }),
  setIsLogo: (value) => set({ isLogo: value }),
  setLogoDecal: (logoDecal) => set({ logoDecal }),
  setAutomaticLogo: (value) => set({ automaticLogo: value }),
  setLogoPosition: (position) => set({ logoPosition: position }),
  setLogoScale: (scale) => set({ logoScale: scale }),
  setLogoRotation: (rotation) => set({ logoRotation: rotation }),
  resetLogoTransform: () =>
    set({
      logoPosition: [0, 0.04, 0.15],
      logoScale: 0.15,
      logoRotation: [0, 0, 0],
    }),
}));
