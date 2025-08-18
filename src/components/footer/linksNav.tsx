import Link from "next/link";
import { CardImprense } from "../cardImprense";

import logoAtendimento from "@/assets/icons/iconAtendimento.svg";
import logoImprensa from "@/assets/icons/iconImprensa.svg";


const navListing = [
    {
        text: "Produtos Boost",
        links: [
            {
               linkText: "Cartão de crédito",
               href: "#"
            },
            {
               linkText: "Cartão pré-pago",
               href: "#"
            },
            {
               linkText: "Boost Mais",
               href: "#"
            },
            {
               linkText: "Investimentos",
               href: "#"
            },
            {
               linkText: "Empréstimo",
               href: "#"
            }
        ]
    },
    {
        text: "Conta digital PJ",
        links: [
            {
               linkText: "Sou MEI",
               href: "#"
            },
            {
               linkText: "Sou ME",
               href: "#"
            },
        ]
    },
    {
        text: "Blog",
        links: [
            {
               linkText: "#focanodinheiro",
               href: "#"
            },
            {
               linkText: "O poder da comunidade",
               href: "#"
            },
             {
               linkText: "Planilha de gastos",
               href: "#"
            },
        ]
    },
    {
        text: "Institucional",
        links: [
            {
               linkText: "Conheça a Bankboost",
               href: "#"
            },
            {
               linkText: "Trabalhe conosco",
               href: "#"
            },
             {
               linkText: "Termos de uso",
               href: "#"
            },
            {
               linkText: "Políticas de privacidade",
               href: "#"
            }
        ]
    },
     {
        text: "Ajuda",
        links: [
            {
               linkText: "Ouvidoria",
               href: "#"
            },
            {
               linkText: "Fale conosco",
               href: "#"
            },
        ]
    }
    
]

const links = [
    {
        text: "Atendimento:",
        imagePath: logoAtendimento,
        description: "oi@bankboost.com.br (24 horas)",
        href: "#"
    },
    {
        text: "Imprensa",
        imagePath: logoImprensa,
        description: "imprensa@bankboost.com.br",
        href: "#"
    }
]

export function LinksNav(){
    return(
        <div className="flex items-start justify-between border-b border-white/20 pb-14">

            <div className="flex items-start justify-between w-full max-w-footerNav">
                                {
                 navListing.map(({text, links}) => (
                     <div key={text}>
                        <strong className="text-base text-white text-semibold block mb-8">{text}</strong>
                        <ul className="space-y-8">
                            {
                                links.map(({linkText, href}) => (
                                    <li key={linkText}>
                                        <Link href={href} className="text-sm text-white/85 [&:hover,&:focus]:text-white transition-colors ease-linear">{linkText}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                     </div>
                 ))
              }
            </div>

            <div className="space-y-6">
                 {
                    links.map(({text, description, href, imagePath}) => (
                       <CardImprense key={text} src={imagePath} href={href} title={text} description={description}/>
                    ))
                 }
            </div>
        </div>
    )
}