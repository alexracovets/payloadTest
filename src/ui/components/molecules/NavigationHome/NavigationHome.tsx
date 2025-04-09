"use client";

import Link from "next/link";
import { cn } from "@utils";
import { usePayloadData } from "@/hooks";

interface SectionType {
  id: string;
  name: string;
  link: string;
}

export const NavigationHome = () => {
  const sections = usePayloadData<SectionType>("/api/sections");

  return (
    <ul className="flex flex-col gap-y-4 w-full">
      {sections.map((section) => {
        return (
          <li key={section.id}>
            <Link
              href={section.link}
              className={cn(
                "relative transition ease-in-out duration-300 w-full cursor-pointer flex justify-center items-center h-[4rem] clip_startBtn",
                "uppercase font-roboto_condensed text-[#EBEAE8] text-[3.2rem] text-center font-[600]",
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
