import { CollectionConfig } from "payload";

export const MedicinesMedia: CollectionConfig = {
    slug: 'medicines-media',
    access: {
        read: () => true,
    },
    upload: {
        staticDir: 'media',
        mimeTypes: ['image/medicines*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
    ],
}
