"use client";

import Image from "next/image";

export const HeaderPlug = () => {
    return (
        <div className="relative w-[164.7rem] h-[4.1rem] pointer-events-none">
            <Image src="/pda/plug.png" fill priority alt="plug" className="object-cover" />
        </div>
    );
};