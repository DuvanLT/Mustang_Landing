import {  Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['200' , '300' , '400' , '500' , '700' ] });

export const metadata = {
  title: "Ford Mustang Colombia",
  description: "Pagina web para Ford Mustang Colombia",
};

export default function RootLayout({ children }) {
  return (
    /*Esta hecha con React + Next.js que se me olvidaba decirlo (Mustang >> Camaro)*/ 
    <html lang="es" class="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
