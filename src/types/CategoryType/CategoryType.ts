"use client";

import { SectionType, ElementType, MediaType } from "@types";

export interface CategoryType {
    id: string;
    slug: string;
    parent: SectionType;
    fullSlug: string;
    name: string;
    subtitle: string;
    icon: MediaType,
    icon_mask: MediaType,
    activeElements: ElementType[],
    updatedAt: string;
    createdAt: string;
}
