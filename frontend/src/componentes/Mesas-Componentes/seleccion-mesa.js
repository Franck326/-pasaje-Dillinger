import React from "react";

function SeleccionarMesa(props){
        return (
            <select id="mesa" name="mesa" required>
              {/* Opciones dinámicas podrían ser añadidas aquí */}
            {/* <option value="mesa_id_1">Mesa 1</option>
              <option value="mesa_id_2">Mesa 2</option> */}
            </select>
        );
        };

        export default SeleccionarMesa;