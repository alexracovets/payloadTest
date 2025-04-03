"use client";

import { HeaderWrapper, HeaderBorder } from "@components/atoms";
import { NavigationSection, HeaderTopSide } from "@components/molecules";

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderTopSide />
            <NavigationSection />
            <HeaderBorder />
        </HeaderWrapper >
    );
};