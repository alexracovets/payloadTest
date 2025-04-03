"use client";

import { SectionTemplate } from "@components/templates";
import { ChildrenType } from "@/types";

export default function RootLayout({ children }: ChildrenType) {
  return <SectionTemplate>{children}</SectionTemplate>;
}
