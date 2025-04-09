"use client";

interface SectionType {
  id: string;
  name: string;
  route: string;
  categories: string[];
}

export interface SectionStoreType {
  sections: SectionType[];
  categories: string[];
  currentSection: string;
  prevSection: string;
  nextSection: string;
  isShowLines: boolean;
  lineStyles: {
    underline: { left: string; width: string };
    shortline: { left: string; width: string };
  };
  setCurrentSection: (value: string) => void;
  setCurrentCategories: (value: string[]) => void;
  setLineStyles: (value: {
    underline: { left: string; width: string };
    shortline: { left: string; width: string };
  }) => void;
  setIsShow: (value: boolean) => void;
}
