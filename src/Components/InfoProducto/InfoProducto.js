import React from 'react'
import './style.css'

const InfoProducto = ({producto}) => {
  return (
    <div className='InfoProducto-container'>
        <h1 className='Producto-title'>{producto.nombre_prod}</h1>
        <div className='space-border'></div>
        <p className='Producto-desc'><b>Descripción:</b><br/>{producto.descripcion_prod}</p>
        <div className='Producto-extra'>
            <p className='Producto-cate'><b>Categoria:</b> {producto.categoria}</p>
            <p className='Producto-precio'><b>Precio: </b><span className='span-price'>${producto.precio.toFixed(2)}</span></p>
            <p className='Producto-stock'><b>Stock:</b> {producto.stock}</p>
            <p className={producto.disponible === 1 ? "Producto-disponible" : 'Producto-noDisponible'}>{producto.disponible === 1 ? "Disponible" : "No disponible"}</p>
        </div>
    </div>
  )
}

export default InfoProducto
