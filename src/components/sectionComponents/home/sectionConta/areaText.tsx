import Image from "next/image";


import iconAnuidade from "@/assets/icons/iconAnuidade.svg";
import iconDigital from "@/assets/icons/iconDigital.svg";
import iconDinheiro from "@/assets/icons/iconDinheiro.svg";
import { Button } from "@/components/buttons";


const listing = [
     {
          icon:iconAnuidade,
          title: "Cartão visa internacional",
          description: "Tenha facilidades e benefícios para o seu dia a dia."
     },
     {
          icon:iconDigital,
          title: "Zero mensalidade e anuidade",
          description: "Não gaste grana pagando taxas desnecessárias."
     },
     {
          icon:iconDinheiro,
          title: "Investimento que rende mais que a poupança",
          description: "Invista o seu dinheiro de maneira mais rentável."
     }
]

export function AreaText(){
    return(
        <div className="w-full max-w-area-Conta">
          <h2 className="font-poppins text-4xl font-semibold text-gray-800"><span className="text-gray-500 block">Aproveite</span> Domine o seu dinheiro com uma conta 100% digital</h2>
                
          <ul className="space-y-12 my-12">
             {
                 listing.map(({title,description,icon}) =>(
                    <li key={title} className="flex items-center gap-6">
                    <div className="w-full max-w-12 h-12 flex items-center justify-center bg-purple-30 rounded-lg">
                        <Image
                            src={icon}
                            alt={`icon ${title}`}
                            title={`icon ${title}`}
                            draggable={false} 
                        />
                    </div>
                    <div>
                        <h3 className="font-poppins text-xl font-semibold text-gray-800 mb-0.5">{title}</h3>
                        <p className="text-lg text-gray-700">{description}</p>
                    </div>
                    </li>
                 ))
             }
          </ul>
          <Button text="Abra sua conta digital" style="btnPrimary"/>
        </div>
    )
}