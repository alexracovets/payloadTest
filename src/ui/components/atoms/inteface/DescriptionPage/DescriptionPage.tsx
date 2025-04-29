"use client";

import { Text } from "@components/atoms";

interface DescriptionPageProps {
    texts: { text: string }[];
}

export const DescriptionPage = ({ texts }: DescriptionPageProps) => {
    return (
        <div className="flex flex-col gap-y-[24px] w-full" >
            {
                texts.map((paragraph, idx) => (
                    <Text variant="description" key={idx} > {paragraph.text} </Text>
                ))
            }
        </div>
    )
}