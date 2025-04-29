import { Field } from "payload";

export const Armor = (): Field[] => {
    const typePage = "armor"

    return [
        {
            name: "subtitle",
            type: "text",
            required: true,
            label: "Subtitle",
            admin: {
                condition: (data: any) => data.pageType === typePage,
            }
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
            ],
            admin: {
                condition: (data: any) => data.pageType === typePage,
            }
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            label: "Image",
            admin: {
                position: "sidebar",
                condition: (data: any) => data.pageType === typePage,
            }
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
                condition: (data: any) => data.pageType === typePage,
            }
        },
        {
            name: "info",
            type: "group",
            fields: [
                {
                    name: "weight",
                    type: "number",
                    label: "Weight",
                },
                {
                    name: "artifact_slots",
                    type: "number",
                    label: "Artifact Slots",
                },
                {
                    name: "price",
                    type: "number",
                    label: "Price",
                }
            ],
            admin: {
                condition: (data: any) => data.pageType === typePage,
            }
        }
    ]
}
