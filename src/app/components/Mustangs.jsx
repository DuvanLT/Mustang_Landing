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
        <div className="Mustang__Bottom flex flex-col items-center md:flex-row  md:justify-around md:items-end mt-4 m-2">
        <select className='border-2 border-black p-1' value={mustang} onChange={handleSelectChange} id='mustangInfo'>
            <option value="ecoBoost">EcoBoost</option>
            <option value="Mustang GT">Mustang GT</option>
            <option value="Mach 1">Mustang Mach 1</option>
            <option value="GT350">Shelby GT350</option>
            <option value="GT500">Shelby GT500</option>
        </select>
        <MustangVistaPrevia mustangModelo={mustangModelo} />
       
        </div>
        </section>
        </>
    )
}