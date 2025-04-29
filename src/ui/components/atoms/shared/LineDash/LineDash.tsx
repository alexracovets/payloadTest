"use client";

import { cn } from "@utils";

interface LineDashProps {
  className?: string;
  short?: boolean;
}

export const LineDash = ({ className, short }: LineDashProps) => {
  return <hr className={cn(
    "w-full border-t border-dark_gray",
    className,
    short && "max-w-[50%]"
  )} />;
};
