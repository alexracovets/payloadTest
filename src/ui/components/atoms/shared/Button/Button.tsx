import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@utils";

const buttonVariants = cva(
  "flex justify-center items-center cursor-pointer text-primary-mainBlack",
  {
    variants: {
      variant: {
        default: "",
        destructive: cn(
          "bg-destructive bg-[url('/png/btn_destructive.png')] bg-contain sepia leading-none",
          "text-[2.5rem] font-rethink font-[800] w-[3.6rem] h-[3.6rem] border-[.1rem] border-primary-black rounded-[.4rem]"
        ),
        outline: "",
        secondary: "",
        filter: cn(
          "relative text-[2.5rem] text-nowrap flex flex-nowrap justify-center items-center text-pda-destructive font-roboto_condensed px-[1.2rem] pl-[4.4rem] py-[.8rem] rounded-[.4rem] bg-pda-gray border-[.1rem] border-pda-border",
          "before:content-[''] before:absolute before:left-[1.2rem] before:top-[1.6rem] before:bg-[url(/svg/filter.svg)] before:bg-cover before:w-[2.4rem] before:h-[2.4rem]"
        ),
        link: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
