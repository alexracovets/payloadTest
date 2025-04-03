"use client";

import { HeaderPlug, HeaderTopWrapper } from "@components/atoms";
import { Internet, Timer } from "@components/molecules";

export const HeaderTopSide = () => {
    return (
        <HeaderTopWrapper>
            <Internet />
            <HeaderPlug />
            <Timer />
        </HeaderTopWrapper>
    );
};