import type { CollectionConfig, CollectionSlug } from "payload";

export const Sections: CollectionConfig = {
  slug: "sections",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "fullSlug",
      type: "text",
      required: true,
      label: "Slug",
      admin: {
        position: "sidebar",
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
      name: "activeCategories",
      type: "relationship",
      relationTo: "categories" as CollectionSlug,
      label: "Active Categories",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
};
