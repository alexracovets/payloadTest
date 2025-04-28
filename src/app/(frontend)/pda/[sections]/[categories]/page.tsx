"use client";

import { useEffect, useState } from "react";

interface CategoryType {
  id: number;
  fullSlug: string;
  name: string;
  subtitle: string;
  updatedAt: string;
  createdAt: string;
}

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

  return (
    <div>
      <h1>{section.name}</h1>
      <p>{section.subtitle}</p>
      <small>Оновлено: {new Date(section.updatedAt).toLocaleString()}</small>
    </div>
  );
}
