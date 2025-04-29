"use client";

import { SectionsTop } from "@components/organisms";
import { CategoriesSortView } from "@components/molecules";
import { Container } from "@components/atoms";
import { SectionType } from "@types";

export const SectionLayout = ({ data }: { data: SectionType }) => {
  return (
    <Container>
      <SectionsTop name={data.name} subtitle={data.subtitle} />
      <CategoriesSortView categories={data.activeCategories} />
    </Container>
  );
};
