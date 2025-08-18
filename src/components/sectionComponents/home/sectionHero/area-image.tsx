import Image from "next/image";

import cardFront from "@/assets/card-front.svg";
import cardBack from "@/assets/card-back.svg";

const images = [
    {
        src: cardFront,
        alt: "Cartão bankBoost frontal",
        title: "Cartão bankBoost frontal",
        className:"top-0 left-0 z-10"
    },
    {
        src: cardBack,
        alt: "Cartão bankBoost posterior",
        title: "Cartão bankBoost posterior",
        className:"bottom-0 right-0"
    }
]


export function AreaImage(){
    return(
        <div className="w-full max-w-area-image mr-[-53px]">
             <h2 className="text-center font-poppins text-5xl text-white/80 font-semibold">Banco 100% digital</h2>
             <div className="relative w-full h-area-image mt-16">
                 {
                    images.map(({src,alt,title, className}) => (
                        <Image key={alt} src={src} alt={alt} title={title} quality={100} loading="eager" className={`absolute ${className}`}/>
                    ))
                 }
             </div>
        </div>
    )
}