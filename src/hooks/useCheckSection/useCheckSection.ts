"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useNavigationStore } from "@store";

export const useCheckSection = () => {
  const currentPath = usePathname();
  const setCurrentSection = useNavigationStore(
    (state) => state.setCurrentSection
  );

  useEffect(() => {
    if (!currentPath) return;

    const sectionMatch = currentPath.match(/^\/[^\/]+\/([^\/]+)/);
    const section = sectionMatch ? sectionMatch[1] : null;

    if (section) {
      setCurrentSection(section);
    }
  }, [currentPath, setCurrentSection]);

  return null;
};
