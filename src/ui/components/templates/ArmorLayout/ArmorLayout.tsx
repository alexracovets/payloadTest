"use client";

import { Container, DescriptionPage, AtomImage, TableRowResistance, TableRowInfo } from "@components/atoms";
import { TitlePage } from "@components/molecules";
import { ElementType } from "@types";

export const ArmorLayout = ({ data }: { data: ElementType }) => {
    return (
        <Container className="pr-[48px]">
            <TitlePage title={data.name} subtitle={data.subtitle} short />
            <div className="flex justify-between items-start gap-x-[100px] pb-[32px]">
                <div className="flex flex-col gap-y-[64px] w-full">
                    <DescriptionPage texts={data.description} />
                    <div className="flex flex-col w-full">
                        <TableRowResistance image={"/svg/thermal.svg"} name={"Тепловий"} value={data.resistances.thermal} />
                        <TableRowResistance image={"/svg/electrical.svg"} name={"Електричний"} value={data.resistances.electric} />
                        <TableRowResistance image={"/svg/chemical.svg"} name={"Хімічний"} value={data.resistances.chemical} />
                        <TableRowResistance image={"/svg/radiation.svg"} name={"Радіаційний"} value={data.resistances.radiation} />
                        <TableRowResistance image={"/svg/psy.svg"} name={"Псі"} value={data.resistances.psy} />
                        <TableRowResistance image={"/svg/physical.svg"} name={"Фізичний"} value={data.resistances.physical} />
                    </div>
                </div>
                <div className="flex flex-col gap-y-[56px]">
                    <AtomImage
                        src={data.image.url}
                        alt={data.image.alt}
                        fill
                        className="w-[388px] h-[388px] mt-[-48px]"
                    />
                    <div>
                        {
                            data.pageType === "masks" ?
                                <>
                                    <TableRowInfo name={"Вага"} value={`${data.info_mask.weight} кг`} image={"/svg/weight.svg"} />
                                    <TableRowInfo name={"Купони"} value={data.info_mask.price.toLocaleString('uk-UA')} image={"/svg/kupon.svg"} />
                                </> :
                                <>
                                    <TableRowInfo name={"Вага"} value={`${data.info.weight} кг`} image={"/svg/weight.svg"} />
                                    <TableRowInfo name={"Слоти для Артефактів"} value={data.info.artifact_slots} image={"/svg/artifacts_slots.svg"} />
                                    <TableRowInfo name={"Купони"} value={data.info.price.toLocaleString('uk-UA')} image={"/svg/kupon.svg"} />
                                </>
                        }
                    </div>
                </div>
            </div>
        </Container>
    )
}