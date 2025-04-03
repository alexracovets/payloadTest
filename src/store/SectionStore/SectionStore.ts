import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { SectionStoreType } from '@types';

import sections from "@data/sections.json";

export const SectionStore = create<SectionStoreType>()(
    immer((set) => ({
        sections: sections,
        categories: [],
        currentSection: "",
        prevSection: "",
        nextSection: "",
        setCurrentSection: (value: string) => set((state) => { state.currentSection = value; }),
        setCurrentCategories: (value: string[]) => set((state) => { state.categories = value; }),
    }))
);