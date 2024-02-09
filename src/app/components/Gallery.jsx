'use client'
import Image from 'next/image'
import FotoGallery_01 from '../../../public/Multimedia/Galery_01.jpg'
import FotoGallery_02 from '../../../public/Multimedia/Galery_02.jpg'
import FotoGallery_03 from '../../../public/Multimedia/Galery_03.jpg'
import FotoGallery_04 from '../../../public/Multimedia/Galery_04.jpg'
import FotoGallery_05 from '../../../public/Multimedia/Galery_05.jpg'
import FotoGallery_06 from '../../../public/Multimedia/Galery_06.jpg'

export default function Gallery() {
    const MustangImage = [
        { img: FotoGallery_01, name: "Interior" },
        { img: FotoGallery_02, name: "Afuera lado" },
        { img: FotoGallery_03, name: "Rines" },
        { img: FotoGallery_04, name: "Afuera Atras" },
        { img: FotoGallery_05, name: "Motor shelbyGT500" },
        { img: FotoGallery_06, name: "afuera frontal" },
    ]

    return(
        <>
        <section className="flex justify-center">
        <div className='galery grid grid-cols-2 md:grid-cols-3 m-40 ml-0 mr-0 max-[1440px] overflow-hidden'>
        {MustangImage.map((photos,id) => (
            <picture key={id}>
                <Image
                src={photos.img}
                width={500}
                height={500}
                alt={photos.name}
                className='h-[300px] md:h-[400px] object-cover hover:scale-105 cursor-pointer'
                >

                </Image>
            </picture>
           ))}
      
        </div>
        </section>
        </>
    )
}