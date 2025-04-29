"use client";

import { Text, AtomImage } from "@components/atoms";

interface TableRowInfoProps {
    name: string;
    value: string | number;
    image: string;
}

export const TableRowInfo = ({ name, value, image }: TableRowInfoProps) => {
    return (
        <div
            className="flex border-border border-[1px] "
        >
            <div className="flex items-center gap-x-[8px] w-[234px] min-w-[234px] px-[12px] py-[6px] bg-gray border-r-border border-[1px]"
            >
                <AtomImage
                    src={image}
                    alt={name}
                    fill
                    className="w-[32px] h-[32px]"
                />
                <Text variant="resistance">{name}</Text>
            </div>
            <div className="flex justify-center items-center w-[158px] min-w-[158px] px-[12px] py-[10px]" >
                <Text variant="resistance">{value}</Text>
            </div>
        </div>
    )
}