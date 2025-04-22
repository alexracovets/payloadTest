"use client";

import { cn } from "@utils";

export const LineDash = ({ className }: { className?: string }) => {
  return <hr className={cn("w-full border-t border-light_white", className)} />;
};
