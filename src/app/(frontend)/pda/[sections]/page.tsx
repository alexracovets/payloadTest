"use client";

import { use } from "react";
import { usePayloadData } from "@hooks";
import { SectionLayout } from "@components/templates";

interface PageProps {
  params: Promise<{ sections: string }>;
}

interface SectionType {
  id: string;
  name: string;
  link: string;
}

export default function Sections({ params }: PageProps) {
  const { sections: section } = use(params);
  const sections = usePayloadData<SectionType>("/api/sections");
  const sectionPage = sections.find((s) => s.link === section);

  return (
    <>
      {sectionPage ? (
        <SectionLayout data={sectionPage} />
      ) : (
        <h1 className="text-white">Section not found</h1>
      )}
    </>
  );
}
