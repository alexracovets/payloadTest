"use client";

import Link from "next/link";
import { CategoryType } from "@types";
import { cn } from "@utils";

import { CategoryIcon } from "@components/atoms";
import { CategoryGridItem } from "@components/molecules";


export const CategoryGridView = ({ list }: { list: CategoryType }) => {

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
                    mask={list.icon_mask}
                />
                {list.name}
            </Link>
            <CategoryGridItem list={list.activeElements} />
        </div>
    )
}