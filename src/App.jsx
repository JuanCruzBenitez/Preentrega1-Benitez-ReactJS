import React from 'react';
//ESTILOS
import './components/styles/AppEstilos.css'
//COMPONENTES
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Contenedor/ItemListContainer'




function App() {
  

  return (
<div className="App">
  <nav><NavBar/></nav>
  <body>
    <section><ItemListContainer titulo='¡Estamos en Ofertas!'/></section>  
  </body>
</div>
    );
}

export default App
