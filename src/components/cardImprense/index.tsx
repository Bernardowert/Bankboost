import Image from "next/image";
import Link from "next/link";


interface CardImprenseProps{
    src: string;
    title: string;
    description: string;
    href: string;
}

export function CardImprense({src, href,title, description}: CardImprenseProps){
    return(
        <Link href={href} className="rounded-md bg-white/5 flex items-center gap-4 p-6 transition-colors ease-linear [&:hover,&:focus]:bg-white/20">
             <div className="w-full max-w-5 h-5 flex items-center justify-center">
                <Image
                src={src}
                alt={`Logo ${title}`}
                title={title}
                />
             </div>
             <div className="text-white text-sm">
                 <strong className="font-semibold">{title}</strong>
                 <p>{description}</p>
             </div>  
        </Link>
    )
}