"use client";

import { SectionLayout } from "@components/templates";
import { useEffect, useState } from "react";

interface SectionType {
  id: string;
  fullSlug: string;
  name: string;
  subtitle: string;
  activeCategories: {
    id: string;
    fullSlug: string;
    name: string;
    subtitle: string;
    icon: {
      url: string;
      alt: string;
    };
    icon_mask: {
      url: string;
      alt: string;
    };
    activeElements: {
      id: string;
      fullSlug: string;
      name: string;
      subtitle: string;
      image: {
        url: string;
        alt: string;
      };
      activeSubElements: {
        id: string;
        fullSlug: string;
        name: string;
        subtitle: string;
        description: string;
        image: {
          url: string;
          alt: string;
        };
      }[];
    }[];
  }[];
}

interface PageProps {
  params: Promise<{ sections: string }>;
}

export default function Sections({ params }: PageProps) {
  const [section, setSection] = useState<SectionType | null>(null);

  useEffect(() => {
    const fetchSection = async () => {
      const { sections } = await params;

      const res = await fetch(
        `/api/sections?where[fullSlug][equals]=${sections}&depth=3`
      );
      const data = await res.json();

      if (data?.docs?.length > 0) {
        setSection(data.docs[0]);
      }
    };

    fetchSection();
  }, [params]);

  if (!section) return <div>Завантаження...</div>;

  return (
    <>
      {section && <SectionLayout data={section} />}
    </>

  );
}
