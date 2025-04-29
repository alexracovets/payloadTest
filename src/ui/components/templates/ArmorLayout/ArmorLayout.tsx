"use client";

import { Container, Text, AtomImage } from "@components/atoms";
import { TitlePage } from "@components/molecules";
import { ElementType } from "@types";

export const ArmorLayout = ({ data }: { data: ElementType }) => {
    return (
        <Container className="pr-[64px]">
            <TitlePage title={data.name} subtitle={data.subtitle} short />
            <div className="flex justify-between items-start gap-x-[100px]">
                <div className="flex flex-col gap-y-[64px] w-full">
                    <div className="flex flex-col gap-y-[24px] w-full">
                        {data.description.map((paragraph, idx) => (
                            <Text variant="description" key={idx}>{paragraph.text}</Text>
                        ))}
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <AtomImage
                        src={data.image.url}
                        alt={data.image.alt}
                        fill
                        className="w-[388px] h-[388px] mt-[-48px]"
                    />
                </div>
            </div>

        </Container>
    )
}