"use client";

import { CategoryList } from "@components/molecules";

interface CategoriesListsProps {
  lists: {
    name: string;
    fullSlug: string;
    activeElements: {
      name: string;
      fullSlug: string;
    }[];
  }[];
}

export const CategoriesLists = ({ lists }: CategoriesListsProps) => {
  return (
    <div className="mt-[48px] flex justify-between items-start w-full">
      {lists.map((list, idx) => {
        return (
          <CategoryList key={idx} list={list} />
        )
      })}
    </div>
  );
};
