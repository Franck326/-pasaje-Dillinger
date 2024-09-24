import React, {useState, useEffect } from "react";
import VentanaCuentas from "../Cuentas-Componentes/ventana-de-cuentas"
import Mesa from "../Mesas-Componentes/mesa";
import NumeroDeMesa from "../Mesas-Componentes/numeroDeMesa";

function Salon (){
    const [mesas, setMesas] = useState([]);

    useEffect(() =>{
        const fetchMesas = async () => {
            const response = await fetch("http://localhost:8080/mesas/verMesas");
            const data = await response.json();
            setMesas(data);
        };
        fetchMesas();
    },[]);

    const actualizarEstado = (NumeroDeMesa, nuevoEstado) => {
        setMesas(mesas.map(mesa => mesa.NumeroDeMesa === NumeroDeMesa ? { ...mesa, estado: nuevoEstado } : mesa))
    };
    
    
    return(
        <div className="salon-page">
            <p className="letrasFondo">SALON</p>
            <VentanaCuentas/>
            {mesas.map(mesa =>(
                <Mesa key={mesa._id} mesa={mesa} actualizarEstado={actualizarEstado} adminView={false} />
            ))}
        </div>
    )
}

export default Salon;