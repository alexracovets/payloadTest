import { CollectionSlug } from "payload";

export const Medicines = () => {
    const typePage = "medicines"

    return [
        {
            name: "parameters",
            type: "array",
            label: "Вплив на персонажа",
            fields: [
                {
                    type: "row",
                    fields: [
                        {
                            name: "parameter",
                            type: "relationship",
                            relationTo: "medicines-media" as CollectionSlug,
                            label: "Type",
                            admin: {
                                position: "sidebar",
                                appearance: "drawer",
                                description: "Виберіть зображення параметра",
                                allowCreate: false,
                            }
                        },
                        {
                            name: "value_type",
                            type: "text",
                            label: "Значення",
                        },
                        {
                            name: "color",
                            type: "text",
                            label: "Color",
                        }
                    ]
                }
            ],
            admin: {
                condition: (data: any) => data.pageType === typePage,
            }
        }
    ]
}
