import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface SectionType {
  id: string;
  name: string;
  link: string;
}

interface NavigationStoreType {
  sections: SectionType[];
  currentSection: string | null;
  dashActive: string | null;
  dashPosition: { left: number; width: number };
  setSections: (sections: SectionType[]) => void;
  setCurrentSection: (section: string | null) => void;
  setDashActive: (active: string | null) => void;
  setDashPosition: (position: { left: number; width: number }) => void;
}

export const useNavigationStore = create<NavigationStoreType>()(
  immer((set) => ({
    sections: [],
    currentSection: null,
    dashActive: null,
    dashPosition: {
      left: 0,
      width: 0,
    },
    setSections: (sections: SectionType[]) => set({ sections }),
    setCurrentSection: (section: string | null) =>
      set({ currentSection: section, dashActive: section }),
    setDashActive: (active: string | null) => set({ dashActive: active }),
    setDashPosition: (position: { left: number; width: number }) =>
      set({ dashPosition: position }),
  }))
);
