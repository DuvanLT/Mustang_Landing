export default function Footer(){
    return(
        <>
        <footer className="bg-zinc-950 text-white text-xs flex flex-col md:flex-row gap-10 justify-between p-10">
        <ul className="flex flex-col gap-3">
        <li className="text-lg font-bold ">Vehiculos</li>
       <a href=""> <li>Todos</li> </a>
       <a href=""><li>Pick-ups</li> </a>
       <a href=""> <li>Camionetas</li> </a> 
       <a href=""><li>Automoviles</li> </a>
       <a href=""><li>Performance</li> </a>
        </ul>
        <ul className="flex flex-col gap-3">
        <li  className="text-lg font-bold">Cotizar</li>
        <a href=""><li>Cotizar aqui</li></a> 
        <a href=""><li>Comparador</li></a> 
        <a href=""><li>Compra Remota</li></a> 
        <a href=""><li>Terminos y Condiciones</li></a> 
        </ul>
        <ul className="flex flex-col gap-3">
        <li  className="text-lg font-bold">Posventa</li>
        <a href=""><li>Propietarios Ford</li></a> 
        <a href=""><li>Agencia Ford</li></a> 
        <a href=""><li>Ford Assistance</li></a> 
        <a href=""><li>Ford Protect</li></a> 
        <a href=""><li>Accesorios</li></a> 
        <a href=""><li>Repuestos Originales</li></a> 
        </ul>
        <ul className="flex flex-col gap-3">
        <li  className="text-lg font-bold">Acerca de Ford</li>
        <a href=""><li>Acerda de Ford Colombia</li></a> 
        <a href=""><li>Escencia Ford</li></a>  
        <a href=""><li>Ford Motor Company</li></a>
        <a href=""><li>Contacto</li></a> 
        </ul>
        </footer>
        </>
    )
}