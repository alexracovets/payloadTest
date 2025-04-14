"use client";

import Image from "next/image";
import { cn } from "@utils";
import { useNavigationStore } from "@store";

export const SectionsDash = () => {
  const { dashActive, dashPosition } = useNavigationStore();

  return (
    <div
      className={cn(
        "relative transition-opacity ease-out duration-300 select-none pointer-events-none",
        dashActive ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className={cn(
          "absolute bottom-[0] h-[.15rem] bg-custom-gradient transition-all ease-out duration-300 flex justify-center items-center"
        )}
        style={dashPosition.bigLine}
      >
        <div className="relative w-full h-full flex justify-center items-end">
          <div className="relative w-[8.5rem] h-[2.5rem]">
            <Image
              src="/pda/line_dot.png"
              fill
              alt="dot"
              sizes="100%"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-[.15rem] h-[.3rem] bg-custom-gradient_second transition-all ease-out duration-300 flex justify-center items-center"
        style={dashPosition.smallLine}
      >
        <div className="relative w-full h-full flex justify-center items-end">
          <div className="relative w-[4.4rem] h-[1.7rem] blur-[1rem]">
            <Image
              src="/pda/line_dot_small.png"
              fill
              alt="dot"
              sizes="100%"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
