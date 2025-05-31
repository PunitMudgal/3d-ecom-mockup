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

  // New states for back side
  isBackSide: boolean;
  isBackLogo: boolean;
  backLogoDecal: string;
  backLogoPosition: [number, number, number];
  backLogoScale: number;
  backLogoRotation: [number, number, number];

  setEyeView: (value: boolean) => void;
  setColor: (value: string) => void;
  setIsLogo: (value: boolean) => void;
  setLogoDecal: (logoDecal: string) => void;
  setAutomaticLogo: (value: boolean) => void;
  setLogoPosition: (position: [number, number, number]) => void;
  setLogoScale: (scale: number) => void;
  setLogoRotation: (rotation: [number, number, number]) => void;
  resetLogoTransform: () => void;

  // New setters for back side
  setIsBackSide: (value: boolean) => void;
  setIsBackLogo: (value: boolean) => void;
  setBackLogoDecal: (logoDecal: string) => void;
  setBackLogoPosition: (position: [number, number, number]) => void;
  setBackLogoScale: (scale: number) => void;
  setBackLogoRotation: (rotation: [number, number, number]) => void;
  resetBackLogoTransform: () => void;
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

  // New default values for back side
  isBackSide: false,
  isBackLogo: false,
  backLogoDecal: "./assets/spider.png",
  backLogoPosition: [0, 0.04, -0.15], // negative Z for back positioning
  backLogoScale: 0.15,
  backLogoRotation: [0, Math.PI, 0], // 180 degree rotation for back

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

  // New setters for back side
  setIsBackSide: (value) => set({ isBackSide: value }),
  setIsBackLogo: (value) => set({ isBackLogo: value }),
  setBackLogoDecal: (logoDecal) => set({ backLogoDecal: logoDecal }),
  setBackLogoPosition: (position) => set({ backLogoPosition: position }),
  setBackLogoScale: (scale) => set({ backLogoScale: scale }),
  setBackLogoRotation: (rotation) => set({ backLogoRotation: rotation }),
  resetBackLogoTransform: () =>
    set({
      backLogoPosition: [0, 0.04, -0.15],
      backLogoScale: 0.15,
      backLogoRotation: [0, Math.PI, 0],
    }),
}));
