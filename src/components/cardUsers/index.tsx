import Image from "next/image";
import logoTwitter from "@/assets/logoTwitter.svg";
interface UsersProps{
    name: string;
    description:string;
}

export function CardUsers({name, description}: UsersProps){
    return(
        <div className="w-full max-w-96 h-52 bg-gray-100/55 rounded-lg px-10 py-7">
            <div className="flex items-center justify-between mb-5">
                <strong className="font-semibold text-lg text-gray-800">{name}</strong>
                <Image
                 src={logoTwitter}
                 alt="Logo Twitter"
                 title="Logo Twitter"
                />
            </div>
            <p className="text-gray-700 text-lg">
                {description}
            </p>
        </div>
    )
}