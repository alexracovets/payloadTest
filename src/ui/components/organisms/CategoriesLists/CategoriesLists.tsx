"use client";

import { CategoryList, CategoryGrid } from "@components/molecules";
import { useElementsView } from "@store";
import { CategoryType } from "@types";

export const CategoriesLists = ({ lists }: { lists: CategoryType[] }) => {
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
