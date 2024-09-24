import React from "react";
import FormularioCuenta from "./formulario-cuenta";

function VentanaCuentas (){
    return(
        <div className="VentanaCuenta">
            <h2>Nueva Cuenta</h2>
            <FormularioCuenta />
        </div>
    )
}
export default VentanaCuentas;