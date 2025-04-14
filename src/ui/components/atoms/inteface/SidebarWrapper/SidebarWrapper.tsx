"use client";

import { ChildrenType } from "@types";

export const SidebarWrapper = ({ children }: ChildrenType) => {
    return (
        <aside className="relative px-0.2" >
            <div className="flex flex-col gap-y-[2rem] w-full px-[2rem] py-[2rem]">
                {children}
            </div>
        </aside>
    );
};