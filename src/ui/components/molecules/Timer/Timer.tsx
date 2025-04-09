"use client";

import { useTimer } from "@hooks";
import { Text, AtomImage } from "@components/atoms";

export const Timer = () => {
  const { currentTime, isActive } = useTimer();
  console.log(isActive);
  return (
    <div className="w-[9.9rem] flex justify-center items-center gap-x-[.8rem]">
      <Text
        asChild="span"
        variant={"timer"}
        className={isActive ? "opacity-100" : "opacity-0"}
      >
        {currentTime}
      </Text>
      <AtomImage
        className="w-[1.6rem] h-[1.6rem]"
        src="/svg/battery.svg"
        alt="Battery"
        fill
      />
    </div>
  );
};
