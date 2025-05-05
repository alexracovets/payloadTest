import {
    getPayload,
    type CollectionConfig,
    type CollectionSlug,
    type Payload,
    type TypeWithID,
} from "payload";
import config from "@payload-config";

import { Armors, Masks, Medicines } from "./Fields";

type Elements = TypeWithID & {
    fullSlug: string;
    name: string;
    subtitle: string;
};

type PayloadWithCategories = Payload & {
    findByID(args: { collection: "categories"; id: string }): Promise<Elements>;
};

export const Elements: CollectionConfig = {
    slug: "elements",
    admin: {
        useAsTitle: "name",
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "pageType",
            type: "select",
            required: true,
            label: "Тип сторінки",
            options: [
                "armors",
                "masks",
                "exoskeletons",
                "medicines",
            ],
        },
        {
            name: "fullSlug",
            type: "text",
            admin: {
                hidden: true,
            },
        },
        {
            name: "name",
            type: "text",
            required: true,
            label: "Name",
        },
        {
            name: "subtitle",
            type: "text",
            required: true,
            label: "Subtitle",
        },
        {
            name: 'description',
            label: 'Description',
            type: 'array',
            labels: {
                singular: 'Paragraph',
                plural: 'Paragraphs',
            },
            fields: [
                {
                    name: 'text',
                    label: 'Текст',
                    type: 'textarea',
                    required: true,
                }
            ]
        },
        {
            name: "slug",
            type: "text",
            required: true,
            label: "Slug",
            admin: {
                position: "sidebar",
            },
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            label: "Image",
            admin: {
                position: "sidebar",
            }
        },
        {
            name: "parent",
            type: "relationship",
            relationTo: "categories" as CollectionSlug,
            label: "Category",
            hasMany: false,
            admin: {
                position: "sidebar",
            },
        },
        {
            name: 'resistances',
            label: 'Resistances',
            type: 'group',
            fields: [
                {
                    name: 'thermal',
                    label: 'Тепловий',
                    type: 'number',
                    min: 0,
                    max: 5,
                    defaultValue: 0
                },
                {
                    name: 'electric',
                    label: 'Електричний',
                    type: 'number',
                    min: 0,
                    max: 5,
                    defaultValue: 0
                },
                {
                    name: 'chemical',
                    label: 'Хімічний',
                    type: 'number',
                    min: 0,
                    max: 5,
                    defaultValue: 0
                },
                {
                    name: 'radiation',
                    label: 'Радіаційний',
                    type: 'number',
                    min: 0,
                    max: 5,
                    defaultValue: 0
                },
                {
                    name: 'psy',
                    label: 'Псі',
                    type: 'number',
                    min: 0,
                    max: 5,
                    defaultValue: 0
                },
                {
                    name: 'physical',
                    label: 'Фізичний',
                    type: 'number',
                    min: 0,
                    max: 5,
                    defaultValue: 0
                }
            ],
            admin: {
                condition: (data: any) => data.pageType !== "medicines",
            }
        },
        ...Armors(),
        ...Masks(),
        ...Medicines(),
    ],
    hooks: {
        beforeChange: [
            async ({ data }) => {
                const payload = (await getPayload({ config })) as PayloadWithCategories;
                const parentPage = await payload.findByID({
                    collection: "categories",
                    id: data.parent,
                });

                if (parentPage) {
                    data.fullSlug = `${parentPage.fullSlug}/${data.slug}`;
                } else {
                    data.fullSlug = data.slug;
                }
                return data;
            },
        ],
    },
};
