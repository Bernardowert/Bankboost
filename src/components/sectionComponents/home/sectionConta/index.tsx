import { ContainerGRID } from "@/components/containerGRID";
import { AreaText } from "./areaText";
import Image from "next/image";

import cards from "@/assets/cardsGroup.png";

export function SectionConta(){
    return(
        <section className="py-28">
            <ContainerGRID className="flex items-center justify-between">
                <AreaText/>
                <Image
                 src={cards}
                 alt="Cartão BankBoost frontal e verso"
                 title="Cartão BankBoost frontal e verso"
                 draggable={false}
                />
            </ContainerGRID>
        </section>
    )
}