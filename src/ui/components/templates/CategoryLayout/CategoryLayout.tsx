"use client";

import { Container } from "@components/atoms";
import { TitlePage, CategoryGridItem } from "@components/molecules";
import { CategoryType } from "@types";


export const CategoryLayout = ({ data }: { data: CategoryType }) => {
    return (
        <Container>
            <TitlePage title={data.name} subtitle={data.subtitle} />
            <CategoryGridItem list={data.activeElements} />
        </Container>
    )
}