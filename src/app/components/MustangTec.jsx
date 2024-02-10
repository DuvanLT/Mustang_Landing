'use client'
import Image from "next/image"
import AntiColision from '../../../public/Multimedia/1608324669153.webp'
import ControlVelocidad from '../../../public/Multimedia/1608324697757.webp'
import CustomButton from "./CustomButton"
export default function MustangTec() {
    return(
        <div className="flex  flex-col md:flex-row items-center justify-center m-10 gap-10">
        <picture>
        <Image
        src={AntiColision}
        width={500}
        height={500}
        alt="Anti-Colision tecnology"
        >
        </Image>
        </picture>
        <div className="MustangTec__Text max-w-[400px]">
            <h2 className="text-blue-500 text-3xl">Asistente Anti-colision con detector de peatones</h2>
            <p>Al detectar un posible riesgo de colisión, con el vehículo de adelante o con un peatón que entra de improviso en la trayectoria, el sistema aplicará los frenos de forma automática para prevenir totalmente o reducir las consecuencias de un eventual choque.
Incluye sistema de frenado de emergencia.</p>
        <CustomButton title={"conocelo"} styles="rounded-lg text-white bg-blue-600 p-2 pl-12 pr-12 mt-5 uppercase" />
        </div>
        </div>

        
    )
}