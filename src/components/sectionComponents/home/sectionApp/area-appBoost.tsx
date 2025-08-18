import Image from "next/image";
import Link from "next/link";

import iconCredito from "@/assets/icons/icon-credito.svg";
import iconTaxas from "@/assets/icons/icon-taxas.svg";
import iconInvestimentos from "@/assets/icons/icon-invenstimentos.svg";
import { CardBoost } from "@/components/cardBoost";

const listBoost = [
    {
        iconSrc: iconCredito,
        title: "Cartão de crédito sem anuidade",
        description: "Conta digital com cartão de crédito sem anuidade e sem complicação"
    },
    {
        iconSrc: iconTaxas,
        title: "Sem taxas",
        description: "Transferências, boletos de depósito e outros serviços gratuitos"
    },
    {
        iconSrc: iconInvestimentos,
        title: "Mais investimentos",
        description: "Rendem mais que a poupança e você resgata quando quiser"
    }
]

export function AreaAppBoost(){
    return(
        <div className="w-full max-w-area-appBoost">
                 <div>
                        <h2 className="text-gray-800 font-poppins text-5xl font-semibold max-w-xl">Resolva sua vida direto pelo app boost!</h2>
                        <ul className="mt-14 mb-8 space-y-10">
                        {
                                listBoost.map(({iconSrc, title, description}) => (
                                    <li key={title} className="flex items-center gap-6 pb-8 border-b border-gray-200">
                                      <div className="w-full max-w-16 h-16 flex items-center justify-center">
                                        <Image
                                        src={iconSrc}
                                        alt={`icon ${title}`}
                                        title={`icon ${title}`}
                                        />
                                      </div>
                                       <div>
                                        <h3 className="text-2xl font-semibold font-poppins text-gray-800 mb-0.5">{title}</h3>
                                        <p className="text-lg text-gray-700">{description}</p>
                                       </div>
                                    </li>
                                ))
                        }
                        </ul>
                        <Link href="#" className="inline-flex items-end gap-2 font-medium leading-4 text-blue-10 after:content-[''] after:w-[13px] after:h-0.5 after:bg-yellow-20 transition-opacity ease-linear [&:hover,&:focus]:opacity-80">Conheça outros produtos</Link>
                 </div>
                 <CardBoost/>
         </div>
    )
}