'use client';

import { notFound } from "next/navigation";
import { useNavigationHome } from "@/hooks/useNavigationHome";

interface PageProps {
  params: { sections: string };
}

export default function Sections({ params }: PageProps) {
  const { sections: section } = params;
  const { navigation, loading, error } = useNavigationHome();

  if (loading) return <div>Завантаження...</div>;
  if (error) notFound();

  const foundSection = navigation.find(
    (item) => item.link === `/${section}`
  );

  if (!foundSection) notFound();

  return <h1 className="text-white">{foundSection.title}</h1>;
}
