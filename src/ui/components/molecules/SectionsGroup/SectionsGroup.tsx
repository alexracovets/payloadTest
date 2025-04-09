"use client";

import { useRef, useEffect } from "react";
import { useNavDash, usePayloadData } from "@hooks";
import { SectionStore } from "@store";
import { SectionLink } from "./SectionLink/SectionLink";

interface SectionType {
  id: string;
  name: string;
  link: string;
}

export const SectionsGroup = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { setActiveSection, setCurrentSection } = useNavDash({
    menuRef: menuRef as React.RefObject<HTMLDivElement>,
  });
  const currentSection = SectionStore((state) => state.currentSection);
  const sections = usePayloadData<SectionType>("/api/sections");

  useEffect(() => {
    setCurrentSection();
  }, [setCurrentSection]);

  return (
    <nav className="h-full relative" ref={menuRef}>
      <ul
        onMouseLeave={() => setCurrentSection()}
        className="flex justify-center items-center gap-x-[8rem]"
      >
        {sections.map((section, idx) => {
          return (
            <SectionLink
              key={idx}
              route={section.link}
              id={section.id}
              name={section.name}
              currentSection={currentSection}
              setActiveSection={setActiveSection}
            />
          );
        })}
      </ul>
    </nav>
  );
};
