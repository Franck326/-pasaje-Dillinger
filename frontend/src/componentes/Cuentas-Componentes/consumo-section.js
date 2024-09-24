import React from "react";
import EstadoDelPedido from "./estado-pedido"

function ConsumoSection(){
    return(
        <div className="consumo">
            <label htmlFor="estado">Estado:</label>
            <EstadoDelPedido />

            <label htmlFor="producto">Producto:</label>
            <input type="text" id="producto" name="producto"/>

            <label htmlFor="precio">Precio $:</label>
            <input type="number" id="number" name="number"/>
        </div>
        
    )
}

export default ConsumoSection;