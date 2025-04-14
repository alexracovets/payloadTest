"use client";

import { AtomImage } from "@components/atoms";

export const Footer = () => {
  return (
    <footer className="relative w-full flex justify-start items-center gap-x-[27.8rem] p-[1rem]">
      <div className="absolute left-0 top-0 w-full h-[.8rem]">
        <AtomImage
          src="/pda/horizontal_center.jpg"
          alt="border"
          sizes=".8rem"
          fill
          className="w-full h-[.8rem]"
        />
      </div>
      <div className="absolute left-0 bottom-0 w-full h-[.7rem]">
        <AtomImage
          src="/pda/bottom.jpg"
          alt="border"
          sizes=".7rem"
          fill
          className="w-full h-[.7rem]"
        />
      </div>
      <div className="absolute left-0 top-0 w-[.9rem] h-full">
        <AtomImage
          src="/pda/left_footer.jpg"
          alt="border"
          sizes=".9rem"
          fill
          className="w-[.9rem] h-full"
        />
      </div>
      <div className="absolute right-0 top-0 w-[.9rem] h-full">
        <AtomImage
          src="/pda/right_footer.jpg"
          alt="border"
          sizes=".9rem"
          fill
          className="w-[.9rem] h-full"
        />
      </div>
    </footer>
  );
};
