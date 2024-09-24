import React from "react";

function EstadoDelPedido(){
    return (
        <select id="estado" name="estado" required>
        <option value="Pendiente">Pendiente</option>
        <option value="Realizando">Realizando</option>
        <option value="Disponible">Disponible</option>
        <option value="Entregado">Entregado</option>
        </select>
    );
    };
    
    export default EstadoDelPedido;