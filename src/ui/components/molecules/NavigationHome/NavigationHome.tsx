"use client";

import { usePayloadData } from "@/hooks";
import { NavHomeLink } from "./NavHomeLink";

interface SectionType {
  id: string;
  name: string;
  link: string;
}

export const NavigationHome = () => {
  const sections = usePayloadData<SectionType>("/api/sections");

  return (
    <ul className="flex flex-col gap-y-4 w-full">
      {sections.map((section) => {
        return <NavHomeLink key={section.id} section={section} />;
      })}
    </ul>
  );
};
