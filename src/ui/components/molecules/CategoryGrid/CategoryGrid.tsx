"use client";

import { CategoryIcon } from "@components/molecules";
import Link from "next/link";
import { cn } from "@utils";
import { AtomImage, Text } from "../../atoms";

interface CategoryGridProps {
    list: {
        name: string;
        fullSlug: string;
        icon: {
            url: string;
            alt: string;
        };
        icon_mask: {
            url: string;
            alt: string;
        };
        activeElements: {
            name: string;
            fullSlug: string;
            image: {
                url: string;
                alt: string;
            };
        }[];
    };
}

export const CategoryGrid = ({ list }: CategoryGridProps) => {
    return (
        <div className="flex flex-col gap-y-[56px] w-full">
            <Link
                href={`/pda/${list.fullSlug}`}
                className={cn(
                    "w-[50%] p-[16px] bg-gray rounded-[4px] border-[1px] border-border",
                    "text-warm-sand font-[500] text-[26px] font-roboto_condensed flex justify-start items-center underline-none",
                    "hover:underline hover:text-toxic_secondary transition-colors duration-300",
                    "group"
                )}
            >
                <CategoryIcon
                    icon={list.icon}
                    icon_mask={list.icon_mask}
                />
                {list.name}
            </Link>
            <div
                className="flex flex-wrap gap-x-[80px] gap-y-[32px]"
            >
                {list.activeElements.map((element, idx) => {
                    return (
                        <Link
                            href={`/pda/${element.fullSlug}`}
                            key={idx}
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
        </div>
    )
}