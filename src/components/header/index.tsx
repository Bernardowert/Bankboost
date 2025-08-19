'use client'


import Image from "next/image";
import { ContainerGRID } from "../containerGRID";

import logo from "@/assets/logo.svg"
import { NavListing } from "./navListing";
import { Button } from "../buttons";
import Link from "next/link";
import { useEffect, useState } from "react";


export function Header(){
   const[scroll, setScroll] = useState(false);
    
   useEffect(() => {
         function handleScroll(){
            setScroll(window.scrollY > 0);
         }

         window.addEventListener('scroll', handleScroll);

         handleScroll();

         return () => {
            window.removeEventListener('scroll', handleScroll);
         }
   }, []);
    return(
        <header style={scroll ? {backgroundColor: "#35189C", boxShadow: "0 0 1px #000", borderBottom: "none"} : { backgroundColor: "transparent"}} className="w-full fixed h-24 flex items-center border-b border-white/15  z-50 transition-all ease-linear">
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
              <Button text="Abra sua conta digital" style={scroll ? "btnPrimary" : "btnSecondary"}/>
            </ContainerGRID>
        </header>
    )
}