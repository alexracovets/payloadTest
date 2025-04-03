"use client";

import Image from "next/image";

import { useTimer } from "@hooks";
import { cn } from "@utils";

export const Timer = () => {
    const { currentTime, isActive } = useTimer();

    return (
        <div className="w-[9.9rem] flex justify-center items-center gap-x-[.8rem]">
            <div
                className={cn(
                    "text-[1.6rem] text-pda-white font-roboto transition-opacity ease-in-out duration-300",
                    isActive ? "opacity-1" : "opacity-0"
                )}
            >
                {currentTime}
            </div>
            <div className="relative w-[1.6rem] h-[.8rem]">
                <Image src="/svg/battery.svg" alt="Battery" fill />
            </div>
        </div>
    );
};