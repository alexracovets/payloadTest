"use client";

import { MediaType, CategoryType } from "@types";

export interface ElementType {
    id: string;
    name: string;
    parent: CategoryType;
    slug: string;
    pageType: string;
    fullSlug: string;
    subtitle: string;
    description: { text: string }[];
    image: MediaType;
    updatedAt: string;
    createdAt: string;
}

