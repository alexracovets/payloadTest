"use client";

import { DefaultTemplate } from "@components/templates";
import { ChildrenType } from '@/types';


export default function RootLayout({ children }: ChildrenType) {
  return (
    <DefaultTemplate>
      {children}
    </DefaultTemplate>
  );
};