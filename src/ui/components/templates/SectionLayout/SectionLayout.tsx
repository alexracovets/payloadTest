"use client";

import { Container} from "@components/atoms";
import { CategoriesListsView, TitlePage } from "@components/molecules";
import { CategoriesLists } from "@components/organisms";

interface SectionType {
  id: string;
  name: string;
  link: string;
  subtitle: string;
  activeCategories: {
    id: string;
    name: string;
    fullSlug: string;
  }[];
}

export const SectionLayout = ({ data }: { data: SectionType }) => {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <TitlePage title={data.name} subtitle={data.subtitle} />
        <CategoriesListsView />
      </div>
      <CategoriesLists lists={data.activeCategories} />
    </Container>
  );
};
