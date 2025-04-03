"use client";

import { ContentBorder, ContentWrapper } from "@components/atoms";
import { ChildrenType } from "@types";

export const Content = ({ children }: ChildrenType) => {
    return (
        <ContentWrapper>
            <ContentBorder />
            {children}
        </ContentWrapper>
    );
};