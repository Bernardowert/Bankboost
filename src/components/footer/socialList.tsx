import youtubeIcon from "@/assets/icons/youtube.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import Link from "next/link";
import Image from "next/image";


const socialLinks = [
    {
        name: "Youtube",
        href: "#",
        pathName: youtubeIcon
    },
    {
        name: "Linkedin",
        href: "#",
        pathName: linkedinIcon
    },
    {
        name: "Facebook",
        href: "#",
        pathName: facebookIcon
    },
    {
        name: "Instagram",
        href: "#",
        pathName: instagramIcon
    },
    {
        name: "Twitter",
        href: "#",
        pathName: twitterIcon
    }
]

export function SocialList(){
    return(
          <ul className="flex items-center gap-8">
              {
                socialLinks.map(({name,href,pathName}) => (
                    <li key={name}>
                        <Link href={href} className="[&:hover,:focus]:opacity-60 transition-opacity ease-linear">
                           <Image
                            src={pathName}
                            alt={name}
                            title={name}
                            draggable={false}  
                           />
                        </Link>
                    </li>
                ))
              }
          </ul>
    )
}