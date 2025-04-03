"use client";

import Image from "next/image";

export const SidebarBorder = () => {
    return (
        <div className="absolute left-0 top-0 w-full h-full select-none pointer-events-none">
            <div className="relative w-full h-full">
                <div className="absolute right-0 top-0 h-full w-[8px]">
                    <div className="relative w-full h-full">
                        <Image src="/pda/vertical_center.jpg" fill alt="center" className="object-cover" />
                    </div>
                </div>
                <div className="absolute left-0 top-0  h-full w-[9px]">
                    <div className="relative w-full h-full">
                        <Image src="/pda/left.jpg" fill alt="center" className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};