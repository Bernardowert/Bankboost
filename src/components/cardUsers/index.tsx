import Image from "next/image";
import logoTwitter from "@/assets/logoTwitter.svg";
interface UsersProps{
    name: string;
    description:string;
}

export function CardUsers({name, description}: UsersProps){
    return(
        <div className="w-full max-w-96 h-52 bg-gray-100/55 rounded-lg px-11 py-7">
            <div className="flex items-center justify-between mb-5">
                <strong>{name}</strong>
                <Image
                 src={logoTwitter}
                 alt="Logo Twitter"
                 title="Logo Twitter"
                />
            </div>
            <p>
                {description}
            </p>
        </div>
    )
}