import {
    getPayload,
    type CollectionConfig,
    type CollectionSlug,
    type Payload,
    type TypeWithID,
} from "payload";
import config from "@payload-config";
import { Armor } from "./Fields/Armor";

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
                "armor",
                "mask",
                "exoskeleton",
                "medkit",
                "pistol",
                "automatic",
                "shotgun",
                "sniper",
                "machinegun",
                "attachments",
                "ammo",
                "location",
                "anomaly",
                "artifact",
                "mutant",
                "echoLocation",
                "group",
                "character",
                "questChoice",
                "joke",
                "lifehack",
                "mainQuest",
                "sideQuest",
                "other",
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
        ...Armor(),
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
