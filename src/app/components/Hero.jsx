import Mustang_Hero from '../../../public/Multimedia/Mustang_hero.png'
import Image from "next/image"
import CustomButton from './CustomButton'
export default function Hero (){
    return(
        <>
        <div className='hero relative h-[580px] justify-center md:justify-start flex md:items-center'>
            <div className='hero__text text-center md:text-start  md:ml-10 lg:ml-24'>
                <h1 className='uppercase text-3xl sm:text-4xl md:text-6xl font-bold text-blue-600'>mustang is <br/> horse power</h1>
                <p className='text-gray-700 m-2 ml-0 text-balance text-xs md:text-lg md:max-w-[420px]'>Personaliza tu Mustang, añadele poder y roba miradas  con Ford Mustang</p>
                <CustomButton
                    title="Cotizar"
                    styles="rounded-lg text-white bg-blue-600 p-2 pl-12 pr-12 mt-5 uppercase hover:bg-blue-800 transition-all duration-500"
                 />
            </div>
            <Image
                 width={300}
                 height={300}
                 src={Mustang_Hero}
                 alt="Mustang Shelby GT500"
                 className='absolute bottom-0 right-0 md:w-[350px] lg:w-[400px]'
                 >
                 </Image>
        </div>
        </>
    )
}