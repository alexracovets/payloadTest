"use client"

import { AtomImage } from "@components/atoms";
import { cn } from "@utils";

interface CategoryIconProps {
    icon: {
        url: string;
        alt: string;
    };
    icon_mask: {
        url: string;
        alt: string;
    };
}

export const CategoryIcon = ({ icon, icon_mask }: CategoryIconProps) => {
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
                src={icon_mask.url}
                alt={icon_mask.alt}
                fill
                className={cn(
                    "absolute top-0 left-0 w-[56px] h-[56px] mr-[16px]",
                    "group-hover:opacity-100 opacity-0"
                )}
            />
        </div>
    )
}
