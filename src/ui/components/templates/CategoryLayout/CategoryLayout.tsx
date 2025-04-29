"use client";

import { Container } from "@components/atoms";
import { TitlePage } from "@components/molecules";
import { CategoryType } from "@types";


export const CategoryLayout = ({ data }: { data: CategoryType }) => {
    return (
        <Container>
            <TitlePage title={data.name} subtitle={data.subtitle} />
        </Container>
    )
}