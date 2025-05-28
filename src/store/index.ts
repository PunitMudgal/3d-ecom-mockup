import { create } from "zustand";

interface store {
  eyeView: boolean;
  color: string;
  isLogo: boolean;
  logoDecal: string;
  setEyeView: (value: boolean) => void;
  setColor: (value: string) => void;
  setIsLogo: (value: boolean) => void;
  setLogoDecal: (logoDecal: string) => void;
}

export const TheStore = create<store>((set) => ({
  eyeView: false,
  color: "#FF0000",
  isLogo: true,
  logoDecal: "./assets/spider.png",
  setEyeView: (value) => set({ eyeView: value }),
  setColor: (value) => set({ color: value }),
  setIsLogo: (value) => set({ isLogo: value }),
  setLogoDecal: (logoDecal) => set({ logoDecal }),
}));
