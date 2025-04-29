"use client";

import { useEffect, useState } from "react";

import { ArmorLayout } from "@components/templates";
import { ElementType } from "@types";

interface PageProps {
  params: Promise<{ sections: string; categories: string; elements: string }>;
}

export default function Elements({ params }: PageProps) {
  const [element, setElement] = useState<ElementType | null>(null);

  useEffect(() => {
    const fetchSection = async () => {
      const { sections, categories, elements } = await params;
      const res = await fetch(
        `/api/elements?where[fullSlug][equals]=${sections}/${categories}/${elements}`
      );
      const data = await res.json();

      if (data?.docs?.length > 0) {
        setElement(data.docs[0]);
      }
    };

    fetchSection();
  }, [params]);

  if (!element) return <div>Завантаження...</div>;

  return (
    <>
      {element.pageType === "armor" && <ArmorLayout data={element} />}
    </>
  );
}
