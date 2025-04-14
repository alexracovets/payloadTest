"use client";

import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@components/molecules";
import { CategoriesNavigationIcon } from "./CategoriesNavigationIcon";
import { useNavigationStore } from "@/store";

export const CategoriesNavigation = () => {
  const [api, setApi] = useState<CarouselApi>();
  const categories = useNavigationStore((state) => state.categories);

  const categoryClick = (to: number) => {
    if (api) {
      api.scrollTo(to);
    }
  };

  return (
    <Carousel
      className="max-w-[37.6rem] w-full mx-auto"
      setApi={setApi}
      opts={{ align: "start", loop: true, dragFree: true, skipSnaps: true }}
    >
      <CarouselContent className="min-h-[5rem]">
        {categories.map((item, idx) => {
          return (
            <CarouselItem
              key={idx}
              onClick={() => categoryClick(idx)}
              className="basis-1/4"
            >
              <CategoriesNavigationIcon name={item} active={activeIndex === idx} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious data-menu_pda-previous>A</CarouselPrevious>
      <CarouselNext data-menu_pda-next>D</CarouselNext>
    </Carousel>
  );
};
