"use client";

import { AtomImage } from "@components/atoms";

export const SidebarBorder = () => {
  return (
    <>
      <div className="absolute right-0 top-0 h-full w-[.8rem] select-none pointer-events-none">
        <AtomImage
          src="/pda/vertical_center.jpg"
          alt="border"
          sizes=".8rem"
          fill
          className="h-full w-[.8rem]"
        />
      </div>
      <div className="absolute left-0 top-0 h-full w-[.9rem] select-none pointer-events-none">
        <AtomImage
          src="/pda/left.jpg"
          alt="border"
          sizes=".9rem"
          fill
          className="h-full w-[.9rem]"
        />
      </div>
    </>
  );
};
