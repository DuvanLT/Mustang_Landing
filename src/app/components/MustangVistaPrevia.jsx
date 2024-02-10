'use client'
import Image from "next/image"
const MustangVistaPrevia = ({ mustangModelo }) => {
return(
<>
<picture className="Mustang__Imagen_Model m-10 ml-0 mr-0">
<Image
src={mustangModelo.imagen}
width={300}
height={300}
alt={mustangModelo.name}
>
</Image>
</picture>
<div className="Mustang__Colores flex gap-2">
<Image
src={mustangModelo.color1}
width={32}
height={32}
className="cursor-pointer"
alt="color mustang"
>
</Image>
<Image
src={mustangModelo.color2}
width={32}
height={32}
className="cursor-pointer"
alt="color mustang"
>
</Image>
<Image
src={mustangModelo.color3}
width={32}
height={32}
className="cursor-pointer"
alt="color mustang"
>
</Image>
</div>
</> 
    )
}

export default MustangVistaPrevia