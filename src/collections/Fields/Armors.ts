import { Field } from "payload";

export const Armors = (): Field[] => {
    const typePage = "armors"

    return [
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
