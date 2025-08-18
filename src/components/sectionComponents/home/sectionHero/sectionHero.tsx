import { Button } from "../../../buttons";
import { ContainerGRID } from "../../../containerGRID";
import { AreaImage } from "./area-image";
import { Listing } from "./listing";

export function SectionHero(){
    return(
        <section className="pb-20 pt-44 bg-linear-01">
            <ContainerGRID className="flex items-start justify-between">
                <div className="w-full max-w-description">
                    <h3 className="text-white/85 font-poppins text-2xl"> Abra sua conta, é só baixar o app!</h3>
                    <h1 className="text-gray-100 text-6xl/tight font-semibold my-8 font-poppins">Desperte seu potencial financeiro com o Bankboost!</h1>
                    <Button text="Abra sua conta digital" style="btnPrimary"/>
                    <Listing/>
                </div>
                <AreaImage/>
                
            </ContainerGRID>
        </section>
    )
}