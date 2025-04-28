"use client";

import Link from "next/link";
import { memo } from "react";
import { cn } from "@utils";
import { Text } from "@components/atoms";

export interface SectionLinkType {
  route: string;
  id: number;
  name: string;
  currentSection: number | null;
  setDashActive: (section: number | null) => void;
}

export const SectionLink = memo(
  ({ route, id, name, currentSection, setDashActive }: SectionLinkType) => {
    return (
      <li>
        <Link
          id={id.toString()}
          href={route}
          onMouseEnter={() => setDashActive(id)}
          prefetch={true}
        >
          <Text
            variant="navigationSection"
            className={cn(
              "hover:font-[500] hover:text-active_white",
              currentSection === id ? "text-active_white" : "text-dark_white"
            )}
            asChild="span"
          >
            {name}
          </Text>
        </Link>
      </li>
    );
  }
);

SectionLink.displayName = "SectionLink";
