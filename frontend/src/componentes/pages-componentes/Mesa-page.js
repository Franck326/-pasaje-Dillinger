import React, { useState, useEffect } from "react";
import MesaForm from "../Mesas-Componentes/mesaForm";
import BotonCrearMesa from "../Mesas-Componentes/crearMesa";
import Mesa from "../Mesas-Componentes/mesa";

function Mesas() {
    const [despliegueFormMesa, setDespliegueFormMesa] = useState(false);
    const [mesas, setMesas] = useState([]);
    const [siguienteNumero, setSiguienteNumero] = useState(1);

    useEffect(() => {
        const fetchMesas = async () => {
            const response = await fetch("http://localhost:8080/mesas/verMesas");
            const data = await response.json();
            setMesas(data);
            const numeroDeMesa = data.map(mesa => mesa.numeroDeMesa);
            const maxNumero = Math.max(...numeroDeMesa);

            for(let i = 1; i <= maxNumero; i++){
                if (!numeroDeMesa.includes(i)){
                    setSiguienteNumero(i);
                    return;
                }
            }
            setSiguienteNumero(maxNumero + 1);
        };
        fetchMesas();
    }, []);

    const handleMesaCreada = (nuevaMesa) => {
        setMesas([...mesas, nuevaMesa]);
        setDespliegueFormMesa(false); // Ocultar el formulario después de crear la mesa
    };

    const actualizarEstado = (numeroDeMesa, nuevoEstado) => {
        setMesas(mesas.map(mesa =>
            mesa.numeroDeMesa === numeroDeMesa ? { ...mesa, estado: nuevoEstado } : mesa
        ));
    };

    const manejarDespliegueFormMesas = () => {
        console.log("Botón clickeado");
        setDespliegueFormMesa(true);
    };

    const cancelarMesaForm = () => {
        console.log("Clickeado X");
        setDespliegueFormMesa(false);
    };



    const eliminarMesa = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/mesas/eliminarMesa/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setMesas(mesas.filter(mesa => mesa._id !== id));
            } else {
                console.error("Error al eliminar la mesa");
            }
        } catch (error) {
            console.error("Error al eliminar la mesa:", error);
        }
    }

    return (
        <div className="mesas-page">
            <p className="letrasFondo">MESAS</p>
            <BotonCrearMesa abrirVentanitaFormMesas={manejarDespliegueFormMesas} />
            {despliegueFormMesa && (
                <MesaForm
                    cancelarCreacionDeMesa={cancelarMesaForm}
                    onMesaCreada={handleMesaCreada}
                    siguienteNumero={siguienteNumero}
                />
            )}
            {mesas.map((mesa) => (
                <Mesa key={mesa._id} mesa={mesa} actualizarEstado={actualizarEstado} eliminarMesa={eliminarMesa} adminView={true} />
            ))}
        </div>
    );
}

export default Mesas;