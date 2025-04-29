"use client";

import { SectionsTop, CategoriesLists } from "@components/organisms";
import { Container } from "@components/atoms";
import { SectionType } from "@types";

export const SectionLayout = ({ data }: { data: SectionType }) => {
  return (
    <Container>
      <SectionsTop name={data.name} subtitle={data.subtitle} />
      <CategoriesLists lists={data.activeCategories} />
    </Container>
  );
};
