"use client";

import { cn } from "@utils";
import { Text } from "@components/atoms";

import { useInternet } from "@hooks";

export const Internet = () => {
  const isOnline = useInternet();

  const lines = [
    {
      delay: "delay-0",
      height: "h-[30%]",
    },
    {
      delay: "delay-100",
      height: "h-[50%]",
    },
    {
      delay: "delay-200",
      height: "h-[75%]",
    },
    {
      delay: "delay-300",
      height: "h-[100%]",
    },
  ];

  return (
    <div className="w-[17.4rem] flex justify-center items-center gap-x-[0.8rem]">
      <div className="relative w-[1.6rem] h-[1.6rem]">
        <div className="flex justify-center items-end h-[1.6rem] gap-x-[0.2rem]">
          {lines.map((line, idx) => (
            <div
              key={idx}
              className={cn(
                "bg-light_white transition-all ease-in-out duration-500",
                line.delay,
                "w-[0.2rem]",
                isOnline ? line.height : "h-0"
              )}
            />
          ))}
        </div>
      </div>
      <Text variant="internet" asChild="span">
        {isOnline ? "Аномальна Зона" : "Немає з'єднання"}
      </Text>
    </div>
  );
};
