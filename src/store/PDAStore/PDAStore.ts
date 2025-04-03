import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { PDAStoreType } from '@types';

export const PDAStore = create<PDAStoreType>()(
    immer((set) => ({
        isOpen: false,
        isPlay: false,
        setIsOpen: (value) => set((state) => { state.isOpen = value; }),
        setIsPlay: (value) => set((state) => { state.isPlay = value; }),
    }))
);