import { CategoryType } from "@types";


export interface SectionType {
    id: string;
    fullSlug: string;
    name: string;
    subtitle: string;
    activeCategories: CategoryType[];
    updatedAt: string;
    createdAt: string;
}