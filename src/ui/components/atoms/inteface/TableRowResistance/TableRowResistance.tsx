"use client";

import { AtomImage, Text } from "@components/atoms";

interface TableRowResistanceProps {
    name: string;
    value: number;
    image: string;
}

export const TableRowResistance = ({ image, name, value }: TableRowResistanceProps) => {
    return (
        <div className="flex w-full border-border border-[1px]">
            <div className="flex items-center w-[158px] min-w-[158px] bg-gray px-[12px] py-[8px] gap-x-[8px] ">
                <AtomImage
                    src={image}
                    alt={name}
                    fill
                    className="w-[32px] h-[32px]"
                />
                <Text variant="resistance">{name}</Text>
            </div>
            <div className="flex justify-center items-center p-[12px] w-[66px] min-w-[66px] border-x-border border-[1px]">
                <Text variant="resistance">{value}</Text>
            </div>
            <div className="flex justify-center items-center w-full px-[12px]">
                <div className="flex w-full bg-black_dark h-[10px]">
                    <div className="block w-[calc(100%/5)] h-full border-border-secondary border-[1px] border-r-none">
                        <div
                            className="h-full bg-gold border-dark_orange"
                            style={{
                                width: value < 1 ? `${value * 100}%` : "100%",
                                borderWidth: value === 0 ? "0" : "1px"
                            }}
                        />
                    </div>
                    <div className="block w-[calc(100%/5)] h-full border-border-secondary border-[1px] border-r-none">
                        <div
                            className="h-full bg-gold border-dark_orange"
                            style={{
                                width: value <= 1 ? "0%" : value > 1 && value < 2 ? `${(value - 1) * 100}%` : "100%",
                                borderWidth: value <= 1 ? "0" : "1px"
                            }}
                        />
                    </div>
                    <div className="block w-[calc(100%/5)] h-full border-border-secondary border-[1px] border-r-none">
                        <div
                            className="h-full bg-gold border-dark_orange"
                            style={{
                                width: value <= 2 ? "0%" : value > 1 && value < 3 ? `${(value - 2) * 100}%` : "100%",
                                borderWidth: value <= 2 ? "0" : "1px"
                            }}
                        />
                    </div>
                    <div className="block w-[calc(100%/5)] h-full border-border-secondary border-[1px] border-r-none">
                        <div
                            className="h-full bg-gold border-dark_orange"
                            style={{
                                width: value <= 3 ? "0%" : value > 1 && value < 4 ? `${(value - 3) * 100}%` : "100%",
                                borderWidth: value <= 3 ? "0" : "1px"
                            }}
                        />
                    </div>
                    <div className="block w-[calc(100%/5)] h-full border-border-secondary border-[1px]" >
                        <div
                            className="h-full bg-gold border-dark_orange"
                            style={{
                                width: value <= 4 ? "0%" : value > 1 && value < 5 ? `${(value - 4) * 100}%` : "100%",
                                borderWidth: value <= 4 ? "0" : "1px"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}