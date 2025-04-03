"use client";

import { Text } from "@components/atoms";

export const HomeLogo = () => {
    return (
        <h1 className="flex flex-col items-center justify-center mb-3">
            <Text variant="homeLogo" asChild="span">S.t.A.L.K.E.R. 2</Text>
            <Text variant="subHomeLogo" asChild="span">СЕРЦЕ ЧОРНОБИЛЯ</Text>
        </h1>
    );
};