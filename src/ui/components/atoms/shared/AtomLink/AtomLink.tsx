"use client";

import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@utils";


const linkVariants = cva(
    "",
    {
        variants: {
            variant: {
                default: "",
                categoryList: cn(
                    "text-warm-sand font-[500] text-[26px] font-roboto_condensed flex justify-start items-center underline-none",
                    "hover:underline hover:text-toxic_secondary transition-colors duration-300",
                    "group"
                ),
                categoryListItem: cn(
                    "flex justify-start items-center w-full p-[16px] font-[400] text-warm-sand text-[26px] font-roboto_condensed",
                    "nth-of-type-[2n-1]:bg-toxic-light",
                    "relative before:content-[''] before:absolute before:left-[16px] before:top-[50%] before:translate-y-[-50%] before:w-[6px] before:h-[6px] before:bg-warm-sand before:rounded-full before:block",
                    "hover:before:bg-toxic_secondary hover:text-toxic_secondary"
                )
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

interface AtomLinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {
    asChild?: boolean;
    href: string;
    className?: string;
    variant: "default" | "categoryList" | "categoryListItem";
}

export const AtomLink = ({ href, className, children, variant }: AtomLinkProps) => {
    return (
        <Link href={href} className={cn(linkVariants({ variant, className }))}>
            {children}
        </Link>
    )
}