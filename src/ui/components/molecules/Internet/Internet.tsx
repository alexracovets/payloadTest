"use client";

import { useInternet } from "@hooks";
import { cn } from "@utils";

export const Internet = () => {
    const isOnline = useInternet();

    return (
        <div className="w-[17.4rem] flex justify-center items-center gap-x-[.8rem]">
            <div className="relative w-[1.4rem] h-[1.4rem]">
                <div className="flex justify-center items-end h-[1.4rem] gap-x-[.1rem]">
                    <div
                        className={cn(
                            "w-[0.25rem] bg-[#A8A3A0] transition-all ease-in-out duration-500 delay-0",
                            isOnline ? "h-[30%]" : "h-[0%]"
                        )}
                    />
                    <div
                        className={cn(
                            "w-[0.25rem] bg-[#A8A3A0] transition-all ease-in-out duration-500 delay-100",
                            isOnline ? "h-[50%]" : "h-[0%]"
                        )}
                    />
                    <div
                        className={cn(
                            "w-[0.25rem] bg-[#A8A3A0] transition-all ease-in-out duration-500 delay-200",
                            isOnline ? "h-[75%]" : "h-[0%]"
                        )}
                    />
                    <div
                        className={cn(
                            "w-[0.25rem] bg-[#A8A3A0] transition-all ease-in-out duration-500 delay-300",
                            isOnline ? "h-[100%]" : "h-[0%]"
                        )}
                    />
                </div>
            </div>
            <span className="text-[1.6rem] text-pda-white font-roboto">
                {isOnline ? "Аномальна Зона" : "Немає з'єднання"}
            </span>
        </div>
    );
};