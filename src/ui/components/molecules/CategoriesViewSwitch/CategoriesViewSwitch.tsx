"use client";

import { ListIcon, GridIcon } from "./Icons";
import { cn } from "@/utils";
import { useElementsView } from "@store";

export const CategoriesViewSwitch = () => {
  const { isList, setIsList } = useElementsView();
  return (
    <div className="flex rounded-[4px] overflow-hidden">
      <button
        type="button"
        onClick={() => setIsList(true)}
        className={cn(
          "px-[12px] py-[8px] cursor-pointer",
          isList ? "bg-warm-sand" : "bg-light_black_secondary"
        )}
      >
        <ListIcon isActive={isList} />
      </button>
      <button
        type="button"
        onClick={() => setIsList(false)}
        className={cn(
          "px-[12px] py-[8px] cursor-pointer",
          isList ? "bg-light_black_secondary" : "bg-warm-sand"
        )}
      >
        <GridIcon isActive={!isList} />
      </button>
    </div>
  );
};
