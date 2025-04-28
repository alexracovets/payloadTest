"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@components/atoms";



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
                'text-[#CABFB0] font-[500] text-[26px] font-roboto_condensed p-[16px] h-full flex justify-start items-center underline-none hover:underline',
              )}
            >{list.name}</Link>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              {list.activeElements.map((element, idx) => {
                return <Link key={idx} href={`/pda/${element.fullSlug}`}>{element.name}</Link>
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  );
};
