"use client";

import { AtomImage, NavigationWrapper } from "@components/atoms";
import { ButtonKeyUp, SectionsGroup } from "@components/molecules";

export const NavigationSection = () => {
  return (
    <NavigationWrapper>
      <div className="absolute left-0 top-0 pointer-events-none">
        <AtomImage
          src="/pda/left_selection.png"
          alt="left"
          sizes="100%"
          priority
          fill
          className="w-[41rem] h-[8.8rem] select-none pointer-events-none"
        />
      </div>
      <div className="absolute right-0 top-0 pointer-events-none">
        <AtomImage
          src="/pda/right_selection.png"
          alt="left"
          sizes="100%"
          priority
          fill
          className="w-[41rem] h-[8.8rem] select-none pointer-events-none"
        />
      </div>
      <ButtonKeyUp action="prev-section">Q</ButtonKeyUp>
      <SectionsGroup />
      <ButtonKeyUp action="next-section">E</ButtonKeyUp>
    </NavigationWrapper>
  );
};
