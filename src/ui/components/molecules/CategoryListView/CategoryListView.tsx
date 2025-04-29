"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, AtomLink } from "@components/atoms";
import { CategoryIcon } from "@components/atoms";
import { CategoryType } from "@types";

export const CategoryListView = ({ list }: { list: CategoryType }) => {
    return (
        <div className="bg-gray w-full max-w-[50%] border-[1px] border-border rounded-[4px]">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="flex justify-between items-center p-[16px] cursor-pointer">
                        <AtomLink href={`/pda/${list.fullSlug}`} variant="categoryList">
                            <CategoryIcon icon={list.icon} mask={list.icon_mask} />
                            {list.name}
                        </AtomLink>
                    </AccordionTrigger>
                    <AccordionContent className="flex w-full flex-col">
                        {list.activeElements.map((element, idx) => {
                            return (
                                <AtomLink key={idx} href={`/pda/${element.fullSlug}`} variant="categoryListItem">
                                    <p className="underline ml-[16px]">{element.name}</p>
                                </AtomLink>
                            )
                        })}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}