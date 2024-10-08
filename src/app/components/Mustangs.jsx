'use client'
import { useEffect, useState } from 'react'
import mustangs from './DataMustang'
import MustangDetails from './MustangDetails'
import MustangVistaPrevia from './MustangVistaPrevia'
export default function Mustang(){
    const [mustang,setMustang] = useState("ecoBoost")

    function handleSelectChange(event) {
        setMustang(event.target.value)
        
    }

    useEffect(() => {
    }, [mustang])

    const mustangModelo = mustangs.find((m) => m.modelo === mustang)
    
    return(
        <>
        <section>
        <MustangDetails mustangModelo={mustangModelo} />
        <div className="Mustang__Bottom max-w-[1440px] m-auto  flex flex-col items-center md:flex-row  md:justify-around md:items-end mt-4">
        <select className='border-2 border-black p-1 bg-transparent' value={mustang} onChange={handleSelectChange} id='mustangInfo'>
            <option value="ecoBoost">EcoBoost</option>
            <option value="Mustang GT">Mustang GT</option>
            <option value="Mach 1">Mustang Mach 1</option>
            <option value="GT350">Shelby GT350</option>
            <option value="GT500">Shelby GT500</option>
            <option value="Mustang GT 2024">Mustang GT 2024</option>
        </select>
        <MustangVistaPrevia mustangModelo={mustangModelo} />
       
        </div>
        </section>
        </>
    )
}