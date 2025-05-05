import { Field } from "payload";

export const Medicines = (): Field[] => {
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
                            type: "text",
                            label: "Параметр",
                        },
                        {
                            name: "value",
                            type: "text",
                            label: "Значення",
                        },
                    ]
                }
            ],
            admin: {
                condition: (data: any) => data.pageType === typePage,
            }
        }
    ]
}
