"use client";

import { MediaType } from "@/types";
import { AtomImage } from "@components/atoms";
import { cn } from "@utils";

interface CategoryIconProps {
    icon: MediaType;
    mask: MediaType;
}

export const CategoryIcon = ({ icon, mask }: CategoryIconProps) => {
    return (
        <div
            className="relative"
        >
            <AtomImage
                src={icon.url}
                alt={icon.alt}
                fill
                className="w-[56px] h-[56px] mr-[16px]"
            />
            <AtomImage
                src={mask.url}
                alt={mask.alt}
                fill
                className={cn(
                    "absolute top-0 left-0 w-[56px] h-[56px] mr-[16px]",
                    "group-hover:opacity-100 opacity-0"
                )}
            />
        </div>
    )
}