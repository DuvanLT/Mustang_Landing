import EcoBoost from '../../../public/Multimedia/EcoBoost.png'
import EcoBoost2 from '../../../public/Multimedia/Ecoboost_azul.png'
import EcoBoost3 from '../../../public/Multimedia/EcoBoost_Gris.png'
import GTV8rojo from '../../../public/Multimedia/GT_V8_rojo.png'
import GTV8azul from '../../../public/Multimedia/GT_V8_azul.png'
import GTV8Gris from '../../../public/Multimedia/GT_V8.png'
import Mach1 from '../../../public/Multimedia/Mach1_Rojo.png'
import Mach1_azul from '../../../public/Multimedia/Mach1_azul.png'
import Mach1_negro from '../../../public/Multimedia/Mach1_Negro.png'
import GT350 from '../../../public/Multimedia/GT350_Rojo.png'
import GT350_azul from '../../../public/Multimedia/GT350_Azul.png'
import GT350_gris from '../../../public/Multimedia/GT350_gris.png'
import GT500 from '../../../public/Multimedia/Shelby500_rojo.png'
import GT500Azul from '../../../public/Multimedia/Shelby500_Azul.png'
import GT500gris from '../../../public/Multimedia/Shelby500_Gris.png'
import rojorally from '../../../public/Multimedia/rojo_rally.png'
import gris from '../../../public/Multimedia/gris.png'
import azul from '../../../public/Multimedia/azul.png'
import GT7_rojo from '../../../public/Multimedia/rojoseptima.png'
import GT7_azul from '../../../public/Multimedia/azulseptima.png'
import GT7_gris from '../../../public/Multimedia/griseptima.png'

export const mustangs = [
    {
       id: 1,
       modelo: "ecoBoost",
       imagen: EcoBoost, 
       imagen2: EcoBoost2,
       imagen3: EcoBoost3,
       motor: "2.3L Inline-4",
       valvulas: 16,
       potencia: 330,
       precio: "234.990.000" ,
       color1: rojorally,      
      color2: azul,
      color3: gris,
    },
    {
      id: 2,
      modelo: "Mustang GT",
      imagen: GTV8rojo,
      imagen2: GTV8azul ,
      imagen3: GTV8Gris, 
      motor: "5.0L Ti-VCT V8",
      valvulas: 16,
      potencia: 460,
      precio: "264.990.000" ,
      color1: rojorally,      
      color2: azul,
      color3: gris,
   },
    {
        id: 3,
        modelo: "Mach 1",
        imagen: Mach1, 
        imagen2: Mach1_azul ,
        imagen3: Mach1_negro, 
        motor: "5.0L Ti-VCT V8",
        valvulas: 32,
        potencia: 485,   
        precio: "300.000.000" ,  
        color1: rojorally,      
      color2: azul,
      color3: gris,
     },
     {
      id: 4,
      modelo: "GT350",
      imagen: GT350, 
      imagen2: GT350_azul,
      imagen3: GT350_gris,
      motor: "5.2L Voodoo V8",
      valvulas: 32,
      potencia: 526,   
      precio: "340.000.000" ,  
      color1: rojorally,      
      color2: azul,
      color3: gris,
   },
   {
      id: 5,
      modelo: "GT500",
      imagen: GT500, 
      imagen2: GT500Azul,
      imagen3: GT500gris,
      motor: "5.2L supercargado V8 Predator",
      valvulas: 32,
      potencia: 760,   
      precio: "390.000.000" ,  
      color1: rojorally,      
      color2: azul,
      color3: gris,
   },
   {
      id: 5,
      modelo: "Mustang GT 2024",
      imagen: GT7_rojo, 
      imagen2: GT7_azul,
      imagen3: GT7_gris,
      motor: "5.0L V8",
      valvulas: 32,
      potencia: 486,   
      precio: "259.990.000" ,  
      color1: rojorally,      
      color2: azul,
      color3: gris,
   },
   
]

export default mustangs