"use client";

import { HeaderWrapper, AtomImage } from "@components/atoms";
import { NavigationSection, HeaderTopSide } from "@components/molecules";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTopSide />
      <NavigationSection />
      <AtomImage
        src="/pda/top.png"
        alt="top"
        sizes="1rem"
        fill
        className="w-full h-[1rem] select-none pointer-events-none"
      />
    </HeaderWrapper>
  );
};
