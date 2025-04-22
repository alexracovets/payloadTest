"use client";

import { ChildrenType } from "@types";

export const ContentWrapper = ({ children }: ChildrenType) => {
  return (
    <div className="relative p-[3.2rem] w-full">{children}</div>
  );
};
