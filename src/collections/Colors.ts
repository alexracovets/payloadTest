import type { CollectionConfig } from 'payload'

export const Colors: CollectionConfig = {
    slug: 'colors',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'color_name',
            type: 'text',
        },
        {
            name: 'color_value',
            type: 'text',   
        },
    ],
}