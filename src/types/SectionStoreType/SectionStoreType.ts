"use client";

interface SectionType {
    id: string;
    name: string;
    route: string;
    categories: string[];
};

export interface SectionStoreType {
    sections: SectionType[];
    categories: string[];
    currentSection: string;
    prevSection: string;
    nextSection: string;
    setCurrentSection: (value: string) => void;
    setCurrentCategories: (value: string[]) => void;
};