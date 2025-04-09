"use client";

import { calibri, stalker, roboto, roboto_condensed, rethink } from "@fonts";
import { ChildrenType } from "@/types";
import { cn } from "@utils";

import "@styles/globals.css";

export const DefaultTemplate = ({ children }: ChildrenType) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          calibri.variable,
          stalker.variable,
          roboto_condensed.variable,
          roboto.variable,
          rethink.variable,
          "antialiased flex flex-col w-full h-[100dvh] bg-black"
        )}
      >
        {children}
      </body>
    </html>
  );
};
