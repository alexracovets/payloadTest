"use client";

import { RefObject, useEffect } from "react";
import { useNavigationStore } from "@store";

export interface DashPositionsType {
  menuRef: RefObject<HTMLDivElement>;
}

export const useDashPositions = ({ menuRef }: DashPositionsType) => {
  const { dashActive, setDashPosition } = useNavigationStore();

  useEffect(() => {
    if (!menuRef.current) return;

    const getElementWithDelay = () => {
      const dash = document.getElementById(dashActive as string);
      if (!dash) {
        setTimeout(getElementWithDelay, 100);
        return;
      }

      const dashPosition = dash.getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();

      setDashPosition({
        left: dashPosition.left - menuRect.left,
        width: dashPosition.width,
      });
    };

    getElementWithDelay();
  }, [dashActive, menuRef, setDashPosition]);

  return null;
};
