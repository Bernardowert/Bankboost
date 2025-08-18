import { ContainerGRID } from "@/components/containerGRID";
import { AreaMockup } from "./area-Mockup";
import { AreaAppBoost } from "./area-appBoost";


export function SectionApp(){
    return(
        <section className="pt-28">
            <ContainerGRID className="flex items-start justify-between">
              <AreaMockup/>
              <AreaAppBoost/>
            </ContainerGRID>
        </section>
    )
}
