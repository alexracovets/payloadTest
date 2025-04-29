"use client";

import Link from "next/link";

import { AtomImage, Text } from "@components/atoms";
import { ElementType } from "@types";

export const CategoryGridItem = ({ list }: { list: ElementType[] }) => {
    return (
        <div
            className="flex flex-wrap gap-x-[80px] gap-y-[32px]"
        >
            {list.map((element, idx) => {
                return (
                    <Link
                        key={idx}
                        href={`/pda/${element.fullSlug}`}
                        className="flex flex-col gap-y-[8px]"
                    >
                        <AtomImage
                            src={element.image.url}
                            alt={element.image.alt}
                            fill
                            className="w-[192px] h-[192px]"
                        />
                        <Text variant="elementGrid">{element.name}</Text>
                    </Link>
                )
            })}
        </div>
    )
}