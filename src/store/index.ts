import { create } from "zustand";

interface store {
  color: string;
  isLogo: boolean;
  logoDecal: string;
  setColor: (value: string) => void;
  setIsLogo: (value: boolean) => void;
  setLogoDecal: (logoDecal: string) => void;
}

export const TheStore = create<store>((set) => ({
  color: "#ffffff",
  isLogo: true,
  logoDecal: "./threejs.png",
  setColor: (value) => set({ color: value }),
  setIsLogo: (value) => set({ isLogo: value }),
  setLogoDecal: (logoDecal) => set({ logoDecal }),
}));
