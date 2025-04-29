"use client";

import { Container } from "@components/atoms";
import { TitlePage, CategoryGridView } from "@components/molecules";
import { CategoryType } from "@types";


export const CategoryLayout = ({ data }: { data: CategoryType }) => {
    return (
        <Container>
            <TitlePage title={data.name} subtitle={data.subtitle} />
            <CategoryGridView list={data} />
        </Container>
    )
}