"use client";

import { ChildrenType } from "@/types";

export const Container = ({ children }: ChildrenType) => {
  return <div className="w-full h-full">{children}</div>;
};
