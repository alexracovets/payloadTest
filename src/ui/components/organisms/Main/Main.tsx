"use client";

import { MainWrapper } from "@components/atoms";
import { ChildrenType } from "@types";

export const Main = ({ children }: ChildrenType) => {
    return (
        <MainWrapper>
            {children}
        </MainWrapper>
    );
};