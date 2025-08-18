import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap"
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap"
})



export const metadata: Metadata = {
  title: "BankBoost - Banco 100% digital",
  description: "Desperte seu potencial financeiro com o Bankboost!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
