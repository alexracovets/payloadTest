"use client";

import { useElementsView } from "@store";
import { CategoryGridView, CategoryListView } from "@components/molecules";
import { CategoryType } from "@types";

export const CategoriesSortView = ({ categories }: { categories: CategoryType[] }) => {
    const { isList } = useElementsView();

    return (
        <div className="mt-[48px] flex justify-between items-start w-full gap-x-[48px]">
            {
                categories.map((category, idx) => {
                    return (
                        isList ? <CategoryListView key={idx} list={category} /> : <CategoryGridView key={idx} list={category} />
                    )
                })
            }
        </div>
    )
}