'use client'
import Image from 'next/image'
import MustangAvanzado from '../../../public/Multimedia/image.imgs.full.high.webp'
import CustomButton from './CustomButton'

export default function MustangHistoria(){
    return(
        <div className='flex flex-col justify-start items-center text-white'>
        <div className='MustangHistoria__Text text-center absolute z-20 mt-5 md:mt-20'>
        <h4 className='text-2xl md:text-4xl mb-2'>El Mustang más avanzado de la historia</h4>
        <p className='text-xs lg:text-lg m-4 mb-0'>El desempeño ya corre por tus venas, pero su tecnología avanzada lo está llevando a otro nivel. Ya sean los medidores personalizados en la cabina, las llantas girando sin esfuerzo en la pista o tus dedos seleccionando el volumen del rugido del motor que más te guste, tú sabes que ahora tienes el control para adaptar tu experiencia de conducción como nunca antes.</p>
        <CustomButton title={"cotizalo>"} styles={"border-2 rounded-xl text-white bg-transparent p-2 pl-10 pr-10 mt-5 uppercase hover:bg-white hover:text-blue-500 transition-all duration-300"} />
        </div>
        <picture className='relative'>
            <Image
            src={MustangAvanzado}
            width={2000}
            height={1800}
            alt='mustang garaje'
            className='min-h-[600px] object-cover'
            >

            </Image>
        </picture>
        </div>
    )
}