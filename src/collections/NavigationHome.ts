import type { CollectionConfig } from "payload";

export const NavigationHome: CollectionConfig = {
  slug: "navigationHome",
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Назва",
    },
    {
      name: "link",
      type: "text",
      required: true,
    },
  ],
};
