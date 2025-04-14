"use client";

import { NavHomeLink } from "./NavHomeLink";
import { useNavigationStore } from "@/store";

export const NavigationHome = () => {
  const sections = useNavigationStore((state) => state.sections);

  return (
    <ul className="flex flex-col gap-y-4 w-full">
      {sections.map((section) => {
        return <NavHomeLink key={section.id} section={section} />;
      })}
    </ul>
  );
};
