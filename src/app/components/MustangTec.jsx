'use client'
import Image from "next/image"
import AntiColision from '../../../public/Multimedia/1608324669153.webp'
import ControlVelocidad from '../../../public/Multimedia/1608324697757.webp'
import CustomButton from "./CustomButton"
export default function MustangTec() {
    return(
        <>
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
        <div className="MustangTec__Text max-w-[500px]">
            <h2 className="text-blue-500 text-3xl text-balace mb-2">Asistente Anti-colision con detector de peatones</h2>
            <p>Al detectar un posible riesgo de colisión, con el vehículo de adelante o con un peatón que entra de improviso en la trayectoria, el sistema aplicará los frenos de forma automática para prevenir totalmente o reducir las consecuencias de un eventual choque.
Incluye sistema de frenado de emergencia.</p>
        <CustomButton title={"conocelo"} styles="rounded-lg text-white bg-blue-600 p-2 pl-12 pr-12 mt-5 uppercase hover:bg-blue-800 transition-all duration-500" />
        </div>
        </div>

        <div className="flex  flex-col md:flex-row-reverse items-center justify-center m-10  mt-20 gap-10">
        <picture>
        <Image
        src={ControlVelocidad}
        width={500}
        height={500}
        alt="Anti-Colision tecnology"
        >
        </Image>
        </picture>
        <div className="MustangTec__Text max-w-[500px]">
            <h2 className="text-blue-500 text-3xl text-balace mb-2">Control Adaptativo de Velocidad</h2>
            <p>Esta innovadora tecnología cuenta con sensores que miden la distancia y la velocidad de los vehículos que se encuentran en frente. Si estos aumentan o reducen su velocidad, tu Ford Mustang GT Premium Fastback ajustará de igual forma su velocidad acelerando o activando los frenos de forma dosificada</p>
        <CustomButton title={"cotizalo"} styles="rounded-lg text-white bg-blue-600 p-2 pl-12 pr-12 mt-5 uppercase hover:bg-blue-800 transition-all duration-500" />
        </div>
        </div>

        </>

        
    )
}