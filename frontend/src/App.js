import './App.css';
import NavBar from './componentes/navBar-componentes/Nav-Bar';
import Salon from './componentes/pages-componentes/Salon-page';
import Cuentas from "./componentes/pages-componentes/Cuentas-page"
import Mesas from './componentes/pages-componentes/Mesa-page';
import Otros from './componentes/pages-componentes/Otros-page';
import React, {useState} from 'react';
// --------------------------------------cssc-------------------------------
import "../src/hojas-de-estilos/nav-bar.css"
import "../src/hojas-de-estilos/cuentas.css"
import "../src/hojas-de-estilos/mesas.css"

// ------------------------------------------------------------------------------------------------


function App() {

const [cambiarLocacion, setCambiarLocacacion] = useState("Salon")

const manejarCambioPagina = (pagina) => {
  setCambiarLocacacion(pagina)
}

const renderizarPagina = () => {
  switch(cambiarLocacion){
    case "Salon":
      return <Salon />;
    case "Cuentas":
      return <Cuentas />;
    case "Mesas":
      return <Mesas />;
    case "Otros":
      return <Otros />;
    default:
      return <Salon />
  }
}


  return (
    <div className="App">
      <NavBar 
      setCambiarLocacion={manejarCambioPagina}/>
      {renderizarPagina()}
    </div>
  );
}

export default App;
