"use client";

import { useState } from "react";

import { cn } from "@utils";

export interface IconCategoryType {
  name: string;
  active: boolean;
}

export const CategoriesNavigationIcon = ({ name, active }: IconCategoryType) => {
  const [hover, setHover] = useState(false);
  const defaultColor = "#AFAC99";
  const activeColor = "#3F3830";


  return (
    <li
      className={cn(
        "flex justify-center items-center w-full py-[.9rem] bg-pda-ico rounded-[.4rem] cursor-pointer",
        "transition duration-300",
        active || hover ? "bg-pda-destructive" : "bg-pda-ico"
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="w-[3.2rem] h-[3.2rem]">...iconssss</div>
    </li>
  );
};
