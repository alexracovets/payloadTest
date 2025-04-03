"use client";

import Image from "next/image";

export const ContentBorder = () => {
    return (
        <div className="absolute left-0 top-0 w-full h-full select-none pointer-events-none">
            <div className="relative w-full h-full">
                <div className="absolute right-0 top-0 w-[9px] h-full">
                    <div className="relative w-full h-full">
                        <Image src="/pda/right.jpg" fill alt="center" className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};