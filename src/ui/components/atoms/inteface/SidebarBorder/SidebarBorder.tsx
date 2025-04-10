"use client";

import Image from "next/image";

export const SidebarBorder = () => {
  return (
    <div className="absolute left-0 top-0 w-full h-full select-none pointer-events-none">
      <div className="relative left-0 top-0 w-full h-full">
        <div className="absolute right-0 top-0 h-full w-[8px]">
          <Image
            src="/pda/vertical_center.jpg"
            fill
            sizes="8px"
            alt="center"
            className="object-cover"
          />
        </div>
        <div className="absolute left-0 top-0 h-full w-[9px]">
          <Image
            src="/pda/left.jpg"
            fill
            sizes="9px"
            alt="center"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
