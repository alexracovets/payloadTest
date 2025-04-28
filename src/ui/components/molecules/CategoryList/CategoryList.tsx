"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, AtomImage } from "@components/atoms";



interface CategoryListProps {
  list: {
    name: string;
    fullSlug: string;
    activeElements: {
      name: string;
      fullSlug: string;
    }[];
  };
}
export const CategoryList = ({ list }: CategoryListProps) => {

  return (
    <div className="bg-gray w-full max-w-[50%] border-[1px] border-border rounded-[4px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex justify-between items-center p-[16px] cursor-pointer">
            <Link href={`/pda/${list.fullSlug}`}
              onMouseEnter={(e) => e.preventDefault()}
              className={cn(
                'text-[#CABFB0] font-[500] text-[26px] font-roboto_condensed h-full flex justify-start items-center underline-none hover:underline',
              )}
            >
              <AtomImage
                src={list.icon.url}
                alt={list.icon.alt}
                fill
                className="w-[56px] h-[56px] mr-[16px]"
              />
              {list.name}
            </Link>
          </AccordionTrigger>
          <AccordionContent>
            <div
              className="flex w-full flex-col"
            >
              {list.activeElements.map((element, idx) => {
                return (
                  <Link key={idx} href={`/pda/${element.fullSlug}`}
                    className={cn(
                      "flex justify-start items-center w-full p-[16px] font-[400] text-[#CABFB0] text-[26px] font-roboto_condensed",
                      "nth-of-type-[2n-1]:bg-[#323231]",
                      "relative before:content-[''] before:absolute before:left-[16px] before:top-[50%] before:translate-y-[-50%] before:w-[6px] before:h-[6px] before:bg-[#CABFB0] before:rounded-full before:block",
                      "hover:before:bg-toxic_secondary hover:text-toxic_secondary"
                    )}
                  >
                    <p
                      className="underline ml-[16px]"
                    >
                      {element.name}
                    </p>
                  </Link>
                )
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  );
};
