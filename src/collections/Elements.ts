import {
    getPayload,
    type CollectionConfig,
    type CollectionSlug,
    type Payload,
    type TypeWithID,
} from "payload";
import config from "@payload-config";

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
            name: "image",
            type: "upload",
            relationTo: "media",
            label: "Image",
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
            name: "parent",
            type: "relationship",
            relationTo: "categories" as CollectionSlug,
            label: "Category",
            hasMany: false,
            admin: {
                position: "sidebar",
            },
        },
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
