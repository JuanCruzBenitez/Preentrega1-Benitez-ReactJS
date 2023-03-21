import React, { useState } from 'react';

function  CartWidget() {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  }

 const disminuirContador = () => {
  setContador(contador - 1);
  if(contador<=0){
    setContador(0);
  }
 }


  return (
    <div className=" CartWidget">
      <span className="contador">{contador}</span>
      <button className='borde-Carrito' onClick={aumentarContador}><img  className='logo-Carrito'  src="/img/carrito-de-compra-anadir.png" alt="Carrito de compras" /></button>
      <button className='borde-Carrito' onClick={disminuirContador}><img className='logo-Carrito'  src="/img/carrito-menos.png" alt="" /></button>

    </div>
  );
}
export default CartWidget;
