"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { createElement, JSX } from "react";

import { cn } from "@utils";

interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
  asChild?: keyof JSX.IntrinsicElements;
}

const textVariants = cva("font-montserrat", {
  variants: {
    variant: {
      default: "",
      homeLogo: cn(
        "font-stalker uppercase text-[13rem] text-white tracking-tightest"
      ),
      subHomeLogo: cn(
        "font-calibri text-center uppercase text-[2.2rem] text-[#9E9D98] tracking-[1.3rem]"
      ),
      homeLink: cn(
        "uppercase font-roboto_condensed text-light_gray text-[3.2rem] text-center font-[600]"
      ),
      info: cn(
        "uppercase font-roboto_condensed text-[2.8rem] text-light_white font-[600]"
      ),
      internet: cn("text-[1.6rem] font-roboto text-light_white"),
      timer: cn(
        "font-roboto text-[1.6rem] text-light_white transition-opacity ease-in-out duration-300"
      ),
      navigationSection: cn(
        "block text-[2.5rem] font-roboto_condensed py-[3.2rem] px-[3rem] cursor-pointer leading-none"
      ),
      pageTitle: cn(
        "text-[34px] font-roboto_condensed text-warm-sand font-[500]"
      ),
      pageSubTitle: cn(
        "text-[18px] font-roboto text-toxic font-[500]"
      ),
      elementGrid: cn(
        "text-center text-[20px] font-roboto text-light_white font-[500] underline"
      ),
      description: cn(
        "text-[20px] font-roboto text-light_white"
      ),
      resistance: cn(
        "text-[16px] font-roboto text-warm-sand"
      ),
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Text = ({
  children,
  className,
  variant,
  asChild = "p",
}: TextProps) => {
  return createElement(
    asChild,
    { className: cn(textVariants({ variant, className })) },
    children
  );
};
