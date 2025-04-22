"use client";

import { useEffect, useState } from "react";

interface SectionType {
  id: number;
  fullSlug: string;
  name: string;
  subtitle: string;
  updatedAt: string;
  createdAt: string;
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
        `/api/sections?where[fullSlug][equals]=${sections}`
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
