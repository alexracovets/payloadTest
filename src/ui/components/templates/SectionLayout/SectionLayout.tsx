"use client";

import { Container } from "@components/atoms";
import { SectionsTop } from "@components/organisms";
import { CategoriesLists } from "@components/organisms";

interface SectionType {
  id: string;
  name: string; 
  fullSlug: string;
  subtitle: string;
  activeCategories: {
    id: string;
    name: string;
    fullSlug: string;
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
      name: string;
      fullSlug: string;
      image: {
        url: string;
        alt: string;
      };
    }[];
  }[];
}

export const SectionLayout = ({ data }: { data: SectionType }) => {
  return (
    <Container>
      <SectionsTop name={data.name} subtitle={data.subtitle} />
      <CategoriesLists lists={data.activeCategories} />
    </Container>
  );
};
