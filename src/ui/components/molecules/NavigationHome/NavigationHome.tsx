"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@utils";

export const NavigationHome = () => {

    const [sections, setSections] = useState<{ id: string; title: string; link: string }[]>([]);

    useEffect(() => {
        const fetchPayloadData = async () => {
            try {
                const response = await fetch('/api/navigationHome');
                const data = await response.json();
                setSections(data.docs || []);
            } catch (error) {
                console.error('Error fetching NavigationHome data:', error);
            }
        };

        fetchPayloadData();
    }, []);

    return (
        <ul className="flex flex-col gap-y-4 w-full">
            {[...sections].reverse().map((section) => {
                return (
                    <li key={section.id}>
                        <Link
                            href={section.link}
                            className={cn(
                                "relative transition ease-in-out duration-300 w-full cursor-pointer flex justify-center items-center h-10 clip_startBtn",
                                "uppercase font-roboto_condensed text-[#EBEAE8] text-3xl text-center font-[600]",
                                "after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[url('/png/btn_home.png')] after:bg-cover after:opacity-0",
                                "hover:after:opacity-[1]",
                                "active:after:opacity-[1] active:bg-[#EBEAE8] active:text-[#0A0A09]"
                            )}
                        >
                            {section.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};