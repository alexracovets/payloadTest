import type { CollectionConfig, CollectionSlug } from "payload";

export const Sections: CollectionConfig = {
  slug: "sections",
  admin: {
    useAsTitle: "name",
  },
  defaultSort: "order",
  access: {
    read: () => true,
  },
  fields: [
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
      name: "link",
      type: "text",
      required: true,
      label: "Path name",
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories" as CollectionSlug,
      hasMany: true,
      admin: {
        position: "sidebar",
        readOnly: true,
      },
    },
  ],
};
