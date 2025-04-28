import {
  getPayload,
  type CollectionConfig,
  type CollectionSlug,
  type Payload,
  type TypeWithID,
} from "payload";
import config from "@payload-config";

type Section = TypeWithID & {
  fullSlug: string;
  name: string;
  subtitle: string;
};

type PayloadWithSections = Payload & {
  findByID(args: { collection: "sections"; id: string }): Promise<Section>;
};

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
  },
  fields: [
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
      name: "parent",
      type: "relationship",
      relationTo: "sections" as CollectionSlug,
      label: "Section",
      hasMany: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "activeElements",
      type: "relationship",
      relationTo: "elements" as CollectionSlug,
      label: "Active elements",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data }) => {
        const payload = (await getPayload({ config })) as PayloadWithSections;
        const parentPage = await payload.findByID({
          collection: "sections",
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
