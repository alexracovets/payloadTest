"use client";

import { MediaType } from "@types";

export interface ElementType {
    id: string;
    name: string;
    fullSlug: string;
    image: MediaType;
    updatedAt: string;
    createdAt: string;
}

