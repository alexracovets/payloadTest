"use client";

import Image from "next/image";

export const HeaderBorder = () => {
    return (
        <div className="relative w-full h-[1rem] select-none pointer-events-none">
            <Image src="/pda/top.png" fill alt="top" className="object-cover" />
        </div>
    );
};