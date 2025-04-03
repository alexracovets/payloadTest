"use client";

import { HeaderNavBg, NavigationWrapper } from "@components/atoms";
import { ButtonKeyUp, SectionsGroup } from "@components/molecules";

export const NavigationSection = () => {
    return (
        <NavigationWrapper>
            <HeaderNavBg />
            <ButtonKeyUp action="prev-section">Q</ButtonKeyUp>
            <SectionsGroup />
            <ButtonKeyUp action="next-section">E</ButtonKeyUp>
        </NavigationWrapper>
    );
};