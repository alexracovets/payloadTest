"use client";

import { ChildrenType } from "@types";

export const HeaderWrapper = ({ children }: ChildrenType) => {
    return (
        <header className="relative">
            {children}
        </header>
    );
};