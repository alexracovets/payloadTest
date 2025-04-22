"use client";

import { use } from "react";
import { usePayloadData } from "@hooks";
import { SectionLayout } from "@components/templates";

interface CategoryProps {
  params: Promise<{ categories: string }>;
}

interface SectionType {
  id: string;
  name: string;
  link: string;
}

export default function Categories({ params }: CategoryProps) {
  const { categories: category } = use(params);
  const categories = usePayloadData<SectionType>("/api/categories");
  const categoryPage = categories.find((s) => s.link === category);
  return (
    <>
      {categoryPage ? (
        <SectionLayout data={categoryPage} />
      ) : (
        <h1 className="text-white">Category not found</h1>
      )}
    </>
  );
}
