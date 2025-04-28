"use client";

import { CategoryList, CategoryGrid } from "@components/molecules";
import { useElementsView } from "@store";

interface CategoriesListsProps {
  lists: {
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
      name: string;
      fullSlug: string;
      image: {
        url: string;
        alt: string;
      };
    }[];
  }[];
}

export const CategoriesLists = ({ lists }: CategoriesListsProps) => {
  const { isList } = useElementsView();
  return (
    <div className="mt-[48px] flex justify-between items-start w-full gap-x-[48px]">
      {
        isList ? lists.map((list, idx) => {
          return (
            <CategoryList key={idx} list={list} />
          )
        }) : lists.map((list, idx) => {
          return (
            <CategoryGrid key={idx} list={list} />
          )
        })
      }
    </div>
  );
};
