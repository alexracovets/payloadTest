"use client";

import { AtomImage, ContentWrapper } from "@components/atoms";
import { ChildrenType } from "@types";

export const Content = ({ children }: ChildrenType) => {
  return (
    <ContentWrapper>
      <div className="absolute right-0 top-0 w-[.9rem] h-full select-none pointer-events-none">
        <AtomImage
          src="/pda/right.jpg"
          alt="center"
          sizes=".9rem"
          fill
          className="w-[.9rem] h-full"
        />
      </div>
      {children}
    </ContentWrapper>
  );
};
