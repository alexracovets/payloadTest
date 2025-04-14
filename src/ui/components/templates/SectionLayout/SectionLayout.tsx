"use client";

interface SectionType {
  id: string;
  name: string;
  link: string;
}

export const SectionLayout = ({ data }: { data: SectionType }) => {
  return <>{data.name}</>;
};
