"use client";

import { ChildrenType } from "@types";

export const NavigationWrapper = ({ children }: ChildrenType) => {
    return (
        <nav
            className="relative flex justify-center items-center bg-pda-black border-pda-border border-y-[.1rem] gap-x-[2.8rem] z-[1]"
        >
            {children}
        </nav>
    );
};