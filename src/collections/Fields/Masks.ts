import { Field } from "payload";

export const Masks = (): Field[] => {
    const typePage = "masks"

    return [
        {
            name: "info_mask",
            type: "group",
            fields: [
                {
                    name: "weight",
                    type: "number",
                    label: "Weight",
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
