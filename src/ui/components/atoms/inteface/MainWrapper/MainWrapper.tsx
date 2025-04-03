"use client";

import { ChildrenType } from "@types";

export const MainWrapper = ({ children }: ChildrenType) => {
    return (
        <main className="grid grid-cols-[52.5rem_auto] flex-grow">
            {children}
        </main>
    );
};