import type { CollectionConfig } from "payload";
import { Sections } from "./Sections";

export const Categories: CollectionConfig = {
  slug: "categories",
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
      name: "link",
      type: "text",
      required: true,
      label: "Path name",
    },
    {
      name: "section",
      type: "relationship",
      relationTo: "sections" as const,
      required: true,
      label: "Section",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
