import Image from "next/image";
import { ContainerGRID } from "../containerGRID";

import logo from "@/assets/logo.svg"
import { NavListing } from "./navListing";
import { Button } from "../buttons";
import Link from "next/link";
import { HeaderComponent } from "./headerComponent";


export function Header(){
   
    return(
        <HeaderComponent>
            <ContainerGRID className="flex items-center justify-between">
              <Link href="/">
                 <Image
              src={logo}
              alt="Logo BankBoost"
              title="Logo BankBoost"
              draggable={false}
              />
              </Link>
              <NavListing/>
              <Button text="Abra sua conta digital" style="btnSecondary"/>
            </ContainerGRID>
        </HeaderComponent>
    )
}