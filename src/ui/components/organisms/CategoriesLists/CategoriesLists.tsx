"use client";

import { CategoryList } from "@components/molecules";

interface CategoriesListsProps {
  lists: {
    name: string;
    link: string;
    pages: {
      name: string;
      link: string;
    }[];
  }[];
}

export const CategoriesLists = ({ lists }: CategoriesListsProps) => {
  return (
    <div>
      {lists.map((list, idx) => (
        <CategoryList key={idx} list={list} />
      ))}
    </div>
  );
};
