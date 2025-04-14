"use client";

import { Button, Input } from "@components/atoms";

export const SearchPages = () => {
  return (
    <div className="flex gap-x-[1.6rem]">
      <div className="flex items-center w-full">
        <Input placeholder="Пошук" />
      </div>
      <Button variant="filter">A-Я</Button>
    </div>
  );
};
