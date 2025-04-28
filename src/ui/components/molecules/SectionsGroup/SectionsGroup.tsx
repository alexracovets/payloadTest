"use client";

import { useRef, RefObject } from "react";
import { SectionsDash } from "@components/molecules";
import { SectionLink } from "./SectionLink/SectionLink";
import { useDashPositions } from "@/hooks";

import { useNavigationStore } from "@store";

export const SectionsGroup = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { sections, currentSection, setDashActive } = useNavigationStore();
  useDashPositions({ menuRef: menuRef as RefObject<HTMLDivElement> });

  return (
    <nav className="h-full relative" ref={menuRef}>
      <ul
        onMouseLeave={() => setDashActive(currentSection)}
        className="flex justify-center items-center gap-x-[8rem]"
      >
        {sections.map((section, idx) => {
          return (
            <SectionLink
              key={section.id}
              route={`/pda/${section.fullSlug}`}
              id={idx}
              name={section.name}
              currentSection={currentSection}
              setDashActive={setDashActive}
            />
          );
        })}
      </ul>
      <SectionsDash />
    </nav>
  );
};
