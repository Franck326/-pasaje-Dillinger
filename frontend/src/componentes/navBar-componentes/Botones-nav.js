import React from "react";

function BotonNav({nombre,onChengeLocation}) {
    return(
      <button className="boton-nav" 
      onClick={() =>onChengeLocation(nombre)}>
        <p>{nombre}</p>
      </button>
    );
}

export default BotonNav;