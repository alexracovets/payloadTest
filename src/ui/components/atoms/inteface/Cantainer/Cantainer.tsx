"use client";

import { ChildrenType } from "@/types";
import { cn } from "@/utils/cn";

interface ContainerProps {
  children: ChildrenType["children"];
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn("w-full h-full", className)}>{children}</div>;
};
