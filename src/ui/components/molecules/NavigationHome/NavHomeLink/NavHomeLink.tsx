"use client";

import Link from "next/link";
import { Text } from "@components/atoms";
import { cn } from "@utils";

interface NavHomeLinkProps {
  section: {
    name: string;
    fullSlug: string;
  };
}

export const NavHomeLink = ({ section }: NavHomeLinkProps) => {
  return (
    <li>
      <Link href={`pda/${section.fullSlug}`}>
        <Text
          variant="homeLink"
          className={cn(
            "relative transition ease-in-out duration-300 w-full flex justify-center items-center h-[4rem] clip_startBtn",
            "after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[url('/png/btn_home.png')] after:bg-cover after:opacity-0",
            "hover:after:opacity-[1]",
            "active:after:opacity-[1] active:bg-light_gray active:text-black_secondary"
          )}
        >
          {section.name}
        </Text>
      </Link>
    </li>
  );
};
