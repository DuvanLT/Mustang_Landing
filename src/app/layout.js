import {  Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['200' , '300' , '400' , '500' , '700' ] });

export const metadata = {
  title: "Ford Mustang Colombia",
  description: "Pagina web para Ford Mustang Colombia",
};

export default function RootLayout({ children }) {
  return (
    /*Esta hecha con React + Next.js que se me olvidaba decirlo (Mustang >> Camaro)
    Si no sabes diseño aprende figma aqui el diseño figma de esta web https://www.figma.com/file/kYqKDZ3NfeiwCaCCSq4QGB/Mustang?type=design&mode=design&t=YuuhfKmLAfDga0Hq-1
    */
    <html lang="es" class="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
