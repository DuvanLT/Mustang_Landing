const MustangDetails = ({ mustangModelo }) => {
  return (
    <div className="Mustang__Top flex flex-col md:flex-row md:justify-around md:items-center md:h-40 bg-zinc-950 text-white p-4">
     <div>
        <h3 className='text-xs m-2 ml-0'>Precio desde:</h3>
        <span className='text-xl m-2 ml-0'>${mustangModelo.precio}</span>
        </div>  
        <div>
        <h3 className='text-xs m-2 ml-0'>Valvulas</h3>
        <span className='text-xl m-2 ml-0'>{mustangModelo.valvulas}</span>
        </div>
        <div>
        <h3 className='text-xs m-2 ml-0'>Potencia</h3>
        <span className='text-xl m-2 ml-0'>{mustangModelo.potencia}HP</span>
        </div>
        <div>
        <h3 className='text-xs m-2 ml-0'>Motor</h3>
        <span  className='text-xl m-2 ml-0'>{mustangModelo.motor}</span>
        </div>
        <div>
        <h3 className='text-xs m-2 ml-0'>Asientos</h3>
        <span className='text-xl m-2 ml-0'>4</span>
        </div>   
    </div>
  )
}

export default MustangDetails;
