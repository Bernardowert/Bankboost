'use client'

import { ReactNode, useEffect, useState } from "react"



interface HeaderProps{
    children:ReactNode;
}



export function HeaderComponent({children}:HeaderProps){
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
          {children}
        </header>
    )
}