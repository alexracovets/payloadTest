import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: () => true,
    },
    upload: {
        staticDir: 'media',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
    ],
}