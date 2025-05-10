"use client";

import { ChildrenType } from "@types";

export const ContentWrapper = ({ children }: ChildrenType) => {
  return (
    <div className="relative pl-[3.2rem] pr-[1.6rem] w-full">{children}</div>
  );
};
