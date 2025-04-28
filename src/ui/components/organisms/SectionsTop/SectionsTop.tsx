"use client";

import { CategoriesListsView } from "@components/molecules";
import { TitlePage } from "@components/molecules";

interface SectionTopProps {
    name: string;
    subtitle: string;
}

export const SectionsTop = ({ name, subtitle }: SectionTopProps) => {
    return (
        <div className="flex justify-between items-center" >
            <TitlePage title={name} subtitle={subtitle} className="min-w-[50%]" />
            <CategoriesListsView />
        </div>
    )
}