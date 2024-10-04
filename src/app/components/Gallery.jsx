'use client'
import Image from 'next/image'
import FotoGallery_01 from '../../../public/Multimedia/Galery_01.jpg'
import FotoGallery_02 from '../../../public/Multimedia/Galery_02.jpg'
import FotoGallery_03 from '../../../public/Multimedia/Galery_03.jpg'
import FotoGallery_04 from '../../../public/Multimedia/Galery_04.jpg'
import FotoGallery_05 from '../../../public/Multimedia/Galery_05.jpg'
import FotoGallery_06 from '../../../public/Multimedia/Galery_06.jpg'
import FotoGallery_07 from '../../../public/Multimedia/Galery_07.webp'
import FotoGallery_08 from '../../../public/Multimedia/Galery_08.jpg'
import FotoGallery_09 from '../../../public/Multimedia/Galery_09.webp'
import { useState} from 'react'

export default function Gallery() {
    const MustangImage = [
        { index: 1,img: FotoGallery_01, name: "Interior"},
        { index: 2,img: FotoGallery_02, name: "Afuera lado" },
        { index: 3,img: FotoGallery_03, name: "Rines" },
        { index: 4,img: FotoGallery_04, name: "Afuera Atras" },
        { index: 5,img: FotoGallery_05, name: "Motor shelbyGT500" },
        { index: 6,img: FotoGallery_06, name: "afuera frontal" },
        { index: 7,img: FotoGallery_07, name: "2024 GT" },
        { index: 8,img: FotoGallery_08, name: "Afuera atras 2024" },
        { index: 9,img: FotoGallery_09, name: "afuera frontal 2024" },
    ]

    const [idImg,setIDImg] = useState(null)


    return(
        <>
         <section className="flex justify-center items-center relative">
         <div className={`galery grid grid-cols-2 md:grid-cols-3 m-40 ml-0 mr-0 max-[1840px] overflow-hidden ${idImg ? "brightness-50" : ""}`}>
        {MustangImage.map((photos,id) => (
            <picture key={id} onClick={() => setIDImg(photos.index)}>
                <Image
                src={photos.img}
                width={500}
                height={500}
                alt={photos.name}
                className='h-[300px] md:h-[400px] object-cover hover:scale-105 cursor-pointer'
                >

                </Image>
            </picture>
           )).slice(0,6)}
      
        </div>

        {idImg && (
                <section className='flex justify-center items-center mt-10 absolute h-full w-screen'  >
                    <svg  className='mx-2 lg:mx-10cursor-pointer'  onClick={() => {
                        setIDImg(idImg - 1)
                        if(idImg < 2){
                            setIDImg(8)
                        }
                    }}  xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m5 11h-5v4l-5-5l5-5v4h5z"/></svg>
                    {MustangImage.filter(img => img.index === idImg).map((photos, id) => (
                        <picture key={id} className='flex flex-col items-end'>
                            <svg onClick={() => { setIDImg(null)}} className='my-4 w-6 sm:w-10 lg:w-12 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z"/></svg>
                            <Image
                                src={photos.img}
                                width={600}
                                height={600}
                                alt={photos.name}
                                className='max-h-[500px] object-cover'
                            />
                        </picture>
                    ))}
                        <svg  className='mx-2 lg:mx-10 cursor-pointer'  onClick={() => {
                        setIDImg(idImg + 1)
                        if(idImg > 8){
                            setIDImg(1)
                        }
                    }} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 15v-4H7v-2h5V7l5 5z"/></svg>
                </section>
            )}
        </section>

        </>
    )
}