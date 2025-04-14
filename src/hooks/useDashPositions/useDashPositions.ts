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
      const spanRect = dash.querySelector("span")?.getBoundingClientRect();

      if (!spanRect) return;
      setDashPosition({
        bigLine: {
          left: `${dashPosition.left - menuRect.left}px`,
          width: `${dashPosition.width}px`,
        },
        smallLine: {
          left: `${spanRect.left - menuRect.left}px`,
          width: `${spanRect.width}px`,
        },
      });
    };

    getElementWithDelay();
  }, [dashActive, menuRef, setDashPosition]);

  return null;
};
