"use client";

import Image from "next/image";

export const HeaderPlug = () => {
  return (
    <div className="relative w-[85.78125vw] min-w-[85.78125vw] h-[2.135416666666667vw] pointer-events-none">
      <Image
        src="/pda/plug.png"
        fill
        priority
        alt="plug"
        className="object-cover"
      />
    </div>
  );
};
