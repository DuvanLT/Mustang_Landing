import EcoBoost from '../../../public/Multimedia/EcoBoost.png'
import Mach1 from '../../../public/Multimedia/Mustang_Mach1.png'
import rojorally from '../../../public/Multimedia/rojo_rally.png'

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
       color2: rojorally,
       color3: rojorally,
    },
    {
        id: 3,
        modelo: "Mach 1",
        imagen: Mach1, 
        motor: "5.0L Ti-VCT V8",
        valvulas: 32,
        potencia: 485,   
        precio: "300.000.000" ,  
        color: ""  
     },

]

export default mustangs