import Image from "next/image";


import mockupIphone from "@/assets/mockup-iphone-01.svg";
import iconApp from "@/assets/icon-app-download.png";
import playStoreIcon from "@/assets/playstore-download.svg";
import appleStoreIcon from "@/assets/apple-download.svg";
import Link from "next/link";


const downloads = [
    {
        name: "Play Store",
        href: "#",
        pathName: playStoreIcon
    },
    {
        name: "Apple Store",
        href: "#",
        pathName: appleStoreIcon
    }
]

export function AreaMockup(){
    return(
           <div className="w-full max-w-area-app mt-[-40px]">

            <Image
            src={mockupIphone}
            alt="Mockup Iphone"
            title="Mockup Iphone"
            draggable={false}
            className="w-full h-mockup object-cover"
            />

            <div className="w-full  flex items-center flex-col before:content-[''] before:block before:w-[5px] before:h-[83px] before:mb-[29px] before:bg-detail">

                <Image
                src={iconApp}
                alt="Icon App"
                title="Icon App"
                draggable={false}
                />

                <div className="text-center my-6">
                    <h3 className="text-gray-800 text-2xl font-semibold mb-2 font-poppins">Baixe nosso app</h3>
                    <p className="text-gray-700">Que tal abrir uma conta digital para ver como a gente faz a sua vida muito mais simples?</p>
                </div>

                <div className="space-y-4">
                    {
                        downloads.map(({href,pathName,name}) =>(
                            <Link key={name} href={href} className="block transition-opacity ease-linear [&:hover,&:focus]:opacity-85">
                                <Image
                                src={pathName}
                                alt={name}
                                title={name}
                                />
                            </Link>
                        ))
                    }
                </div>

            </div>
            </div>
    )
}