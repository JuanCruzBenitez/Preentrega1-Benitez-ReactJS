import React from 'react'
import CartWidget from '../CartWidget/CartWidget'






function NavBar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid ">
        <a class="navbar-brand" href="inicio"><img className=' logo-texto ' src="/img/vapes-store-photoroom-png-photoroom.webp" alt="" /></a>
        <div>
          <a href="Inicio"><img className='logo-img ' src="/img/logo.webp" alt="Logo" /></a>
          </div>
          <div className='ubicacionCarrito'><CartWidget></CartWidget></div>
        
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className='margenLink' id="navbarSupportedContent">
          <ul class=" navbar-nav me-auto mb-2 mb-lg-0">
            <li class=" nav-item">
              <a class=" nav-link active" aria-current="page" href="Inicio">Novedades</a>
            </li>
            <li class=" nav-item dropdown">
              <a class=" nav-link dropdown-toggle" href="Modelos" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Vapes
              </a>
              <ul class=" dropdown-menu " aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="Fumes">Fumes</a></li>
                <li><a class="dropdown-item" href="Supreme">Supreme</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>


  </nav>
  );
}
export default NavBar;

