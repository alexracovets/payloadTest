"use client";

import { ChildrenType } from "@types";

export const NavigationWrapper = ({ children }: ChildrenType) => {
  return (
    <nav className="relative flex justify-center items-center border-border border-y-[.1rem] gap-x-[2.8rem] z-[1] bg-light_black min-h-[9rem]">
      {children}
    </nav>
  );
};
