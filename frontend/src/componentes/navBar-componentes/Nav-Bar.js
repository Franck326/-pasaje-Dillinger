import React from "react";
import BotonNav from "./Botones-nav";

function NavBar({ setCambiarLocacion}){
  return(
    <div className="nav-bar">
      <img className="Logo-Dilinger"
      src="/logo192.png"
      alt="D"/>
      <p className="logo-nombre">illinger</p>
      <div className="contenedor-botones">
        <BotonNav
        nombre="Salon"
        onChengeLocation={setCambiarLocacion}
        />
        <BotonNav
        nombre="Mesas"
        onChengeLocation={setCambiarLocacion}
        />
        <BotonNav
        nombre="Cuentas"
        onChengeLocation={setCambiarLocacion}
        />
        <BotonNav
        nombre="Otros"
        onChengeLocation={setCambiarLocacion}
        />
      </div>
    </div>
  )
}

export default NavBar;