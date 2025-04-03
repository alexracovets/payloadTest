"use client";

export interface PDAStoreType {
    isOpen: true | false;
    isPlay: true | false;
    setIsOpen: (value: true | false) => void;
    setIsPlay: (value: true | false) => void;
};