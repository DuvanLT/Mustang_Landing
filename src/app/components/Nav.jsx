'use client'
import Image from "next/image"
import { useState } from "react"
import Logo from '../../../public/Multimedia/logoMustang.png'
export default function Nav() {
    const [nav, setNav] = useState(false)

    function handleClick() {
        setNav(!nav)
    }

    return(
        <>
        <header className="flex h-14 mb-2 justify-between md:justify-around  items-center ml-2 mr-2 md:mr-10">
            <Image
            src={Logo}
            width={62}
            height={62}
            alt="Logo Ford Mustang"
            ></Image>  
            <nav>
                <ul className={`flex flex-col justify-center items-center gap-4 font-bold text-xl absolute h-full w-[230px] right-0  z-40 bg-white top-0  transition-all duration-300 md:top-0 md:h-0 md:flex-row md:text-xs md:w-fit md:relative ${nav ? "top-0" : "top-[-30000px]"} `}>
                  <a href="#modelos">  <li onClick={handleClick} className="hover:text-blue-500 cursor-pointer">Modelos</li> </a>
                    <li onClick={handleClick} className="hover:text-blue-500 cursor-pointer">Cotizalo</li>
                    <li onClick={handleClick} className="hover:text-blue-500 cursor-pointer">Compra remota</li>
                </ul>
            </nav>  
            <div className="hero__menu z-40 flex flex-col items-end gap-1 md:hidden cursor-pointer" onClick={handleClick}>
                <div className="h-1 w-10 bg-black"></div>
                <div className="h-1 w-8 bg-black"></div>
            </div>
        </header>
        </>
    )
}