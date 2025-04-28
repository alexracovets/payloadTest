import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ElementsViewStoreType {
    isList: boolean;
    setIsList: (isList: boolean) => void;
}

export const useElementsView = create<ElementsViewStoreType>()(
    immer((set) => ({
        isList: true,
        setIsList: (isList: boolean) => set({ isList }),
    }))
);
