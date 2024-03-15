import React from 'react'
import './CardProducto.css'
import { Link } from 'react-router-dom'
const CardProducto = ({item}) => {
  return (
    <div  className='contenedor-card-productos'>
    <img className='imagen' src={item.image} alt={item.title} />
    <h2 className='titulo-producto'>{item.title}</h2>
    <p className='precio-producto'>${item.price}</p>
    <h3 className='categoria-producto'>{item.category}</h3>
    <Link to={`/detalle/${item.id}`}>Ver detalle</Link>
  </div>
  )
}

export default CardProducto