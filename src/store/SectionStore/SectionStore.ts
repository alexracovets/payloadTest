import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { SectionStoreType } from "@types";

import sections from "@data/sections.json";

export const SectionStore = create<SectionStoreType>()(
  immer((set) => ({
    sections: sections,
    categories: [],
    currentSection: "",
    prevSection: "",
    nextSection: "",
    isShowLines: false,
    lineStyles: {
      underline: { left: "0px", width: "0px" },
      shortline: { left: "0px", width: "0px" },
    },
    setCurrentSection: (value: string) =>
      set((state) => {
        state.currentSection = value;
      }),
    setCurrentCategories: (value: string[]) =>
      set((state) => {
        state.categories = value;
      }),
    setLineStyles: (value) =>
      set((state) => {
        state.lineStyles = value;
      }),
    setIsShow: (value) =>
      set((state) => {
        state.isShowLines = value;
      }),
  }))
);
