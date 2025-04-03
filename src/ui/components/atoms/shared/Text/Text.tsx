"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { createElement, JSX } from "react";

import { cn } from "@utils";

interface TextProps extends VariantProps<typeof textVariants> {
    children: React.ReactNode;
    className?: string;
    asChild?: keyof JSX.IntrinsicElements;
}

const textVariants = cva(
    "font-montserrat",
    {
        variants: {
            variant: {
                default: "",
                info: cn(
                    "uppercase font-roboto_condensed text-3xl text-[#7B7B7A] font-[600]"
                ),
                homeLogo: cn(
                    "font-stalker uppercase text-9xl text-white tracking-tightest"
                ),
                subHomeLogo: cn(
                    "font-calibri text-center uppercase text-2xl text-[#9E9D98] tracking-[13px]"
                )
            }
        },
        defaultVariants: {
            variant: "default"
        },
    }
);

export const Text = ({ children, className, variant, asChild = "p" }: TextProps) => {
    return createElement(
        asChild,
        { className: cn(textVariants({ variant, className })) },
        children
    );
};