'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
const MustangVistaPrevia = ({ mustangModelo }) => {

const [visible, isVisible] = useState("rojo")

useEffect(() => {
    console.log(visible)
}, [visible])

return(
<>
<picture className="Mustang__Imagen_Model m-10 ml-0 mr-0">
<Image
src={mustangModelo.imagen}
width={400}
height={400}
alt={mustangModelo.modelo}
className={`block ${visible === 'rojo' ? 'block' : 'hidden'}`}
>
</Image>
<Image
src={mustangModelo.imagen2}
width={400}
height={400}
alt={mustangModelo.modelo}
className={`block ${visible === 'azul' ? 'block' : 'hidden'}`}
>
</Image>
<Image
src={mustangModelo.imagen3}
width={400}
height={400}
alt={mustangModelo.modelo}
className={`block ${visible === 'gris' ? 'block' : 'hidden'}`}
></Image>
</picture>
<div className="Mustang__Colores flex gap-2">
<Image
src={mustangModelo.color1}
width={32}
height={32}
className="cursor-pointer"
alt="color mustang"
onClick={() => {isVisible("rojo")}}
>
</Image>
<Image
src={mustangModelo.color2}
width={32}
height={32}
className="cursor-pointer"
onClick={() => {isVisible("azul")}}
alt="color mustang"
>
</Image>
<Image
src={mustangModelo.color3}
width={32}
height={32}
className="cursor-pointer"
onClick={() => {isVisible("gris")}}
alt="color mustang"
>
</Image>
</div>
</> 
    )
}

export default MustangVistaPrevia