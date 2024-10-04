import {  Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({ subsets: ["latin"], weight: ['200' , '300' , '400' , '500' , '700' ] });

export const metadata = {
  title: "Ford Mustang Colombia",
  description: "Pagina web para Ford Mustang Colombia",

};

export default function RootLayout({ children }) {
  return (
    <html lang="es" class="scroll-smooth">
      <Head>
      <link rel="icon" href="/Multimedia/logoMustang.png" type="image/png" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
