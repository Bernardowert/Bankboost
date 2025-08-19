import { twMerge } from "tailwind-merge";


interface ButtonProps {
    text:string;
    className?:string;
    style: buttonKey;
}


type buttonKey = keyof typeof buttonStyles;

const buttonStyles= {
    btnPrimary: "bg-yellow-10 text-orange-10 [&:hover,:focus]:opacity-90",
    btnSecondary: "border border-white text-white [&:hover,:focus]:bg-white [&:hover,:focus]:text-black"
}


export function Button({text, className, style}: ButtonProps){
    const defaultClass = `inline-block px-6 py-3 text-base rounded-full font-semibold transition-all ease-linear ${buttonStyles[style]}`
    const combinedClass = twMerge(defaultClass, className);
    return(
        <button className={combinedClass}>
            {text}
        </button>
    )
}