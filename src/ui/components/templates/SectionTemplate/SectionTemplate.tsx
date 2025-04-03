"use client";

import { Main, Sidebar, Content } from "@components/organisms";
import { ChildrenType } from "@types";

export const SectionTemplate = ({ children }: ChildrenType) => {
    return (
        <Main>
            <Sidebar />
            <Content>
                {children}
            </Content>
        </Main>
    );
};