"use client";

import { SectionTemplate } from "@components/templates";
import { ChildrenType } from "@/types";
import { useCheckSection } from "@hooks";

export default function RootLayout({ children }: ChildrenType) {

    useCheckSection();

  return <SectionTemplate>{children}</SectionTemplate>;
}
