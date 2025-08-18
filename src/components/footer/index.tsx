import Link from "next/link";
import { ContainerGRID } from "../containerGRID";

import logo from "@/assets/logo.svg"
import Image from "next/image";
import { SocialList } from "./socialList";
import { LinksNav } from "./linksNav";

export function Footer(){
    return(
        <footer className="bg-purple-10 pt-10">
            <ContainerGRID>
                <div className="flex items-center justify-between border-b border-white/20 pb-10 mb-10">
                    <Link href="/">
                        <Image
                        src={logo}
                        alt="Logo BankBoost"
                        title="Logo BankBoost"
                        draggable={false}
                        />
                    </Link>
                    <div className="flex items-center gap-6">
                        <span className="text-sm text-white/85">Acompanhe nas redes</span>
                        <SocialList/>
                    </div>
                </div>
               <LinksNav/>
               <div className="flex items-center gap-4 mt-6 pb-10 border-b-4 border-yellow-20">
                  <span>😀</span>
                  <p className="text-sm text-white/80 max-w-description">Oi! Leu até aqui? Você se preocupa com os mínimos detalhes, mesmo. A gente também. Por isso o time Bankboost está sempre trabalhando para fazer a conta digital perfeita para você ; )</p>
               </div>
            </ContainerGRID>
        </footer>
    )
}