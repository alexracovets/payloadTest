import { CollectionConfig } from "payload";

export const MedicinesMedia: CollectionConfig = {
    slug: 'medicines-media',
    access: {
        read: () => true,
    },
    upload: {
        staticDir: 'media',
        mimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
        {
            name: "impact",
            type: "text",
        },
    ],
}
