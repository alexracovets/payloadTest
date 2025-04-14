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
  dashPosition: {
    bigLine: { left: string; width: string };
    smallLine: { left: string; width: string };
  };
  setSections: (sections: SectionType[]) => void;
  setCurrentSection: (section: string | null) => void;
  setDashActive: (active: string | null) => void;
  setDashPosition: (position: {
    bigLine: { left: string; width: string };
    smallLine: { left: string; width: string };
  }) => void;
}

export const useNavigationStore = create<NavigationStoreType>()(
  immer((set) => ({
    sections: [],
    currentSection: null,
    dashActive: null,
    dashPosition: {
      bigLine: { left: "0px", width: "0px" },
      smallLine: { left: "0px", width: "0px" },
    },
    setSections: (sections: SectionType[]) => set({ sections }),
    setCurrentSection: (section: string | null) =>
      set({ currentSection: section, dashActive: section }),
    setDashActive: (active: string | null) => set({ dashActive: active }),
    setDashPosition: (position: {
      bigLine: { left: string; width: string };
      smallLine: { left: string; width: string };
    }) => set({ dashPosition: position }),
  }))
);
