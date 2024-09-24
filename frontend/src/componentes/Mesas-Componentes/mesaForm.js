import React, { useState} from "react";
import NumeroDeMesa from "./numeroDeMesa";

function MesaForm ({cancelarCreacionDeMesa, onMesaCreada, siguienteNumero}) {
    const [numeroDeMesa, setNumeroDeMesa] = useState("siguienteNumero");
    const [asientos,setAsientos] = useState("");
    const [estado, setEstado] = useState("libre");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
    
    const nuevaMesa = {
        numeroDeMesa: Number(numeroDeMesa),
        asientos: Number(asientos),
        estado,
    };

    try {
        const response = await fetch("http://localhost:8080/mesas/crearMesa",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            
            },
            body: JSON.stringify(nuevaMesa),
        });

        if (response.ok) {
            const mesaCreada = await response.json();
            onMesaCreada(mesaCreada); //comunicacion entre componentes IMPORTANTE
            setNumeroDeMesa(siguienteNumero + 1); //numero disponible
            setAsientos("");
        }

    } catch (error) {
        console.error("Error al Crear Mesa",error);
    }
}


    return(
        <div className="ventanaCrearMesa">
            <section id="mesaForm">
            <button className="xCerrarFormMesas" onClick={cancelarCreacionDeMesa} >X</button>
            <form id="crearMesaForm" onSubmit={handleSubmit}>
                    <label htmlFor="numeroDeMesa"></label>
                    <h3>Numero de Mesa</h3>
                    <input
                    type="number"
                    id="numeroDeMesa"
                    value={numeroDeMesa}
                    onChange={(e) => setNumeroDeMesa(e.target.value)}
                    required
                    />
                    <label htmlFor="asientos">Cantidad de Asientos Disponibles:</label>
                    <input type="number" id="asientos" value={asientos}
                    onChange={(e) => setAsientos(e.target.value)}
                    required/>

                    <input className="botonEnviar" type="submit" value="Crear Mesa" ></input>
                    <button className="cerrarVentanaMesas" onClick={cancelarCreacionDeMesa}>Cancelar</button>
                </form>
            </section>
        </div>
    )
}
export default MesaForm;