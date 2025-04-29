"use client";

import { AtomImage, HeaderTopWrapper } from "@components/atoms";
import { Internet, Timer } from "@components/molecules";

export const HeaderTopSide = () => {
  return (
    <HeaderTopWrapper>
      <Internet />
      <AtomImage
        src="/pda/plug.png"
        alt="plug"
        sizes="100%"
        priority
        fill
        className="w-[85.78125vw] min-w-[85.78125vw] h-[2.135416666666667vw] select-none pointer-events-none"
      />
      <Timer />
    </HeaderTopWrapper>
  );
};
