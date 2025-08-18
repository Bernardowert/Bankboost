import Image from "next/image";
import { Button } from "../buttons";


import cardFront from "@/assets/cardPejota.png";


export function CardBoost(){
    return(
        <div className="w-full h-area-image rounded-lg bg-linear-01 flex items-center pl-16 mt-32">
              <div>
                  <h2 className="text-4xl text-white font-semibold font-poppins">Boost Pejota</h2>
                  <h3 className="text-3xl my-2 text-white">Contas digitais PJ gratuitas para decolar seu negócio!</h3>
                  <p className="text-gray-200 mb-8">As melhores contas para fazer pagamentos, compras e receber dos seus clientes.</p>
                  <div className="space-x-4">
                      <Button text="Sou MEI" style="btnPrimary"/>
                      <Button text="SOU ME" style="btnPrimary"/>
                  </div>
              </div>
              <Image
               src={cardFront}
                alt="Icone cartão BankBoost"
                title="cartão BankBoost"
                className="relative right-[-29px]"
                draggable={false}
              />
        </div>
    )
}