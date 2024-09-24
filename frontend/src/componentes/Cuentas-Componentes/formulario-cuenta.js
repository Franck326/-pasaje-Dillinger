import React from "react"; 
import SeleccionarMesa from "../Mesas-Componentes/seleccion-mesa.js";
import ConsumoSection from "./consumo-section.js";

function FormularioCuenta(){
    return(
        <form className="crearCuentaForm" method="post">
            <label htmlFor="mesa">Seleccionar Mesa:</label>
            <SeleccionarMesa />

            <label htmlFor="consumno">Datos de consumo:</label>
            <ConsumoSection />

            <label htmlFor="total">Total:$</label>
            <input type="number" id="precio" name="total"></input>

            <input className="botonEnviar" type="submit" value="Crear Cuenta" />
            <span className="cerrarVtnCuenta" id="cerrarVtnCuenta">Cancelar</span>

        </form>
    )
}

export default FormularioCuenta;