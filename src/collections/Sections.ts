import type { CollectionConfig } from "payload";

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
  ],
};
