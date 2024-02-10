import EcoBoost from '../../../public/Multimedia/EcoBoost.png'
import GTV8 from '../../../public/Multimedia/GT_V8.png'
import Mach1 from '../../../public/Multimedia/Mustang_Mach1.png'
import GT350 from '../../../public/Multimedia/GT350.png'
import GT500 from '../../../public/Multimedia/GT500.png'
import rojorally from '../../../public/Multimedia/rojo_rally.png'
import gris from '../../../public/Multimedia/gris.png'
import azul from '../../../public/Multimedia/azul.png'

export const mustangs = [
    {
       id: 1,
       modelo: "ecoBoost",
       imagen: EcoBoost, 
       motor: "2.3L Inline-4",
       valvulas: 16,
       potencia: 330,
       precio: "234.990.000" ,
       color1: rojorally,      
       color2: gris,
       color3: azul,
    },
    {
      id: 2,
      modelo: "Mustang GT",
      imagen: GTV8, 
      motor: "5.0L Ti-VCT V8",
      valvulas: 16,
      potencia: 460,
      precio: "264.990.000" ,
      color1: rojorally,      
      color2: gris,
      color3: azul,
   },
    {
        id: 3,
        modelo: "Mach 1",
        imagen: Mach1, 
        motor: "5.0L Ti-VCT V8",
        valvulas: 32,
        potencia: 485,   
        precio: "300.000.000" ,  
        color1: rojorally,      
        color2: gris,
        color3: azul,
     },
     {
      id: 4,
      modelo: "GT350",
      imagen: GT350, 
      motor: "5.2L Voodoo V8",
      valvulas: 32,
      potencia: 526,   
      precio: "340.000.000" ,  
      color1: rojorally,      
      color2: gris,
      color3: azul,
   },
   {
      id: 5,
      modelo: "GT500",
      imagen: GT500, 
      motor: "5.2L supercargado V8 Predator",
      valvulas: 32,
      potencia: 760,   
      precio: "390.000.000" ,  
      color1: rojorally,      
      color2: gris,
      color3: azul,
   },
   
]

export default mustangs