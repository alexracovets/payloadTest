"use client";

import Link from "next/link";

import { PDAStore, SectionStore } from "@store";
import { cn } from "@utils";

export const NavigationHome = () => {
    const sections = SectionStore(state => state.sections);
    const setIsPlayPDA = PDAStore((state) => state.setIsPlay);
    const setIsOpenPDA = PDAStore((state) => state.setIsOpen);

    const openPDA = () => {
        setIsOpenPDA(true);
        setIsPlayPDA(true);
    };

    return (
        <ul className="flex flex-col gap-y-4 w-full">
            {sections.map((section, idx) => {
                return (
                    <li key={idx}>
                        <Link
                            href={section.route}
                            onClick={openPDA}
                            className={cn(
                                "relative transition ease-in-out duration-300 w-full cursor-pointer flex justify-center items-center h-10 clip_startBtn",
                                "uppercase font-roboto_condensed text-[#EBEAE8] text-3xl text-center font-[600]",
                                "after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[url('/png/btn_home.png')] after:bg-cover after:opacity-0",
                                "hover:after:opacity-[1]",
                                "active:after:opacity-[1] active:bg-[#EBEAE8] active:text-[#0A0A09]"
                            )}
                        >
                            {section.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};