import Image from "next/image"

import iconAnuidade from "@/assets/icons/iconAnuidade.svg";
import iconDigital from "@/assets/icons/iconDigital.svg";
import iconDinheiro from "@/assets/icons/iconDigital.svg";

const list = [
    {
        icon:iconAnuidade,
        description: "Cartão sem  anuidade" 
    },
    {
        icon:iconDigital,
        description: "Conta digital 100% grátis"
    },
    {
        icon:iconDinheiro,
        description: "Seu dinheiro rendendo mais"
    }
]

export function Listing(){
    return(
        <ul className="flex items-center gap-16 mt-16 w-full max-w-listing">
             {
                list.map(({icon, description}) => (
                   <li key={description} className="flex items-center gap-3">
                       <div className="bg-linear-01 w-full max-w-12 h-12 flex items-center justify-center rounded-full">
                          <Image
                           src={icon}
                           alt={`Logo ${description}`}
                           title={`Logo ${description}`}
                          />
                       </div>
                       <p className="text-base text-white ">{description}</p>
                   </li>
                ))
             }
        </ul>
    )
}