"use client";

import { useEffect, useState } from "react";
import { CategoryLayout } from "@components/templates";
import { CategoryType } from "@types";



interface PageProps {
  params: Promise<{ sections: string; categories: string }>;
}

export default function Categories({ params }: PageProps) {
  const [section, setSection] = useState<CategoryType | null>(null);

  useEffect(() => {
    const fetchSection = async () => {
      const { sections, categories } = await params;
      const res = await fetch(
        `/api/categories?where[fullSlug][equals]=${sections}/${categories}`
      );
      const data = await res.json();

      if (data?.docs?.length > 0) {
        setSection(data.docs[0]);
      }
    };

    fetchSection();
  }, [params]);

  if (!section) return <div>Завантаження...</div>;

  return <CategoryLayout data={section} />;
}
