"use client";

import { Header, Footer } from "@components/organisms";
import { useCheckSection } from "@hooks";
import { ChildrenType } from "@types";

export const PDATemplate = ({ children }: ChildrenType) => {

    useCheckSection();

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};