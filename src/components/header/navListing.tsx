import Link from "next/link"



const NavLinks = [
    {
        text: "Produtos Boost",
        href: "#"
    },
    {
        text: "Conta digital PJ",
        href: "#"
    },
    {
        text: "Quem somos",
        href: "#"
    },
    {
        text: "Blog",
        href: "#"
    },
    {
        text: "Ajuda",
        href: "#"
    }

]

export function NavListing(){
    return(
        <nav className="flex items-center gap-10">
            {
                NavLinks.map(({text, href}) => (
                    <Link className="text-base text-white font-semibold transition-colors ease-linear [&:hover,&:focus]:text-yellow-10" key={text} href={href}>{text}</Link>
                ))
            }
        </nav>
    )
}