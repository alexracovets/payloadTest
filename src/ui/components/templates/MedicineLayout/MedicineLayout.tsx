"use client";
import { Container, DescriptionPage, AtomImage, TableRowResistance, TableRowInfo } from "@components/atoms";
import { TitlePage } from "@components/molecules";
import { ElementType } from "@types";

export const MedicineLayout = ({ data }: { data: ElementType }) => {
    return (
        <Container className="pr-[48px]">
            <TitlePage title={data.name} subtitle={data.subtitle} short />
            <div className="flex justify-between items-start gap-x-[100px] pb-[32px]">
                <div className="flex flex-col gap-y-[64px] w-full">
                    <DescriptionPage texts={data.description} />
                    <div>

                    </div>
                </div>
                <div className="flex flex-col gap-y-[56px]">
                    <AtomImage
                        src={data.image.url}
                        alt={data.image.alt}
                        fill
                        className="w-[256px] h-[256px] mt-[-48px]"
                    />
                    <div>
                     
                    </div>
                </div>
            </div>
        </Container>
    )
}