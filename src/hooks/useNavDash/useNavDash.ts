"use client";

import { useCallback, MouseEvent, RefObject } from "react";

import { SectionStore } from "@store";

interface useNavDashType {
  menuRef: RefObject<HTMLDivElement> | null;
}

export const useNavDash = ({ menuRef }: useNavDashType) => {
  const setIsShow = SectionStore((state) => state.setIsShow);
  const setLineStyles = SectionStore((state) => state.setLineStyles);
  const currentSection = SectionStore((state) => state.currentSection);

  const setActiveSection = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      const linkRect = e.currentTarget.getBoundingClientRect();
      const menuRect = menuRef?.current?.getBoundingClientRect();
      const spanRect = e.currentTarget
        .querySelector("span")
        ?.getBoundingClientRect();

      if (menuRect && spanRect) {
        setIsShow(true);

        setLineStyles({
          underline: {
            left: `${linkRect.left - menuRect.left}px`,
            width: `${linkRect.width}px`,
          },
          shortline: {
            left: `${spanRect.left - menuRect.left}px`,
            width: `${spanRect.width}px`,
          },
        });
      }
    },
    [menuRef, setIsShow, setLineStyles]
  );

  const setCurrentSection = useCallback(() => {
    const sectionElement = document.getElementById(currentSection);
    const menuRect = menuRef?.current?.getBoundingClientRect();
    const spanRect = sectionElement
      ?.querySelector("span")
      ?.getBoundingClientRect();

    if (menuRect && sectionElement && spanRect) {
      const linkRect = sectionElement.getBoundingClientRect();
      setIsShow(true);

      setLineStyles({
        underline: {
          left: `${linkRect.left - menuRect.left}px`,
          width: `${linkRect.width}px`,
        },
        shortline: {
          left: `${spanRect.left - menuRect.left}px`,
          width: `${spanRect.width}px`,
        },
      });
    }
  }, [currentSection, menuRef, setIsShow, setLineStyles]);

  return { setActiveSection, setCurrentSection };
};
