"use client";

import { use, useEffect, useState } from "react";
import { usePayloadData } from "@hooks";
import { SectionLayout } from "@components/templates";

interface PageProps {
  params: Promise<{ sections: string }>;
}

interface SectionType {
  id: string;
  fullSlug: string;
  name: string;
  subtitle: string;
  link: string;
  categories: {
    id: string;
    name: string;
    link: string;
  }[];
  updatedAt: string;
  createdAt: string;
}

export default function Sections({ params }: PageProps) {
  const { sections: slug } = use(params);

  const test = () => {
    const sections = usePayloadData<SectionType>(`/api/sections`);
    const test = sections.find((s) => s.fullSlug === slug);
    const sectionId = test?.id || "";
    const sectionData = usePayloadData<SectionType>(
      `/api/sections/${sectionId}`
    );
    return sectionData[0];
  };
  const [sectionData, setSectionData] = useState<SectionType | null>(test());

  return <>{sectionData && <SectionLayout data={sectionData} />}</>;
}
